// ==========================================================================
// Cloud Firestore API (firestore v1)
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
  name: "firestore",
  version: "v1",
  rootUrl: "https://firestore.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface GoogleFirestoreAdminV1ImportDocumentsRequest {
  /** IDs of the collection groups to import. Unspecified means all collection groups that were included in the export. Each collection group in this list must be unique. */
  collectionIds?: ReadonlyArray<string>;
  /** An empty list represents all namespaces. This is the preferred usage for databases that don't use namespaces. An empty string element represents the default namespace. This should be used if the database has data in non-default namespaces, but doesn't want to include them. Each namespace in this list must be unique. */
  namespaceIds?: ReadonlyArray<string>;
  /** Location of the exported files. This must match the output_uri_prefix of an ExportDocumentsResponse from an export that has completed successfully. See: google.firestore.admin.v1.ExportDocumentsResponse.output_uri_prefix. */
  inputUriPrefix?: string;
}

export const GoogleFirestoreAdminV1ImportDocumentsRequest: Schema.Schema<GoogleFirestoreAdminV1ImportDocumentsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    collectionIds: Schema.optional(Schema.Array(Schema.String)),
    namespaceIds: Schema.optional(Schema.Array(Schema.String)),
    inputUriPrefix: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleFirestoreAdminV1ImportDocumentsRequest" });

export interface ReadOnly {
  /** Reads documents at the given time. This must be a microsecond precision timestamp within the past one hour, or if Point-in-Time Recovery is enabled, can additionally be a whole minute timestamp within the past 7 days. */
  readTime?: string;
}

export const ReadOnly: Schema.Schema<ReadOnly> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    readTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "ReadOnly" });

export interface ReadWrite {
  /** An optional transaction to retry. */
  retryTransaction?: string;
}

export const ReadWrite: Schema.Schema<ReadWrite> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    retryTransaction: Schema.optional(Schema.String),
  }).annotate({ identifier: "ReadWrite" });

export interface TransactionOptions {
  /** The transaction can only be used for read operations. */
  readOnly?: ReadOnly;
  /** The transaction can be used for both read and write operations. */
  readWrite?: ReadWrite;
}

export const TransactionOptions: Schema.Schema<TransactionOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    readOnly: Schema.optional(ReadOnly),
    readWrite: Schema.optional(ReadWrite),
  }).annotate({ identifier: "TransactionOptions" });

export interface GoogleFirestoreAdminV1SearchTextIndexSpec {
  /** Required. How to match the text field value. */
  matchType?: "TEXT_MATCH_TYPE_UNSPECIFIED" | "MATCH_GLOBALLY" | (string & {});
  /** Required. How to index the text field value. */
  indexType?: "TEXT_INDEX_TYPE_UNSPECIFIED" | "TOKENIZED" | (string & {});
}

export const GoogleFirestoreAdminV1SearchTextIndexSpec: Schema.Schema<GoogleFirestoreAdminV1SearchTextIndexSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    matchType: Schema.optional(Schema.String),
    indexType: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleFirestoreAdminV1SearchTextIndexSpec" });

export interface GoogleFirestoreAdminV1SearchTextSpec {
  /** Required. Specifications for how the field should be indexed. Repeated so that the field can be indexed in multiple ways. */
  indexSpecs?: ReadonlyArray<GoogleFirestoreAdminV1SearchTextIndexSpec>;
}

export const GoogleFirestoreAdminV1SearchTextSpec: Schema.Schema<GoogleFirestoreAdminV1SearchTextSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    indexSpecs: Schema.optional(
      Schema.Array(GoogleFirestoreAdminV1SearchTextIndexSpec),
    ),
  }).annotate({ identifier: "GoogleFirestoreAdminV1SearchTextSpec" });

export interface GoogleFirestoreAdminV1SearchGeoSpec {
  /** Optional. Disables geoJSON indexing for the field. By default, geoJSON points are indexed. */
  geoJsonIndexingDisabled?: boolean;
}

export const GoogleFirestoreAdminV1SearchGeoSpec: Schema.Schema<GoogleFirestoreAdminV1SearchGeoSpec> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    geoJsonIndexingDisabled: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleFirestoreAdminV1SearchGeoSpec" });

export interface GoogleFirestoreAdminV1SearchConfig {
  /** Optional. The specification for building a text search index for a field. */
  textSpec?: GoogleFirestoreAdminV1SearchTextSpec;
  /** Optional. The specification for building a geo search index for a field. */
  geoSpec?: GoogleFirestoreAdminV1SearchGeoSpec;
}

export const GoogleFirestoreAdminV1SearchConfig: Schema.Schema<GoogleFirestoreAdminV1SearchConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    textSpec: Schema.optional(GoogleFirestoreAdminV1SearchTextSpec),
    geoSpec: Schema.optional(GoogleFirestoreAdminV1SearchGeoSpec),
  }).annotate({ identifier: "GoogleFirestoreAdminV1SearchConfig" });

export interface BitSequence {
  /** The bytes that encode the bit sequence. May have a length of zero. */
  bitmap?: string;
  /** The number of bits of the last byte in `bitmap` to ignore as "padding". If the length of `bitmap` is zero, then this value must be `0`. Otherwise, this value must be between 0 and 7, inclusive. */
  padding?: number;
}

export const BitSequence: Schema.Schema<BitSequence> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bitmap: Schema.optional(Schema.String),
    padding: Schema.optional(Schema.Number),
  }).annotate({ identifier: "BitSequence" });

export interface BloomFilter {
  /** The bloom filter data. */
  bits?: BitSequence;
  /** The number of hashes used by the algorithm. */
  hashCount?: number;
}

export const BloomFilter: Schema.Schema<BloomFilter> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    bits: Schema.optional(BitSequence),
    hashCount: Schema.optional(Schema.Number),
  }).annotate({ identifier: "BloomFilter" });

export interface GoogleFirestoreAdminV1SearchIndexOptions {
  /** Optional. The language to use for text search indexes. Used as the default language if not overridden at the document level by specifying the `text_language_override_field`. The language is specified as a BCP 47 language code. For indexes with MONGODB_COMPATIBLE_API ApiScope: If unspecified, the default language is English. For indexes with `ANY_API` ApiScope: If unspecified, the default behavior is autodetect. */
  textLanguage?: string;
  /** Optional. The field in the document that specifies which language to use for that specific document. For indexes with MONGODB_COMPATIBLE_API ApiScope: if unspecified, the language is taken from the "language" field if it exists or from `text_language` if it does not. */
  textLanguageOverrideFieldPath?: string;
}

export const GoogleFirestoreAdminV1SearchIndexOptions: Schema.Schema<GoogleFirestoreAdminV1SearchIndexOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    textLanguage: Schema.optional(Schema.String),
    textLanguageOverrideFieldPath: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleFirestoreAdminV1SearchIndexOptions" });

export interface GoogleFirestoreAdminV1FlatIndex {}

export const GoogleFirestoreAdminV1FlatIndex: Schema.Schema<GoogleFirestoreAdminV1FlatIndex> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleFirestoreAdminV1FlatIndex",
  });

export interface GoogleFirestoreAdminV1VectorConfig {
  /** Required. The vector dimension this configuration applies to. The resulting index will only include vectors of this dimension, and can be used for vector search with the same dimension. */
  dimension?: number;
  /** Indicates the vector index is a flat index. */
  flat?: GoogleFirestoreAdminV1FlatIndex;
}

export const GoogleFirestoreAdminV1VectorConfig: Schema.Schema<GoogleFirestoreAdminV1VectorConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dimension: Schema.optional(Schema.Number),
    flat: Schema.optional(GoogleFirestoreAdminV1FlatIndex),
  }).annotate({ identifier: "GoogleFirestoreAdminV1VectorConfig" });

export interface GoogleFirestoreAdminV1IndexField {
  /** Indicates that this field supports nearest neighbor and distance operations on vector. */
  vectorConfig?: GoogleFirestoreAdminV1VectorConfig;
  /** Can be __name__. For single field indexes, this must match the name of the field or may be omitted. */
  fieldPath?: string;
  /** Indicates that this field supports operations on `array_value`s. */
  arrayConfig?: "ARRAY_CONFIG_UNSPECIFIED" | "CONTAINS" | (string & {});
  /** Indicates that this field supports search operations. This field is only currently supported for indexes with MONGODB_COMPATIBLE_API ApiScope. */
  searchConfig?: GoogleFirestoreAdminV1SearchConfig;
  /** Indicates that this field supports ordering by the specified order or comparing using =, !=, <, <=, >, >=. */
  order?: "ORDER_UNSPECIFIED" | "ASCENDING" | "DESCENDING" | (string & {});
}

export const GoogleFirestoreAdminV1IndexField: Schema.Schema<GoogleFirestoreAdminV1IndexField> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vectorConfig: Schema.optional(GoogleFirestoreAdminV1VectorConfig),
    fieldPath: Schema.optional(Schema.String),
    arrayConfig: Schema.optional(Schema.String),
    searchConfig: Schema.optional(GoogleFirestoreAdminV1SearchConfig),
    order: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleFirestoreAdminV1IndexField" });

export interface GoogleFirestoreAdminV1Index {
  /** The API scope supported by this index. */
  apiScope?:
    | "ANY_API"
    | "DATASTORE_MODE_API"
    | "MONGODB_COMPATIBLE_API"
    | (string & {});
  /** Immutable. The density configuration of the index. */
  density?:
    | "DENSITY_UNSPECIFIED"
    | "SPARSE_ALL"
    | "SPARSE_ANY"
    | "DENSE"
    | (string & {});
  /** Indexes with a collection query scope specified allow queries against a collection that is the child of a specific document, specified at query time, and that has the same collection ID. Indexes with a collection group query scope specified allow queries against all collections descended from a specific document, specified at query time, and that have the same collection ID as this index. */
  queryScope?:
    | "QUERY_SCOPE_UNSPECIFIED"
    | "COLLECTION"
    | "COLLECTION_GROUP"
    | "COLLECTION_RECURSIVE"
    | (string & {});
  /** Optional. Whether it is an unique index. Unique index ensures all values for the indexed field(s) are unique across documents. */
  unique?: boolean;
  /** Optional. The number of shards for the index. */
  shardCount?: number;
  /** Output only. The serving state of the index. */
  state?:
    | "STATE_UNSPECIFIED"
    | "CREATING"
    | "READY"
    | "NEEDS_REPAIR"
    | (string & {});
  /** Output only. A server defined name for this index. The form of this name for composite indexes will be: `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}/indexes/{composite_index_id}` For single field indexes, this field will be empty. */
  name?: string;
  /** Optional. Options for search indexes that are at the index definition level. This field is only currently supported for indexes with MONGODB_COMPATIBLE_API ApiScope. */
  searchIndexOptions?: GoogleFirestoreAdminV1SearchIndexOptions;
  /** The fields supported by this index. For composite indexes, this requires a minimum of 2 and a maximum of 100 fields. The last field entry is always for the field path `__name__`. If, on creation, `__name__` was not specified as the last field, it will be added automatically with the same direction as that of the last field defined. If the final field in a composite index is not directional, the `__name__` will be ordered ASCENDING (unless explicitly specified). For single field indexes, this will always be exactly one entry with a field path equal to the field path of the associated field. */
  fields?: ReadonlyArray<GoogleFirestoreAdminV1IndexField>;
  /** Optional. Whether the index is multikey. By default, the index is not multikey. For non-multikey indexes, none of the paths in the index definition reach or traverse an array, except via an explicit array index. For multikey indexes, at most one of the paths in the index definition reach or traverse an array, except via an explicit array index. Violations will result in errors. Note this field only applies to index with MONGODB_COMPATIBLE_API ApiScope. */
  multikey?: boolean;
}

export const GoogleFirestoreAdminV1Index: Schema.Schema<GoogleFirestoreAdminV1Index> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    apiScope: Schema.optional(Schema.String),
    density: Schema.optional(Schema.String),
    queryScope: Schema.optional(Schema.String),
    unique: Schema.optional(Schema.Boolean),
    shardCount: Schema.optional(Schema.Number),
    state: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    searchIndexOptions: Schema.optional(
      GoogleFirestoreAdminV1SearchIndexOptions,
    ),
    fields: Schema.optional(Schema.Array(GoogleFirestoreAdminV1IndexField)),
    multikey: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleFirestoreAdminV1Index" });

export interface GoogleFirestoreAdminV1ListIndexesResponse {
  /** The requested indexes. */
  indexes?: ReadonlyArray<GoogleFirestoreAdminV1Index>;
  /** A page token that may be used to request another page of results. If blank, this is the last page. */
  nextPageToken?: string;
}

export const GoogleFirestoreAdminV1ListIndexesResponse: Schema.Schema<GoogleFirestoreAdminV1ListIndexesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    indexes: Schema.optional(Schema.Array(GoogleFirestoreAdminV1Index)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleFirestoreAdminV1ListIndexesResponse" });

export interface Status {
  /** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
  details?: ReadonlyArray<Record<string, unknown>>;
  /** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
  message?: string;
  /** The status code, which should be an enum value of google.rpc.Code. */
  code?: number;
}

export const Status: Schema.Schema<Status> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    details: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
    message: Schema.optional(Schema.String),
    code: Schema.optional(Schema.Number),
  }).annotate({ identifier: "Status" });

export interface GoogleLongrunningOperation {
  /** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
  done?: boolean;
  /** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
  response?: Record<string, unknown>;
  /** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
  name?: string;
  /** The error result of the operation in case of failure or cancellation. */
  error?: Status;
  /** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
  metadata?: Record<string, unknown>;
}

export const GoogleLongrunningOperation: Schema.Schema<GoogleLongrunningOperation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    done: Schema.optional(Schema.Boolean),
    response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    name: Schema.optional(Schema.String),
    error: Schema.optional(Status),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "GoogleLongrunningOperation" });

export interface GoogleFirestoreAdminV1TtlConfigDelta {
  /** Specifies how the TTL configuration is changing. */
  changeType?: "CHANGE_TYPE_UNSPECIFIED" | "ADD" | "REMOVE" | (string & {});
  /** The offset, relative to the timestamp value in the TTL-enabled field, used determine the document's expiration time. */
  expirationOffset?: string;
}

export const GoogleFirestoreAdminV1TtlConfigDelta: Schema.Schema<GoogleFirestoreAdminV1TtlConfigDelta> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    changeType: Schema.optional(Schema.String),
    expirationOffset: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleFirestoreAdminV1TtlConfigDelta" });

export interface GoogleFirestoreAdminV1Progress {
  /** The amount of work estimated. */
  estimatedWork?: string;
  /** The amount of work completed. */
  completedWork?: string;
}

export const GoogleFirestoreAdminV1Progress: Schema.Schema<GoogleFirestoreAdminV1Progress> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    estimatedWork: Schema.optional(Schema.String),
    completedWork: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleFirestoreAdminV1Progress" });

export interface GoogleFirestoreAdminV1IndexConfigDelta {
  /** The index being changed. */
  index?: GoogleFirestoreAdminV1Index;
  /** Specifies how the index is changing. */
  changeType?: "CHANGE_TYPE_UNSPECIFIED" | "ADD" | "REMOVE" | (string & {});
}

export const GoogleFirestoreAdminV1IndexConfigDelta: Schema.Schema<GoogleFirestoreAdminV1IndexConfigDelta> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    index: Schema.optional(GoogleFirestoreAdminV1Index),
    changeType: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleFirestoreAdminV1IndexConfigDelta" });

export interface GoogleFirestoreAdminV1FieldOperationMetadata {
  /** The time this operation completed. Will be unset if operation still in progress. */
  endTime?: string;
  /** The state of the operation. */
  state?:
    | "OPERATION_STATE_UNSPECIFIED"
    | "INITIALIZING"
    | "PROCESSING"
    | "CANCELLING"
    | "FINALIZING"
    | "SUCCESSFUL"
    | "FAILED"
    | "CANCELLED"
    | (string & {});
  /** Describes the deltas of TTL configuration. */
  ttlConfigDelta?: GoogleFirestoreAdminV1TtlConfigDelta;
  /** The progress, in documents, of this operation. */
  progressDocuments?: GoogleFirestoreAdminV1Progress;
  /** The field resource that this operation is acting on. For example: `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}/fields/{field_path}` */
  field?: string;
  /** The progress, in bytes, of this operation. */
  progressBytes?: GoogleFirestoreAdminV1Progress;
  /** The time this operation started. */
  startTime?: string;
  /** A list of IndexConfigDelta, which describe the intent of this operation. */
  indexConfigDeltas?: ReadonlyArray<GoogleFirestoreAdminV1IndexConfigDelta>;
}

export const GoogleFirestoreAdminV1FieldOperationMetadata: Schema.Schema<GoogleFirestoreAdminV1FieldOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    endTime: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    ttlConfigDelta: Schema.optional(GoogleFirestoreAdminV1TtlConfigDelta),
    progressDocuments: Schema.optional(GoogleFirestoreAdminV1Progress),
    field: Schema.optional(Schema.String),
    progressBytes: Schema.optional(GoogleFirestoreAdminV1Progress),
    startTime: Schema.optional(Schema.String),
    indexConfigDeltas: Schema.optional(
      Schema.Array(GoogleFirestoreAdminV1IndexConfigDelta),
    ),
  }).annotate({ identifier: "GoogleFirestoreAdminV1FieldOperationMetadata" });

export interface GoogleFirestoreAdminV1ExportDocumentsRequest {
  /** The timestamp that corresponds to the version of the database to be exported. The timestamp must be in the past, rounded to the minute and not older than earliestVersionTime. If specified, then the exported documents will represent a consistent view of the database at the provided time. Otherwise, there are no guarantees about the consistency of the exported documents. */
  snapshotTime?: string;
  /** IDs of the collection groups to export. Unspecified means all collection groups. Each collection group in this list must be unique. */
  collectionIds?: ReadonlyArray<string>;
  /** An empty list represents all namespaces. This is the preferred usage for databases that don't use namespaces. An empty string element represents the default namespace. This should be used if the database has data in non-default namespaces, but doesn't want to include them. Each namespace in this list must be unique. */
  namespaceIds?: ReadonlyArray<string>;
  /** The output URI. Currently only supports Google Cloud Storage URIs of the form: `gs://BUCKET_NAME[/NAMESPACE_PATH]`, where `BUCKET_NAME` is the name of the Google Cloud Storage bucket and `NAMESPACE_PATH` is an optional Google Cloud Storage namespace path. When choosing a name, be sure to consider Google Cloud Storage naming guidelines: https://cloud.google.com/storage/docs/naming. If the URI is a bucket (without a namespace path), a prefix will be generated based on the start time. */
  outputUriPrefix?: string;
}

export const GoogleFirestoreAdminV1ExportDocumentsRequest: Schema.Schema<GoogleFirestoreAdminV1ExportDocumentsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    snapshotTime: Schema.optional(Schema.String),
    collectionIds: Schema.optional(Schema.Array(Schema.String)),
    namespaceIds: Schema.optional(Schema.Array(Schema.String)),
    outputUriPrefix: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleFirestoreAdminV1ExportDocumentsRequest" });

export interface GoogleFirestoreAdminV1GoogleDefaultEncryptionOptions {}

export const GoogleFirestoreAdminV1GoogleDefaultEncryptionOptions: Schema.Schema<GoogleFirestoreAdminV1GoogleDefaultEncryptionOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleFirestoreAdminV1GoogleDefaultEncryptionOptions",
  });

export interface MapValue {
  /** The map's fields. The map keys represent field names. Field names matching the regular expression `__.*__` are reserved. Reserved field names are forbidden except in certain documented contexts. The map keys, represented as UTF-8, must not exceed 1,500 bytes and cannot be empty. */
  fields?: Record<string, Value>;
}

export const MapValue: Schema.Schema<MapValue> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      fields: Schema.optional(Schema.Record(Schema.String, Value)),
    }),
  ).annotate({ identifier: "MapValue" }) as any as Schema.Schema<MapValue>;

export interface ArrayValue {
  /** Values in the array. */
  values?: ReadonlyArray<Value>;
}

export const ArrayValue: Schema.Schema<ArrayValue> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      values: Schema.optional(Schema.Array(Value)),
    }),
  ).annotate({ identifier: "ArrayValue" }) as any as Schema.Schema<ArrayValue>;

export interface Firestore_Function {
  /** Optional. Ordered list of arguments the given function expects. */
  args?: ReadonlyArray<Value>;
  /** Optional. Optional named arguments that certain functions may support. */
  options?: Record<string, Value>;
  /** Required. The name of the function to evaluate. **Requires:** * must be in snake case (lower case with underscore separator). */
  name?: string;
}

export const Firestore_Function: Schema.Schema<Firestore_Function> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      args: Schema.optional(Schema.Array(Value)),
      options: Schema.optional(Schema.Record(Schema.String, Value)),
      name: Schema.optional(Schema.String),
    }),
  ).annotate({
    identifier: "Firestore_Function",
  }) as any as Schema.Schema<Firestore_Function>;

export interface LatLng {
  /** The latitude in degrees. It must be in the range [-90.0, +90.0]. */
  latitude?: number;
  /** The longitude in degrees. It must be in the range [-180.0, +180.0]. */
  longitude?: number;
}

export const LatLng: Schema.Schema<LatLng> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    latitude: Schema.optional(Schema.Number),
    longitude: Schema.optional(Schema.Number),
  }).annotate({ identifier: "LatLng" });

export interface Stage {
  /** Optional. Ordered list of arguments the given stage expects. */
  args?: ReadonlyArray<Value>;
  /** Optional. Optional named arguments that certain functions may support. */
  options?: Record<string, Value>;
  /** Required. The name of the stage to evaluate. **Requires:** * must be in snake case (lower case with underscore separator). */
  name?: string;
}

export const Stage: Schema.Schema<Stage> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      args: Schema.optional(Schema.Array(Value)),
      options: Schema.optional(Schema.Record(Schema.String, Value)),
      name: Schema.optional(Schema.String),
    }),
  ).annotate({ identifier: "Stage" }) as any as Schema.Schema<Stage>;

export interface Pipeline {
  /** Required. Ordered list of stages to evaluate. */
  stages?: ReadonlyArray<Stage>;
}

export const Pipeline: Schema.Schema<Pipeline> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      stages: Schema.optional(Schema.Array(Stage)),
    }),
  ).annotate({ identifier: "Pipeline" }) as any as Schema.Schema<Pipeline>;

export interface Value {
  /** Pointer to a variable defined elsewhere in a pipeline. Unlike `field_reference_value` which references a field within a document, this refers to a variable, defined in a separate namespace than the fields of a document. */
  variableReferenceValue?: string;
  /** A double value. */
  doubleValue?: number;
  /** A map value. */
  mapValue?: MapValue;
  /** A boolean value. */
  booleanValue?: boolean;
  /** An integer value. */
  integerValue?: string;
  /** A timestamp value. Precise only to microseconds. When stored, any additional precision is rounded down. */
  timestampValue?: string;
  /** An array value. Cannot directly contain another array value, though can contain a map which contains another array. */
  arrayValue?: ArrayValue;
  /** A bytes value. Must not exceed 1 MiB - 89 bytes. Only the first 1,500 bytes are considered by queries. */
  bytesValue?: string;
  /** A string value. The string, represented as UTF-8, must not exceed 1 MiB - 89 bytes. Only the first 1,500 bytes of the UTF-8 representation are considered by queries. */
  stringValue?: string;
  /** Value which references a field. This is considered relative (vs absolute) since it only refers to a field and not a field within a particular document. **Requires:** * Must follow field reference limitations. * Not allowed to be used when writing documents. */
  fieldReferenceValue?: string;
  /** A value that represents an unevaluated expression. **Requires:** * Not allowed to be used when writing documents. */
  functionValue?: Firestore_Function;
  /** A null value. */
  nullValue?: "NULL_VALUE" | (string & {});
  /** A geo point value representing a point on the surface of Earth. */
  geoPointValue?: LatLng;
  /** A reference to a document. For example: `projects/{project_id}/databases/{database_id}/documents/{document_path}`. */
  referenceValue?: string;
  /** A value that represents an unevaluated pipeline. **Requires:** * Not allowed to be used when writing documents. */
  pipelineValue?: Pipeline;
}

export const Value: Schema.Schema<Value> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      variableReferenceValue: Schema.optional(Schema.String),
      doubleValue: Schema.optional(Schema.Number),
      mapValue: Schema.optional(MapValue),
      booleanValue: Schema.optional(Schema.Boolean),
      integerValue: Schema.optional(Schema.String),
      timestampValue: Schema.optional(Schema.String),
      arrayValue: Schema.optional(ArrayValue),
      bytesValue: Schema.optional(Schema.String),
      stringValue: Schema.optional(Schema.String),
      fieldReferenceValue: Schema.optional(Schema.String),
      functionValue: Schema.optional(Firestore_Function),
      nullValue: Schema.optional(Schema.String),
      geoPointValue: Schema.optional(LatLng),
      referenceValue: Schema.optional(Schema.String),
      pipelineValue: Schema.optional(Pipeline),
    }),
  ).annotate({ identifier: "Value" }) as any as Schema.Schema<Value>;

export interface WriteResult {
  /** The results of applying each DocumentTransform.FieldTransform, in the same order. */
  transformResults?: ReadonlyArray<Value>;
  /** The last update time of the document after applying the write. Not set after a `delete`. If the write did not actually change the document, this will be the previous update_time. */
  updateTime?: string;
}

export const WriteResult: Schema.Schema<WriteResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    transformResults: Schema.optional(Schema.Array(Value)),
    updateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "WriteResult" });

export interface CommitResponse {
  /** The result of applying the writes. This i-th write result corresponds to the i-th write in the request. */
  writeResults?: ReadonlyArray<WriteResult>;
  /** The time at which the commit occurred. Any read with an equal or greater `read_time` is guaranteed to see the effects of the commit. */
  commitTime?: string;
}

export const CommitResponse: Schema.Schema<CommitResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    writeResults: Schema.optional(Schema.Array(WriteResult)),
    commitTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "CommitResponse" });

export interface TargetChange {
  /** A token that can be used to resume the stream for the given `target_ids`, or all targets if `target_ids` is empty. Not set on every target change. */
  resumeToken?: string;
  /** The target IDs of targets that have changed. If empty, the change applies to all targets. The order of the target IDs is not defined. */
  targetIds?: ReadonlyArray<number>;
  /** The error that resulted in this change, if applicable. */
  cause?: Status;
  /** The consistent `read_time` for the given `target_ids` (omitted when the target_ids are not at a consistent snapshot). The stream is guaranteed to send a `read_time` with `target_ids` empty whenever the entire stream reaches a new consistent snapshot. ADD, CURRENT, and RESET messages are guaranteed to (eventually) result in a new consistent snapshot (while NO_CHANGE and REMOVE messages are not). For a given stream, `read_time` is guaranteed to be monotonically increasing. */
  readTime?: string;
  /** The type of change that occurred. */
  targetChangeType?:
    | "NO_CHANGE"
    | "ADD"
    | "REMOVE"
    | "CURRENT"
    | "RESET"
    | (string & {});
}

export const TargetChange: Schema.Schema<TargetChange> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resumeToken: Schema.optional(Schema.String),
    targetIds: Schema.optional(Schema.Array(Schema.Number)),
    cause: Schema.optional(Status),
    readTime: Schema.optional(Schema.String),
    targetChangeType: Schema.optional(Schema.String),
  }).annotate({ identifier: "TargetChange" });

export interface FieldReference {
  /** A reference to a field in a document. Requires: * MUST be a dot-delimited (`.`) string of segments, where each segment conforms to document field name limitations. */
  fieldPath?: string;
}

export const FieldReference: Schema.Schema<FieldReference> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fieldPath: Schema.optional(Schema.String),
  }).annotate({ identifier: "FieldReference" });

export interface GoogleFirestoreAdminV1ImportDocumentsMetadata {
  /** The progress, in bytes, of this operation. */
  progressBytes?: GoogleFirestoreAdminV1Progress;
  /** The state of the import operation. */
  operationState?:
    | "OPERATION_STATE_UNSPECIFIED"
    | "INITIALIZING"
    | "PROCESSING"
    | "CANCELLING"
    | "FINALIZING"
    | "SUCCESSFUL"
    | "FAILED"
    | "CANCELLED"
    | (string & {});
  /** The progress, in documents, of this operation. */
  progressDocuments?: GoogleFirestoreAdminV1Progress;
  /** The location of the documents being imported. */
  inputUriPrefix?: string;
  /** The time this operation completed. Will be unset if operation still in progress. */
  endTime?: string;
  /** Which namespace IDs are being imported. */
  namespaceIds?: ReadonlyArray<string>;
  /** The time this operation started. */
  startTime?: string;
  /** Which collection IDs are being imported. */
  collectionIds?: ReadonlyArray<string>;
}

export const GoogleFirestoreAdminV1ImportDocumentsMetadata: Schema.Schema<GoogleFirestoreAdminV1ImportDocumentsMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    progressBytes: Schema.optional(GoogleFirestoreAdminV1Progress),
    operationState: Schema.optional(Schema.String),
    progressDocuments: Schema.optional(GoogleFirestoreAdminV1Progress),
    inputUriPrefix: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    namespaceIds: Schema.optional(Schema.Array(Schema.String)),
    startTime: Schema.optional(Schema.String),
    collectionIds: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleFirestoreAdminV1ImportDocumentsMetadata" });

export interface GoogleFirestoreAdminV1ResourceIdentity {
  /** Output only. Principal identifier string. See: https://cloud.google.com/iam/docs/principal-identifiers */
  principal?: string;
}

export const GoogleFirestoreAdminV1ResourceIdentity: Schema.Schema<GoogleFirestoreAdminV1ResourceIdentity> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    principal: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleFirestoreAdminV1ResourceIdentity" });

export interface GoogleFirestoreAdminV1UserCreds {
  /** Output only. The time the user creds were last updated. */
  updateTime?: string;
  /** Output only. The time the user creds were created. */
  createTime?: string;
  /** Output only. Whether the user creds are enabled or disabled. Defaults to ENABLED on creation. */
  state?: "STATE_UNSPECIFIED" | "ENABLED" | "DISABLED" | (string & {});
  /** Identifier. The resource name of the UserCreds. Format: `projects/{project}/databases/{database}/userCreds/{user_creds}` */
  name?: string;
  /** Output only. The plaintext server-generated password for the user creds. Only populated in responses for CreateUserCreds and ResetUserPassword. */
  securePassword?: string;
  /** Resource Identity descriptor. */
  resourceIdentity?: GoogleFirestoreAdminV1ResourceIdentity;
}

export const GoogleFirestoreAdminV1UserCreds: Schema.Schema<GoogleFirestoreAdminV1UserCreds> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateTime: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    securePassword: Schema.optional(Schema.String),
    resourceIdentity: Schema.optional(GoogleFirestoreAdminV1ResourceIdentity),
  }).annotate({ identifier: "GoogleFirestoreAdminV1UserCreds" });

export interface DocumentsTarget {
  /** The names of the documents to retrieve. In the format: `projects/{project_id}/databases/{database_id}/documents/{document_path}`. The request will fail if any of the document is not a child resource of the given `database`. Duplicate names will be elided. */
  documents?: ReadonlyArray<string>;
}

export const DocumentsTarget: Schema.Schema<DocumentsTarget> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    documents: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "DocumentsTarget" });

export interface FieldTransform {
  /** Append the given elements in order if they are not already present in the current field value. If the field is not an array, or if the field does not yet exist, it is first set to the empty array. Equivalent numbers of different types (e.g. 3L and 3.0) are considered equal when checking if a value is missing. NaN is equal to NaN, and Null is equal to Null. If the input contains multiple equivalent values, only the first will be considered. The corresponding transform_result will be the null value. */
  appendMissingElements?: ArrayValue;
  /** Sets the field to the given server value. */
  setToServerValue?:
    | "SERVER_VALUE_UNSPECIFIED"
    | "REQUEST_TIME"
    | (string & {});
  /** Adds the given value to the field's current value. This must be an integer or a double value. If the field is not an integer or double, or if the field does not yet exist, the transformation will set the field to the given value. If either of the given value or the current field value are doubles, both values will be interpreted as doubles. Double arithmetic and representation of double values follow IEEE 754 semantics. If there is positive/negative integer overflow, the field is resolved to the largest magnitude positive/negative integer. */
  increment?: Value;
  /** Sets the field to the minimum of its current value and the given value. This must be an integer or a double value. If the field is not an integer or double, or if the field does not yet exist, the transformation will set the field to the input value. If a minimum operation is applied where the field and the input value are of mixed types (that is - one is an integer and one is a double) the field takes on the type of the smaller operand. If the operands are equivalent (e.g. 3 and 3.0), the field does not change. 0, 0.0, and -0.0 are all zero. The minimum of a zero stored value and zero input value is always the stored value. The minimum of any numeric value x and NaN is NaN. */
  minimum?: Value;
  /** The path of the field. See Document.fields for the field path syntax reference. */
  fieldPath?: string;
  /** Sets the field to the maximum of its current value and the given value. This must be an integer or a double value. If the field is not an integer or double, or if the field does not yet exist, the transformation will set the field to the given value. If a maximum operation is applied where the field and the input value are of mixed types (that is - one is an integer and one is a double) the field takes on the type of the larger operand. If the operands are equivalent (e.g. 3 and 3.0), the field does not change. 0, 0.0, and -0.0 are all zero. The maximum of a zero stored value and zero input value is always the stored value. The maximum of any numeric value x and NaN is NaN. */
  maximum?: Value;
  /** Remove all of the given elements from the array in the field. If the field is not an array, or if the field does not yet exist, it is set to the empty array. Equivalent numbers of the different types (e.g. 3L and 3.0) are considered equal when deciding whether an element should be removed. NaN is equal to NaN, and Null is equal to Null. This will remove all equivalent values if there are duplicates. The corresponding transform_result will be the null value. */
  removeAllFromArray?: ArrayValue;
}

export const FieldTransform: Schema.Schema<FieldTransform> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    appendMissingElements: Schema.optional(ArrayValue),
    setToServerValue: Schema.optional(Schema.String),
    increment: Schema.optional(Value),
    minimum: Schema.optional(Value),
    fieldPath: Schema.optional(Schema.String),
    maximum: Schema.optional(Value),
    removeAllFromArray: Schema.optional(ArrayValue),
  }).annotate({ identifier: "FieldTransform" });

export interface DocumentTransform {
  /** The list of transformations to apply to the fields of the document, in order. This must not be empty. */
  fieldTransforms?: ReadonlyArray<FieldTransform>;
  /** The name of the document to transform. */
  document?: string;
}

export const DocumentTransform: Schema.Schema<DocumentTransform> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fieldTransforms: Schema.optional(Schema.Array(FieldTransform)),
    document: Schema.optional(Schema.String),
  }).annotate({ identifier: "DocumentTransform" });

export interface GoogleFirestoreAdminV1CreateDatabaseMetadata {}

export const GoogleFirestoreAdminV1CreateDatabaseMetadata: Schema.Schema<GoogleFirestoreAdminV1CreateDatabaseMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleFirestoreAdminV1CreateDatabaseMetadata",
  });

export interface Location {
  /** The canonical id for this location. For example: `"us-east1"`. */
  locationId?: string;
  /** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
  displayName?: string;
  /** Service-specific metadata. For example the available capacity at the given location. */
  metadata?: Record<string, unknown>;
  /** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
  labels?: Record<string, string>;
  /** Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"` */
  name?: string;
}

export const Location: Schema.Schema<Location> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    locationId: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
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

export interface Projection {
  /** The fields to return. If empty, all fields are returned. To only return the name of the document, use `['__name__']`. */
  fields?: ReadonlyArray<FieldReference>;
}

export const Projection: Schema.Schema<Projection> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fields: Schema.optional(Schema.Array(FieldReference)),
  }).annotate({ identifier: "Projection" });

export interface CollectionSelector {
  /** The collection ID. When set, selects only collections with this ID. */
  collectionId?: string;
  /** When false, selects only collections that are immediate children of the `parent` specified in the containing `RunQueryRequest`. When true, selects all descendant collections. */
  allDescendants?: boolean;
}

export const CollectionSelector: Schema.Schema<CollectionSelector> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    collectionId: Schema.optional(Schema.String),
    allDescendants: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "CollectionSelector" });

export interface Cursor {
  /** The values that represent a position, in the order they appear in the order by clause of a query. Can contain fewer values than specified in the order by clause. */
  values?: ReadonlyArray<Value>;
  /** If the position is just before or just after the given values, relative to the sort order defined by the query. */
  before?: boolean;
}

export const Cursor: Schema.Schema<Cursor> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    values: Schema.optional(Schema.Array(Value)),
    before: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "Cursor" });

export interface UnaryFilter {
  /** The unary operator to apply. */
  op?:
    | "OPERATOR_UNSPECIFIED"
    | "IS_NAN"
    | "IS_NULL"
    | "IS_NOT_NAN"
    | "IS_NOT_NULL"
    | (string & {});
  /** The field to which to apply the operator. */
  field?: FieldReference;
}

export const UnaryFilter: Schema.Schema<UnaryFilter> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    op: Schema.optional(Schema.String),
    field: Schema.optional(FieldReference),
  }).annotate({ identifier: "UnaryFilter" });

export interface CompositeFilter {
  /** The operator for combining multiple filters. */
  op?: "OPERATOR_UNSPECIFIED" | "AND" | "OR" | (string & {});
  /** The list of filters to combine. Requires: * At least one filter is present. */
  filters?: ReadonlyArray<Filter>;
}

export const CompositeFilter: Schema.Schema<CompositeFilter> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      op: Schema.optional(Schema.String),
      filters: Schema.optional(Schema.Array(Filter)),
    }),
  ).annotate({
    identifier: "CompositeFilter",
  }) as any as Schema.Schema<CompositeFilter>;

export interface FieldFilter {
  /** The field to filter by. */
  field?: FieldReference;
  /** The operator to filter by. */
  op?:
    | "OPERATOR_UNSPECIFIED"
    | "LESS_THAN"
    | "LESS_THAN_OR_EQUAL"
    | "GREATER_THAN"
    | "GREATER_THAN_OR_EQUAL"
    | "EQUAL"
    | "NOT_EQUAL"
    | "ARRAY_CONTAINS"
    | "IN"
    | "ARRAY_CONTAINS_ANY"
    | "NOT_IN"
    | (string & {});
  /** The value to compare to. */
  value?: Value;
}

export const FieldFilter: Schema.Schema<FieldFilter> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    field: Schema.optional(FieldReference),
    op: Schema.optional(Schema.String),
    value: Schema.optional(Value),
  }).annotate({ identifier: "FieldFilter" });

export interface Filter {
  /** A filter that takes exactly one argument. */
  unaryFilter?: UnaryFilter;
  /** A composite filter. */
  compositeFilter?: CompositeFilter;
  /** A filter on a document field. */
  fieldFilter?: FieldFilter;
}

export const Filter: Schema.Schema<Filter> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      unaryFilter: Schema.optional(UnaryFilter),
      compositeFilter: Schema.optional(CompositeFilter),
      fieldFilter: Schema.optional(FieldFilter),
    }),
  ).annotate({ identifier: "Filter" }) as any as Schema.Schema<Filter>;

export interface FindNearest {
  /** Required. The number of nearest neighbors to return. Must be a positive integer of no more than 1000. */
  limit?: number;
  /** Optional. Optional name of the field to output the result of the vector distance calculation. Must conform to document field name limitations. */
  distanceResultField?: string;
  /** Required. The distance measure to use, required. */
  distanceMeasure?:
    | "DISTANCE_MEASURE_UNSPECIFIED"
    | "EUCLIDEAN"
    | "COSINE"
    | "DOT_PRODUCT"
    | (string & {});
  /** Optional. Option to specify a threshold for which no less similar documents will be returned. The behavior of the specified `distance_measure` will affect the meaning of the distance threshold. Since DOT_PRODUCT distances increase when the vectors are more similar, the comparison is inverted. * For EUCLIDEAN, COSINE: `WHERE distance <= distance_threshold` * For DOT_PRODUCT: `WHERE distance >= distance_threshold` */
  distanceThreshold?: number;
  /** Required. An indexed vector field to search upon. Only documents which contain vectors whose dimensionality match the query_vector can be returned. */
  vectorField?: FieldReference;
  /** Required. The query vector that we are searching on. Must be a vector of no more than 2048 dimensions. */
  queryVector?: Value;
}

export const FindNearest: Schema.Schema<FindNearest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    limit: Schema.optional(Schema.Number),
    distanceResultField: Schema.optional(Schema.String),
    distanceMeasure: Schema.optional(Schema.String),
    distanceThreshold: Schema.optional(Schema.Number),
    vectorField: Schema.optional(FieldReference),
    queryVector: Schema.optional(Value),
  }).annotate({ identifier: "FindNearest" });

export interface Order {
  /** The field to order by. */
  field?: FieldReference;
  /** The direction to order by. Defaults to `ASCENDING`. */
  direction?:
    | "DIRECTION_UNSPECIFIED"
    | "ASCENDING"
    | "DESCENDING"
    | (string & {});
}

export const Order: Schema.Schema<Order> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    field: Schema.optional(FieldReference),
    direction: Schema.optional(Schema.String),
  }).annotate({ identifier: "Order" });

export interface StructuredQuery {
  /** Optional sub-set of the fields to return. This acts as a DocumentMask over the documents returned from a query. When not set, assumes that the caller wants all fields returned. */
  select?: Projection;
  /** The collections to query. */
  from?: ReadonlyArray<CollectionSelector>;
  /** A potential prefix of a position in the result set to start the query at. The ordering of the result set is based on the `ORDER BY` clause of the original query. ``` SELECT * FROM k WHERE a = 1 AND b > 2 ORDER BY b ASC, __name__ ASC; ``` This query's results are ordered by `(b ASC, __name__ ASC)`. Cursors can reference either the full ordering or a prefix of the location, though it cannot reference more fields than what are in the provided `ORDER BY`. Continuing off the example above, attaching the following start cursors will have varying impact: - `START BEFORE (2, /k/123)`: start the query right before `a = 1 AND b > 2 AND __name__ > /k/123`. - `START AFTER (10)`: start the query right after `a = 1 AND b > 10`. Unlike `OFFSET` which requires scanning over the first N results to skip, a start cursor allows the query to begin at a logical position. This position is not required to match an actual result, it will scan forward from this position to find the next document. Requires: * The number of values cannot be greater than the number of fields specified in the `ORDER BY` clause. */
  startAt?: Cursor;
  /** The filter to apply. */
  where?: Filter;
  /** The maximum number of results to return. Applies after all other constraints. Requires: * The value must be greater than or equal to zero if specified. */
  limit?: number;
  /** Optional. A potential nearest neighbors search. Applies after all other filters and ordering. Finds the closest vector embeddings to the given query vector. */
  findNearest?: FindNearest;
  /** The order to apply to the query results. Callers can provide a full ordering, a partial ordering, or no ordering at all. While Firestore will always respect the provided order, the behavior for queries without a full ordering is different per database edition: In Standard edition, Firestore guarantees a stable ordering through the following rules: * The `order_by` is required to reference all fields used with an inequality filter. * All fields that are required to be in the `order_by` but are not already present are appended in lexicographical ordering of the field name. * If an order on `__name__` is not specified, it is appended by default. Fields are appended with the same sort direction as the last order specified, or 'ASCENDING' if no order was specified. For example: * `ORDER BY a` becomes `ORDER BY a ASC, __name__ ASC` * `ORDER BY a DESC` becomes `ORDER BY a DESC, __name__ DESC` * `WHERE a > 1` becomes `WHERE a > 1 ORDER BY a ASC, __name__ ASC` * `WHERE __name__ > ... AND a > 1` becomes `WHERE __name__ > ... AND a > 1 ORDER BY a ASC, __name__ ASC` In Enterprise edition, Firestore does not guarantee a stable ordering. Instead it will pick the most efficient ordering based on the indexes available at the time of query execution. This will result in a different ordering for queries that are otherwise identical. To ensure a stable ordering, always include a unique field in the `order_by` clause, such as `__name__`. */
  orderBy?: ReadonlyArray<Order>;
  /** The number of documents to skip before returning the first result. This applies after the constraints specified by the `WHERE`, `START AT`, & `END AT` but before the `LIMIT` clause. Requires: * The value must be greater than or equal to zero if specified. */
  offset?: number;
  /** A potential prefix of a position in the result set to end the query at. This is similar to `START_AT` but with it controlling the end position rather than the start position. Requires: * The number of values cannot be greater than the number of fields specified in the `ORDER BY` clause. */
  endAt?: Cursor;
}

export const StructuredQuery: Schema.Schema<StructuredQuery> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    select: Schema.optional(Projection),
    from: Schema.optional(Schema.Array(CollectionSelector)),
    startAt: Schema.optional(Cursor),
    where: Schema.optional(Filter),
    limit: Schema.optional(Schema.Number),
    findNearest: Schema.optional(FindNearest),
    orderBy: Schema.optional(Schema.Array(Order)),
    offset: Schema.optional(Schema.Number),
    endAt: Schema.optional(Cursor),
  }).annotate({ identifier: "StructuredQuery" });

export interface QueryTarget {
  /** A structured query. */
  structuredQuery?: StructuredQuery;
  /** The parent resource name. In the format: `projects/{project_id}/databases/{database_id}/documents` or `projects/{project_id}/databases/{database_id}/documents/{document_path}`. For example: `projects/my-project/databases/my-database/documents` or `projects/my-project/databases/my-database/documents/chatrooms/my-chatroom` */
  parent?: string;
}

export const QueryTarget: Schema.Schema<QueryTarget> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    structuredQuery: Schema.optional(StructuredQuery),
    parent: Schema.optional(Schema.String),
  }).annotate({ identifier: "QueryTarget" });

export interface Target {
  /** If the target should be removed once it is current and consistent. */
  once?: boolean;
  /** A resume token from a prior TargetChange for an identical target. Using a resume token with a different target is unsupported and may fail. */
  resumeToken?: string;
  /** A target specified by a set of document names. */
  documents?: DocumentsTarget;
  /** A target specified by a query. */
  query?: QueryTarget;
  /** The number of documents that last matched the query at the resume token or read time. This value is only relevant when a `resume_type` is provided. This value being present and greater than zero signals that the client wants `ExistenceFilter.unchanged_names` to be included in the response. */
  expectedCount?: number;
  /** Start listening after a specific `read_time`. The client must know the state of matching documents at this time. */
  readTime?: string;
  /** The target ID that identifies the target on the stream. Must be a positive number and non-zero. If `target_id` is 0 (or unspecified), the server will assign an ID for this target and return that in a `TargetChange::ADD` event. Once a target with `target_id=0` is added, all subsequent targets must also have `target_id=0`. If an `AddTarget` request with `target_id != 0` is sent to the server after a target with `target_id=0` is added, the server will immediately send a response with a `TargetChange::Remove` event. Note that if the client sends multiple `AddTarget` requests without an ID, the order of IDs returned in `TargetChange.target_ids` are undefined. Therefore, clients should provide a target ID instead of relying on the server to assign one. If `target_id` is non-zero, there must not be an existing active target on this stream with the same ID. */
  targetId?: number;
}

export const Target: Schema.Schema<Target> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    once: Schema.optional(Schema.Boolean),
    resumeToken: Schema.optional(Schema.String),
    documents: Schema.optional(DocumentsTarget),
    query: Schema.optional(QueryTarget),
    expectedCount: Schema.optional(Schema.Number),
    readTime: Schema.optional(Schema.String),
    targetId: Schema.optional(Schema.Number),
  }).annotate({ identifier: "Target" });

export interface WriteResponse {
  /** A token that represents the position of this response in the stream. This can be used by a client to resume the stream at this point. This field is always set. */
  streamToken?: string;
  /** The result of applying the writes. This i-th write result corresponds to the i-th write in the request. */
  writeResults?: ReadonlyArray<WriteResult>;
  /** The time at which the commit occurred. Any read with an equal or greater `read_time` is guaranteed to see the effects of the write. */
  commitTime?: string;
  /** The ID of the stream. Only set on the first message, when a new stream was created. */
  streamId?: string;
}

export const WriteResponse: Schema.Schema<WriteResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    streamToken: Schema.optional(Schema.String),
    writeResults: Schema.optional(Schema.Array(WriteResult)),
    commitTime: Schema.optional(Schema.String),
    streamId: Schema.optional(Schema.String),
  }).annotate({ identifier: "WriteResponse" });

export interface PartitionQueryResponse {
  /** Partition results. Each partition is a split point that can be used by RunQuery as a starting or end point for the query results. The RunQuery requests must be made with the same query supplied to this PartitionQuery request. The partition cursors will be ordered according to same ordering as the results of the query supplied to PartitionQuery. For example, if a PartitionQuery request returns partition cursors A and B, running the following three queries will return the entire result set of the original query: * query, end_at A * query, start_at A, end_at B * query, start_at B An empty result may indicate that the query has too few results to be partitioned, or that the query is not yet supported for partitioning. */
  partitions?: ReadonlyArray<Cursor>;
  /** A page token that may be used to request an additional set of results, up to the number specified by `partition_count` in the PartitionQuery request. If blank, there are no more results. */
  nextPageToken?: string;
}

export const PartitionQueryResponse: Schema.Schema<PartitionQueryResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    partitions: Schema.optional(Schema.Array(Cursor)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "PartitionQueryResponse" });

export interface GoogleFirestoreAdminV1BulkDeleteDocumentsMetadata {
  /** The progress, in bytes, of this operation. */
  progressBytes?: GoogleFirestoreAdminV1Progress;
  /** The state of the operation. */
  operationState?:
    | "OPERATION_STATE_UNSPECIFIED"
    | "INITIALIZING"
    | "PROCESSING"
    | "CANCELLING"
    | "FINALIZING"
    | "SUCCESSFUL"
    | "FAILED"
    | "CANCELLED"
    | (string & {});
  /** The progress, in documents, of this operation. */
  progressDocuments?: GoogleFirestoreAdminV1Progress;
  /** The timestamp that corresponds to the version of the database that is being read to get the list of documents to delete. This time can also be used as the timestamp of PITR in case of disaster recovery (subject to PITR window limit). */
  snapshotTime?: string;
  /** The time this operation completed. Will be unset if operation still in progress. */
  endTime?: string;
  /** Which namespace IDs are being deleted. */
  namespaceIds?: ReadonlyArray<string>;
  /** The time this operation started. */
  startTime?: string;
  /** The IDs of the collection groups that are being deleted. */
  collectionIds?: ReadonlyArray<string>;
}

export const GoogleFirestoreAdminV1BulkDeleteDocumentsMetadata: Schema.Schema<GoogleFirestoreAdminV1BulkDeleteDocumentsMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    progressBytes: Schema.optional(GoogleFirestoreAdminV1Progress),
    operationState: Schema.optional(Schema.String),
    progressDocuments: Schema.optional(GoogleFirestoreAdminV1Progress),
    snapshotTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    namespaceIds: Schema.optional(Schema.Array(Schema.String)),
    startTime: Schema.optional(Schema.String),
    collectionIds: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier: "GoogleFirestoreAdminV1BulkDeleteDocumentsMetadata",
  });

export interface Count {
  /** Optional. Optional constraint on the maximum number of documents to count. This provides a way to set an upper bound on the number of documents to scan, limiting latency, and cost. Unspecified is interpreted as no bound. High-Level Example: ``` AGGREGATE COUNT_UP_TO(1000) OVER ( SELECT * FROM k ); ``` Requires: * Must be greater than zero when present. */
  upTo?: string;
}

export const Count: Schema.Schema<Count> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    upTo: Schema.optional(Schema.String),
  }).annotate({ identifier: "Count" });

export interface GoogleFirestoreAdminV1CustomerManagedEncryptionOptions {
  /** Required. Only keys in the same location as the database are allowed to be used for encryption. For Firestore's nam5 multi-region, this corresponds to Cloud KMS multi-region us. For Firestore's eur3 multi-region, this corresponds to Cloud KMS multi-region europe. See https://cloud.google.com/kms/docs/locations. The expected format is `projects/{project_id}/locations/{kms_location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}`. */
  kmsKeyName?: string;
}

export const GoogleFirestoreAdminV1CustomerManagedEncryptionOptions: Schema.Schema<GoogleFirestoreAdminV1CustomerManagedEncryptionOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kmsKeyName: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleFirestoreAdminV1CustomerManagedEncryptionOptions",
  });

export interface AggregationResult {
  /** The result of the aggregation functions, ex: `COUNT(*) AS total_docs`. The key is the alias assigned to the aggregation function on input and the size of this map equals the number of aggregation functions in the query. */
  aggregateFields?: Record<string, Value>;
}

export const AggregationResult: Schema.Schema<AggregationResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    aggregateFields: Schema.optional(Schema.Record(Schema.String, Value)),
  }).annotate({ identifier: "AggregationResult" });

export interface GoogleFirestoreAdminV1Stats {
  /** Output only. The total number of index entries contained in the backup. */
  indexCount?: string;
  /** Output only. Summation of the size of all documents and index entries in the backup, measured in bytes. */
  sizeBytes?: string;
  /** Output only. The total number of documents contained in the backup. */
  documentCount?: string;
}

export const GoogleFirestoreAdminV1Stats: Schema.Schema<GoogleFirestoreAdminV1Stats> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    indexCount: Schema.optional(Schema.String),
    sizeBytes: Schema.optional(Schema.String),
    documentCount: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleFirestoreAdminV1Stats" });

export interface GoogleFirestoreAdminV1Backup {
  /** Output only. The unique resource name of the Backup. Format is `projects/{project}/locations/{location}/backups/{backup}`. The location in the name will be the Standard Managed Multi-Region (SMMR) location (e.g. `us`) if the backup was created with an SMMR location, or the Google Managed Multi-Region (GMMR) location (e.g. `nam5`) if the backup was created with a GMMR location. */
  name?: string;
  /** Output only. The system-generated UUID4 for the Firestore database that the backup is from. */
  databaseUid?: string;
  /** Output only. The backup contains an externally consistent copy of the database at this time. */
  snapshotTime?: string;
  /** Output only. Statistics about the backup. This data only becomes available after the backup is fully materialized to secondary storage. This field will be empty till then. */
  stats?: GoogleFirestoreAdminV1Stats;
  /** Output only. The current state of the backup. */
  state?:
    | "STATE_UNSPECIFIED"
    | "CREATING"
    | "READY"
    | "NOT_AVAILABLE"
    | (string & {});
  /** Output only. The timestamp at which this backup expires. */
  expireTime?: string;
  /** Output only. Name of the Firestore database that the backup is from. Format is `projects/{project}/databases/{database}`. */
  database?: string;
}

export const GoogleFirestoreAdminV1Backup: Schema.Schema<GoogleFirestoreAdminV1Backup> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    databaseUid: Schema.optional(Schema.String),
    snapshotTime: Schema.optional(Schema.String),
    stats: Schema.optional(GoogleFirestoreAdminV1Stats),
    state: Schema.optional(Schema.String),
    expireTime: Schema.optional(Schema.String),
    database: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleFirestoreAdminV1Backup" });

export interface GoogleFirestoreAdminV1ListBackupsResponse {
  /** List of all backups for the project. */
  backups?: ReadonlyArray<GoogleFirestoreAdminV1Backup>;
  /** List of locations that existing backups were not able to be fetched from. Instead of failing the entire requests when a single location is unreachable, this response returns a partial result set and list of locations unable to be reached here. The request can be retried against a single location to get a concrete error. */
  unreachable?: ReadonlyArray<string>;
}

export const GoogleFirestoreAdminV1ListBackupsResponse: Schema.Schema<GoogleFirestoreAdminV1ListBackupsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    backups: Schema.optional(Schema.Array(GoogleFirestoreAdminV1Backup)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleFirestoreAdminV1ListBackupsResponse" });

export interface GoogleFirestoreAdminV1DailyRecurrence {}

export const GoogleFirestoreAdminV1DailyRecurrence: Schema.Schema<GoogleFirestoreAdminV1DailyRecurrence> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleFirestoreAdminV1DailyRecurrence",
  });

export interface ExecutionStats {
  /** Total time to execute the query in the backend. */
  executionDuration?: string;
  /** Total billable read operations. */
  readOperations?: string;
  /** Total number of results returned, including documents, projections, aggregation results, keys. */
  resultsReturned?: string;
  /** Debugging statistics from the execution of the query. Note that the debugging stats are subject to change as Firestore evolves. It could include: { "indexes_entries_scanned": "1000", "documents_scanned": "20", "billing_details" : { "documents_billable": "20", "index_entries_billable": "1000", "min_query_cost": "0" } } */
  debugStats?: Record<string, unknown>;
}

export const ExecutionStats: Schema.Schema<ExecutionStats> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    executionDuration: Schema.optional(Schema.String),
    readOperations: Schema.optional(Schema.String),
    resultsReturned: Schema.optional(Schema.String),
    debugStats: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "ExecutionStats" });

export interface ExplainOptions {
  /** Optional. Whether to execute this query. When false (the default), the query will be planned, returning only metrics from the planning stages. When true, the query will be planned and executed, returning the full query results along with both planning and execution stage metrics. */
  analyze?: boolean;
}

export const ExplainOptions: Schema.Schema<ExplainOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    analyze: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "ExplainOptions" });

export interface RunQueryRequest {
  /** Run the query within an already active transaction. The value here is the opaque transaction ID to execute the query in. */
  transaction?: string;
  /** Reads documents as they were at the given time. This must be a microsecond precision timestamp within the past one hour, or if Point-in-Time Recovery is enabled, can additionally be a whole minute timestamp within the past 7 days. */
  readTime?: string;
  /** A structured query. */
  structuredQuery?: StructuredQuery;
  /** Starts a new transaction and reads the documents. Defaults to a read-only transaction. The new transaction ID will be returned as the first response in the stream. */
  newTransaction?: TransactionOptions;
  /** Optional. Explain options for the query. If set, additional query statistics will be returned. If not, only query results will be returned. */
  explainOptions?: ExplainOptions;
}

export const RunQueryRequest: Schema.Schema<RunQueryRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    transaction: Schema.optional(Schema.String),
    readTime: Schema.optional(Schema.String),
    structuredQuery: Schema.optional(StructuredQuery),
    newTransaction: Schema.optional(TransactionOptions),
    explainOptions: Schema.optional(ExplainOptions),
  }).annotate({ identifier: "RunQueryRequest" });

export interface ExistenceFilter {
  /** A bloom filter that, despite its name, contains the UTF-8 byte encodings of the resource names of ALL the documents that match target_id, in the form `projects/{project_id}/databases/{database_id}/documents/{document_path}`. This bloom filter may be omitted at the server's discretion, such as if it is deemed that the client will not make use of it or if it is too computationally expensive to calculate or transmit. Clients must gracefully handle this field being absent by falling back to the logic used before this field existed; that is, re-add the target without a resume token to figure out which documents in the client's cache are out of sync. */
  unchangedNames?: BloomFilter;
  /** The target ID to which this filter applies. */
  targetId?: number;
  /** The total count of documents that match target_id. If different from the count of documents in the client that match, the client must manually determine which documents no longer match the target. The client can use the `unchanged_names` bloom filter to assist with this determination by testing ALL the document names against the filter; if the document name is NOT in the filter, it means the document no longer matches the target. */
  count?: number;
}

export const ExistenceFilter: Schema.Schema<ExistenceFilter> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    unchangedNames: Schema.optional(BloomFilter),
    targetId: Schema.optional(Schema.Number),
    count: Schema.optional(Schema.Number),
  }).annotate({ identifier: "ExistenceFilter" });

export interface PlanSummary {
  /** The indexes selected for the query. For example: [ {"query_scope": "Collection", "properties": "(foo ASC, __name__ ASC)"}, {"query_scope": "Collection", "properties": "(bar ASC, __name__ ASC)"} ] */
  indexesUsed?: ReadonlyArray<Record<string, unknown>>;
}

export const PlanSummary: Schema.Schema<PlanSummary> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    indexesUsed: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
  }).annotate({ identifier: "PlanSummary" });

export interface ExplainMetrics {
  /** Planning phase information for the query. */
  planSummary?: PlanSummary;
  /** Aggregated stats from the execution of the query. Only present when ExplainOptions.analyze is set to true. */
  executionStats?: ExecutionStats;
}

export const ExplainMetrics: Schema.Schema<ExplainMetrics> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    planSummary: Schema.optional(PlanSummary),
    executionStats: Schema.optional(ExecutionStats),
  }).annotate({ identifier: "ExplainMetrics" });

export interface Document {
  /** Output only. The time at which the document was last changed. This value is initially set to the `create_time` then increases monotonically with each change to the document. It can also be compared to values from other documents and the `read_time` of a query. */
  updateTime?: string;
  /** Output only. The time at which the document was created. This value increases monotonically when a document is deleted then recreated. It can also be compared to values from other documents and the `read_time` of a query. */
  createTime?: string;
  /** The resource name of the document, for example `projects/{project_id}/databases/{database_id}/documents/{document_path}`. */
  name?: string;
  /** The document's fields. The map keys represent field names. Field names matching the regular expression `__.*__` are reserved. Reserved field names are forbidden except in certain documented contexts. The field names, represented as UTF-8, must not exceed 1,500 bytes and cannot be empty. Field paths may be used in other contexts to refer to structured fields defined here. For `map_value`, the field path is represented by a dot-delimited (`.`) string of segments. Each segment is either a simple field name (defined below) or a quoted field name. For example, the structured field `"foo" : { map_value: { "x&y" : { string_value: "hello" }}}` would be represented by the field path `` foo.`x&y` ``. A simple field name contains only characters `a` to `z`, `A` to `Z`, `0` to `9`, or `_`, and must not start with `0` to `9`. For example, `foo_bar_17`. A quoted field name starts and ends with `` ` `` and may contain any character. Some characters, including `` ` ``, must be escaped using a `\`. For example, `` `x&y` `` represents `x&y` and `` `bak\`tik` `` represents `` bak`tik ``. */
  fields?: Record<string, Value>;
}

export const Document: Schema.Schema<Document> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateTime: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    fields: Schema.optional(Schema.Record(Schema.String, Value)),
  }).annotate({ identifier: "Document" });

export interface RunQueryResponse {
  /** The transaction that was started as part of this request. Can only be set in the first response, and only if RunQueryRequest.new_transaction was set in the request. If set, no other fields will be set in this response. */
  transaction?: string;
  /** The time at which the document was read. This may be monotonically increasing; in this case, the previous documents in the result stream are guaranteed not to have changed between their `read_time` and this one. If the query returns no results, a response with `read_time` and no `document` will be sent, and this represents the time at which the query was run. */
  readTime?: string;
  /** If present, Firestore has completely finished the request and no more documents will be returned. */
  done?: boolean;
  /** Query explain metrics. This is only present when the RunQueryRequest.explain_options is provided, and it is sent only once with the last response in the stream. */
  explainMetrics?: ExplainMetrics;
  /** A query result, not set when reporting partial progress. */
  document?: Document;
  /** The number of results that have been skipped due to an offset between the last response and the current response. */
  skippedResults?: number;
}

export const RunQueryResponse: Schema.Schema<RunQueryResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    transaction: Schema.optional(Schema.String),
    readTime: Schema.optional(Schema.String),
    done: Schema.optional(Schema.Boolean),
    explainMetrics: Schema.optional(ExplainMetrics),
    document: Schema.optional(Document),
    skippedResults: Schema.optional(Schema.Number),
  }).annotate({ identifier: "RunQueryResponse" });

export interface BatchWriteResponse {
  /** The status of applying the writes. This i-th write status corresponds to the i-th write in the request. */
  status?: ReadonlyArray<Status>;
  /** The result of applying the writes. This i-th write result corresponds to the i-th write in the request. */
  writeResults?: ReadonlyArray<WriteResult>;
}

export const BatchWriteResponse: Schema.Schema<BatchWriteResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    status: Schema.optional(Schema.Array(Status)),
    writeResults: Schema.optional(Schema.Array(WriteResult)),
  }).annotate({ identifier: "BatchWriteResponse" });

export interface GoogleFirestoreAdminV1WeeklyRecurrence {
  /** The day of week to run. DAY_OF_WEEK_UNSPECIFIED is not allowed. */
  day?:
    | "DAY_OF_WEEK_UNSPECIFIED"
    | "MONDAY"
    | "TUESDAY"
    | "WEDNESDAY"
    | "THURSDAY"
    | "FRIDAY"
    | "SATURDAY"
    | "SUNDAY"
    | (string & {});
}

export const GoogleFirestoreAdminV1WeeklyRecurrence: Schema.Schema<GoogleFirestoreAdminV1WeeklyRecurrence> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    day: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleFirestoreAdminV1WeeklyRecurrence" });

export interface GoogleFirestoreAdminV1BackupSchedule {
  /** Output only. The timestamp at which this backup schedule was most recently updated. When a backup schedule is first created, this is the same as create_time. */
  updateTime?: string;
  /** Output only. The timestamp at which this backup schedule was created and effective since. No backups will be created for this schedule before this time. */
  createTime?: string;
  /** At what relative time in the future, compared to its creation time, the backup should be deleted, e.g. keep backups for 7 days. The maximum supported retention period is 14 weeks. */
  retention?: string;
  /** For a schedule that runs daily. */
  dailyRecurrence?: GoogleFirestoreAdminV1DailyRecurrence;
  /** Output only. The unique backup schedule identifier across all locations and databases for the given project. This will be auto-assigned. Format is `projects/{project}/databases/{database}/backupSchedules/{backup_schedule}` */
  name?: string;
  /** For a schedule that runs weekly on a specific day. */
  weeklyRecurrence?: GoogleFirestoreAdminV1WeeklyRecurrence;
}

export const GoogleFirestoreAdminV1BackupSchedule: Schema.Schema<GoogleFirestoreAdminV1BackupSchedule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateTime: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    retention: Schema.optional(Schema.String),
    dailyRecurrence: Schema.optional(GoogleFirestoreAdminV1DailyRecurrence),
    name: Schema.optional(Schema.String),
    weeklyRecurrence: Schema.optional(GoogleFirestoreAdminV1WeeklyRecurrence),
  }).annotate({ identifier: "GoogleFirestoreAdminV1BackupSchedule" });

export interface DocumentChange {
  /** A set of target IDs of targets that match this document. */
  targetIds?: ReadonlyArray<number>;
  /** A set of target IDs for targets that no longer match this document. */
  removedTargetIds?: ReadonlyArray<number>;
  /** The new state of the Document. If `mask` is set, contains only fields that were updated or added. */
  document?: Document;
}

export const DocumentChange: Schema.Schema<DocumentChange> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    targetIds: Schema.optional(Schema.Array(Schema.Number)),
    removedTargetIds: Schema.optional(Schema.Array(Schema.Number)),
    document: Schema.optional(Document),
  }).annotate({ identifier: "DocumentChange" });

export interface GoogleFirestoreAdminV1ExportDocumentsResponse {
  /** Location of the output files. This can be used to begin an import into Cloud Firestore (this project or another project) after the operation completes successfully. */
  outputUriPrefix?: string;
}

export const GoogleFirestoreAdminV1ExportDocumentsResponse: Schema.Schema<GoogleFirestoreAdminV1ExportDocumentsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    outputUriPrefix: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleFirestoreAdminV1ExportDocumentsResponse" });

export interface RollbackRequest {
  /** Required. The transaction to roll back. */
  transaction?: string;
}

export const RollbackRequest: Schema.Schema<RollbackRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    transaction: Schema.optional(Schema.String),
  }).annotate({ identifier: "RollbackRequest" });

export interface PartitionQueryRequest {
  /** The desired maximum number of partition points. The partitions may be returned across multiple pages of results. The number must be positive. The actual number of partitions returned may be fewer. For example, this may be set to one fewer than the number of parallel queries to be run, or in running a data pipeline job, one fewer than the number of workers or compute instances available. */
  partitionCount?: string;
  /** The maximum number of partitions to return in this call, subject to `partition_count`. For example, if `partition_count` = 10 and `page_size` = 8, the first call to PartitionQuery will return up to 8 partitions and a `next_page_token` if more results exist. A second call to PartitionQuery will return up to 2 partitions, to complete the total of 10 specified in `partition_count`. */
  pageSize?: number;
  /** The `next_page_token` value returned from a previous call to PartitionQuery that may be used to get an additional set of results. There are no ordering guarantees between sets of results. Thus, using multiple sets of results will require merging the different result sets. For example, two subsequent calls using a page_token may return: * cursor B, cursor M, cursor Q * cursor A, cursor U, cursor W To obtain a complete result set ordered with respect to the results of the query supplied to PartitionQuery, the results sets should be merged: cursor A, cursor B, cursor M, cursor Q, cursor U, cursor W */
  pageToken?: string;
  /** Reads documents as they were at the given time. This must be a microsecond precision timestamp within the past one hour, or if Point-in-Time Recovery is enabled, can additionally be a whole minute timestamp within the past 7 days. */
  readTime?: string;
  /** A structured query. Query must specify collection with all descendants and be ordered by name ascending. Other filters, order bys, limits, offsets, and start/end cursors are not supported. */
  structuredQuery?: StructuredQuery;
}

export const PartitionQueryRequest: Schema.Schema<PartitionQueryRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    partitionCount: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Number),
    pageToken: Schema.optional(Schema.String),
    readTime: Schema.optional(Schema.String),
    structuredQuery: Schema.optional(StructuredQuery),
  }).annotate({ identifier: "PartitionQueryRequest" });

export interface GoogleFirestoreAdminV1SourceEncryptionOptions {}

export const GoogleFirestoreAdminV1SourceEncryptionOptions: Schema.Schema<GoogleFirestoreAdminV1SourceEncryptionOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleFirestoreAdminV1SourceEncryptionOptions",
  });

export interface GoogleFirestoreAdminV1EncryptionConfig {
  /** The database will use the same encryption configuration as the source. */
  useSourceEncryption?: GoogleFirestoreAdminV1SourceEncryptionOptions;
  /** Use Customer Managed Encryption Keys (CMEK) for encryption. */
  customerManagedEncryption?: GoogleFirestoreAdminV1CustomerManagedEncryptionOptions;
  /** Use Google default encryption. */
  googleDefaultEncryption?: GoogleFirestoreAdminV1GoogleDefaultEncryptionOptions;
}

export const GoogleFirestoreAdminV1EncryptionConfig: Schema.Schema<GoogleFirestoreAdminV1EncryptionConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    useSourceEncryption: Schema.optional(
      GoogleFirestoreAdminV1SourceEncryptionOptions,
    ),
    customerManagedEncryption: Schema.optional(
      GoogleFirestoreAdminV1CustomerManagedEncryptionOptions,
    ),
    googleDefaultEncryption: Schema.optional(
      GoogleFirestoreAdminV1GoogleDefaultEncryptionOptions,
    ),
  }).annotate({ identifier: "GoogleFirestoreAdminV1EncryptionConfig" });

export interface ListDocumentsResponse {
  /** The Documents found. */
  documents?: ReadonlyArray<Document>;
  /** A token to retrieve the next page of documents. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const ListDocumentsResponse: Schema.Schema<ListDocumentsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    documents: Schema.optional(Schema.Array(Document)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListDocumentsResponse" });

export interface BeginTransactionRequest {
  /** The options for the transaction. Defaults to a read-write transaction. */
  options?: TransactionOptions;
}

export const BeginTransactionRequest: Schema.Schema<BeginTransactionRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    options: Schema.optional(TransactionOptions),
  }).annotate({ identifier: "BeginTransactionRequest" });

export interface ListenRequest {
  /** The ID of a target to remove from this stream. */
  removeTarget?: number;
  /** A target to add to this stream. */
  addTarget?: Target;
  /** Labels associated with this target change. */
  labels?: Record<string, string>;
}

export const ListenRequest: Schema.Schema<ListenRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    removeTarget: Schema.optional(Schema.Number),
    addTarget: Schema.optional(Target),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "ListenRequest" });

export interface GoogleFirestoreAdminV1LocationMetadata {}

export const GoogleFirestoreAdminV1LocationMetadata: Schema.Schema<GoogleFirestoreAdminV1LocationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleFirestoreAdminV1LocationMetadata",
  });

export interface GoogleFirestoreAdminV1RestoreDatabaseRequest {
  /** Required. Backup to restore from. Must be from the same project as the parent. The restored database will be created in the same location as the source backup. Format is: `projects/{project_id}/locations/{location}/backups/{backup}` */
  backup?: string;
  /** Optional. Immutable. Tags to be bound to the restored database. The tags should be provided in the format of `tagKeys/{tag_key_id} -> tagValues/{tag_value_id}`. */
  tags?: Record<string, string>;
  /** Optional. Encryption configuration for the restored database. If this field is not specified, the restored database will use the same encryption configuration as the backup, namely use_source_encryption. */
  encryptionConfig?: GoogleFirestoreAdminV1EncryptionConfig;
  /** Required. The ID to use for the database, which will become the final component of the database's resource name. This database ID must not be associated with an existing database. This value should be 4-63 characters. Valid characters are /a-z-/ with first character a letter and the last a letter or a number. Must not be UUID-like /[0-9a-f]{8}(-[0-9a-f]{4}){3}-[0-9a-f]{12}/. "(default)" database ID is also valid if the database is Standard edition. */
  databaseId?: string;
}

export const GoogleFirestoreAdminV1RestoreDatabaseRequest: Schema.Schema<GoogleFirestoreAdminV1RestoreDatabaseRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    backup: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    encryptionConfig: Schema.optional(GoogleFirestoreAdminV1EncryptionConfig),
    databaseId: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleFirestoreAdminV1RestoreDatabaseRequest" });

export interface DocumentMask {
  /** The list of field paths in the mask. See Document.fields for a field path syntax reference. */
  fieldPaths?: ReadonlyArray<string>;
}

export const DocumentMask: Schema.Schema<DocumentMask> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fieldPaths: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "DocumentMask" });

export interface Precondition {
  /** When set to `true`, the target document must exist. When set to `false`, the target document must not exist. */
  exists?: boolean;
  /** When set, the target document must exist and have been last updated at that time. Timestamp must be microsecond aligned. */
  updateTime?: string;
}

export const Precondition: Schema.Schema<Precondition> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    exists: Schema.optional(Schema.Boolean),
    updateTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "Precondition" });

export interface Write {
  /** The fields to update in this write. This field can be set only when the operation is `update`. If the mask is not set for an `update` and the document exists, any existing data will be overwritten. If the mask is set and the document on the server has fields not covered by the mask, they are left unchanged. Fields referenced in the mask, but not present in the input document, are deleted from the document on the server. The field paths in this mask must not contain a reserved field name. */
  updateMask?: DocumentMask;
  /** An optional precondition on the document. The write will fail if this is set and not met by the target document. */
  currentDocument?: Precondition;
  /** A document name to delete. In the format: `projects/{project_id}/databases/{database_id}/documents/{document_path}`. */
  delete?: string;
  /** Applies a transformation to a document. */
  transform?: DocumentTransform;
  /** The transforms to perform after update. This field can be set only when the operation is `update`. If present, this write is equivalent to performing `update` and `transform` to the same document atomically and in order. */
  updateTransforms?: ReadonlyArray<FieldTransform>;
  /** A document to write. */
  update?: Document;
}

export const Write: Schema.Schema<Write> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(DocumentMask),
    currentDocument: Schema.optional(Precondition),
    delete: Schema.optional(Schema.String),
    transform: Schema.optional(DocumentTransform),
    updateTransforms: Schema.optional(Schema.Array(FieldTransform)),
    update: Schema.optional(Document),
  }).annotate({ identifier: "Write" });

export interface ExplainStats {
  /** The format depends on the `output_format` options in the request. Currently there are two supported options: `TEXT` and `JSON`. Both supply a `google.protobuf.StringValue`. */
  data?: Record<string, unknown>;
}

export const ExplainStats: Schema.Schema<ExplainStats> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    data: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "ExplainStats" });

export interface GoogleFirestoreAdminV1BackupSource {
  /** The resource name of the backup that was used to restore this database. Format: `projects/{project}/locations/{location}/backups/{backup}`. */
  backup?: string;
}

export const GoogleFirestoreAdminV1BackupSource: Schema.Schema<GoogleFirestoreAdminV1BackupSource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    backup: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleFirestoreAdminV1BackupSource" });

export interface GoogleFirestoreAdminV1DeleteDatabaseMetadata {}

export const GoogleFirestoreAdminV1DeleteDatabaseMetadata: Schema.Schema<GoogleFirestoreAdminV1DeleteDatabaseMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleFirestoreAdminV1DeleteDatabaseMetadata",
  });

export interface DocumentRemove {
  /** The resource name of the Document that has gone out of view. */
  document?: string;
  /** The read timestamp at which the remove was observed. Greater or equal to the `commit_time` of the change/delete/remove. */
  readTime?: string;
  /** A set of target IDs for targets that previously matched this document. */
  removedTargetIds?: ReadonlyArray<number>;
}

export const DocumentRemove: Schema.Schema<DocumentRemove> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    document: Schema.optional(Schema.String),
    readTime: Schema.optional(Schema.String),
    removedTargetIds: Schema.optional(Schema.Array(Schema.Number)),
  }).annotate({ identifier: "DocumentRemove" });

export interface ListCollectionIdsResponse {
  /** The collection ids. */
  collectionIds?: ReadonlyArray<string>;
  /** A page token that may be used to continue the list. */
  nextPageToken?: string;
}

export const ListCollectionIdsResponse: Schema.Schema<ListCollectionIdsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    collectionIds: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListCollectionIdsResponse" });

export interface GoogleFirestoreAdminV1UpdateDatabaseMetadata {}

export const GoogleFirestoreAdminV1UpdateDatabaseMetadata: Schema.Schema<GoogleFirestoreAdminV1UpdateDatabaseMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleFirestoreAdminV1UpdateDatabaseMetadata",
  });

export interface GoogleFirestoreAdminV1PitrSnapshot {
  /** Required. The name of the database that this was a snapshot of. Format: `projects/{project}/databases/{database}`. */
  database?: string;
  /** Output only. Public UUID of the database the snapshot was associated with. */
  databaseUid?: string;
  /** Required. Snapshot time of the database. */
  snapshotTime?: string;
}

export const GoogleFirestoreAdminV1PitrSnapshot: Schema.Schema<GoogleFirestoreAdminV1PitrSnapshot> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    database: Schema.optional(Schema.String),
    databaseUid: Schema.optional(Schema.String),
    snapshotTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleFirestoreAdminV1PitrSnapshot" });

export interface GoogleFirestoreAdminV1ListUserCredsResponse {
  /** The user creds for the database. */
  userCreds?: ReadonlyArray<GoogleFirestoreAdminV1UserCreds>;
}

export const GoogleFirestoreAdminV1ListUserCredsResponse: Schema.Schema<GoogleFirestoreAdminV1ListUserCredsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    userCreds: Schema.optional(Schema.Array(GoogleFirestoreAdminV1UserCreds)),
  }).annotate({ identifier: "GoogleFirestoreAdminV1ListUserCredsResponse" });

export interface Avg {
  /** The field to aggregate on. */
  field?: FieldReference;
}

export const Avg: Schema.Schema<Avg> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    field: Schema.optional(FieldReference),
  }).annotate({ identifier: "Avg" });

export interface BatchGetDocumentsResponse {
  /** The transaction that was started as part of this request. Will only be set in the first response, and only if BatchGetDocumentsRequest.new_transaction was set in the request. */
  transaction?: string;
  /** The time at which the document was read. This may be monotically increasing, in this case the previous documents in the result stream are guaranteed not to have changed between their read_time and this one. */
  readTime?: string;
  /** A document that was requested. */
  found?: Document;
  /** A document name that was requested but does not exist. In the format: `projects/{project_id}/databases/{database_id}/documents/{document_path}`. */
  missing?: string;
}

export const BatchGetDocumentsResponse: Schema.Schema<BatchGetDocumentsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    transaction: Schema.optional(Schema.String),
    readTime: Schema.optional(Schema.String),
    found: Schema.optional(Document),
    missing: Schema.optional(Schema.String),
  }).annotate({ identifier: "BatchGetDocumentsResponse" });

export interface BatchGetDocumentsRequest {
  /** The fields to return. If not set, returns all fields. If a document has a field that is not present in this mask, that field will not be returned in the response. */
  mask?: DocumentMask;
  /** Reads documents in a transaction. */
  transaction?: string;
  /** Reads documents as they were at the given time. This must be a microsecond precision timestamp within the past one hour, or if Point-in-Time Recovery is enabled, can additionally be a whole minute timestamp within the past 7 days. */
  readTime?: string;
  /** The names of the documents to retrieve. In the format: `projects/{project_id}/databases/{database_id}/documents/{document_path}`. The request will fail if any of the document is not a child resource of the given `database`. Duplicate names will be elided. */
  documents?: ReadonlyArray<string>;
  /** Starts a new transaction and reads the documents. Defaults to a read-only transaction. The new transaction ID will be returned as the first response in the stream. */
  newTransaction?: TransactionOptions;
}

export const BatchGetDocumentsRequest: Schema.Schema<BatchGetDocumentsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mask: Schema.optional(DocumentMask),
    transaction: Schema.optional(Schema.String),
    readTime: Schema.optional(Schema.String),
    documents: Schema.optional(Schema.Array(Schema.String)),
    newTransaction: Schema.optional(TransactionOptions),
  }).annotate({ identifier: "BatchGetDocumentsRequest" });

export interface GoogleFirestoreAdminV1DisableUserCredsRequest {}

export const GoogleFirestoreAdminV1DisableUserCredsRequest: Schema.Schema<GoogleFirestoreAdminV1DisableUserCredsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleFirestoreAdminV1DisableUserCredsRequest",
  });

export interface StructuredPipeline {
  /** Required. The pipeline query to execute. */
  pipeline?: Pipeline;
  /** Optional. Optional query-level arguments. */
  options?: Record<string, Value>;
}

export const StructuredPipeline: Schema.Schema<StructuredPipeline> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pipeline: Schema.optional(Pipeline),
    options: Schema.optional(Schema.Record(Schema.String, Value)),
  }).annotate({ identifier: "StructuredPipeline" });

export interface GoogleFirestoreAdminV1SourceInfo {
  /** If set, this database was restored from the specified backup (or a snapshot thereof). */
  backup?: GoogleFirestoreAdminV1BackupSource;
  /** The associated long-running operation. This field may not be set after the operation has completed. Format: `projects/{project}/databases/{database}/operations/{operation}`. */
  operation?: string;
}

export const GoogleFirestoreAdminV1SourceInfo: Schema.Schema<GoogleFirestoreAdminV1SourceInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    backup: Schema.optional(GoogleFirestoreAdminV1BackupSource),
    operation: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleFirestoreAdminV1SourceInfo" });

export interface GoogleFirestoreAdminV1CmekConfig {
  /** Required. Only keys in the same location as this database are allowed to be used for encryption. For Firestore's nam5 multi-region, this corresponds to Cloud KMS multi-region us. For Firestore's eur3 multi-region, this corresponds to Cloud KMS multi-region europe. See https://cloud.google.com/kms/docs/locations. The expected format is `projects/{project_id}/locations/{kms_location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}`. */
  kmsKeyName?: string;
  /** Output only. Currently in-use [KMS key versions](https://cloud.google.com/kms/docs/resource-hierarchy#key_versions). During [key rotation](https://cloud.google.com/kms/docs/key-rotation), there can be multiple in-use key versions. The expected format is `projects/{project_id}/locations/{kms_location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}/cryptoKeyVersions/{key_version}`. */
  activeKeyVersion?: ReadonlyArray<string>;
}

export const GoogleFirestoreAdminV1CmekConfig: Schema.Schema<GoogleFirestoreAdminV1CmekConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kmsKeyName: Schema.optional(Schema.String),
    activeKeyVersion: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleFirestoreAdminV1CmekConfig" });

export interface ExecutePipelineResponse {
  /** An ordered batch of results returned executing a pipeline. The batch size is variable, and can even be zero for when only a partial progress message is returned. The fields present in the returned documents are only those that were explicitly requested in the pipeline, this includes those like `__name__` and `__update_time__`. This is explicitly a divergence from `Firestore.RunQuery` / `Firestore.GetDocument` RPCs which always return such fields even when they are not specified in the `mask`. */
  results?: ReadonlyArray<Document>;
  /** Query explain stats. This is present on the **last** response if the request configured explain to run in 'analyze' or 'explain' mode in the pipeline options. If the query does not return any results, a response with `explain_stats` and no `results` will still be sent. */
  explainStats?: ExplainStats;
  /** Newly created transaction identifier. This field is only specified as part of the first response from the server, alongside the `results` field when the original request specified ExecuteRequest.new_transaction. */
  transaction?: string;
  /** The time at which the results are valid. This is a (not strictly) monotonically increasing value across multiple responses in the same stream. The API guarantees that all previously returned results are still valid at the latest `execution_time`. This allows the API consumer to treat the query if it ran at the latest `execution_time` returned. If the query returns no results, a response with `execution_time` and no `results` will be sent, and this represents the time at which the operation was run. */
  executionTime?: string;
}

export const ExecutePipelineResponse: Schema.Schema<ExecutePipelineResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    results: Schema.optional(Schema.Array(Document)),
    explainStats: Schema.optional(ExplainStats),
    transaction: Schema.optional(Schema.String),
    executionTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "ExecutePipelineResponse" });

export interface GoogleFirestoreAdminV1CloneDatabaseRequest {
  /** Optional. Immutable. Tags to be bound to the cloned database. The tags should be provided in the format of `tagKeys/{tag_key_id} -> tagValues/{tag_value_id}`. */
  tags?: Record<string, string>;
  /** Required. Specification of the PITR data to clone from. The source database must exist. The cloned database will be created in the same location as the source database. */
  pitrSnapshot?: GoogleFirestoreAdminV1PitrSnapshot;
  /** Optional. Encryption configuration for the cloned database. If this field is not specified, the cloned database will use the same encryption configuration as the source database, namely use_source_encryption. */
  encryptionConfig?: GoogleFirestoreAdminV1EncryptionConfig;
  /** Required. The ID to use for the database, which will become the final component of the database's resource name. This database ID must not be associated with an existing database. This value should be 4-63 characters. Valid characters are /a-z-/ with first character a letter and the last a letter or a number. Must not be UUID-like /[0-9a-f]{8}(-[0-9a-f]{4}){3}-[0-9a-f]{12}/. "(default)" database ID is also valid if the database is Standard edition. */
  databaseId?: string;
}

export const GoogleFirestoreAdminV1CloneDatabaseRequest: Schema.Schema<GoogleFirestoreAdminV1CloneDatabaseRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    pitrSnapshot: Schema.optional(GoogleFirestoreAdminV1PitrSnapshot),
    encryptionConfig: Schema.optional(GoogleFirestoreAdminV1EncryptionConfig),
    databaseId: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleFirestoreAdminV1CloneDatabaseRequest" });

export interface GoogleFirestoreAdminV1ResetUserPasswordRequest {}

export const GoogleFirestoreAdminV1ResetUserPasswordRequest: Schema.Schema<GoogleFirestoreAdminV1ResetUserPasswordRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleFirestoreAdminV1ResetUserPasswordRequest",
  });

export interface GoogleLongrunningListOperationsResponse {
  /** A list of operations that matches the specified filter in the request. */
  operations?: ReadonlyArray<GoogleLongrunningOperation>;
  /** The standard List next-page token. */
  nextPageToken?: string;
  /** Unordered list. Unreachable resources. Populated when the request sets `ListOperationsRequest.return_partial_success` and reads across collections. For example, when attempting to list all resources across all supported locations. */
  unreachable?: ReadonlyArray<string>;
}

export const GoogleLongrunningListOperationsResponse: Schema.Schema<GoogleLongrunningListOperationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    operations: Schema.optional(Schema.Array(GoogleLongrunningOperation)),
    nextPageToken: Schema.optional(Schema.String),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleLongrunningListOperationsResponse" });

export interface RunAggregationQueryResponse {
  /** A single aggregation result. Not present when reporting partial progress. */
  result?: AggregationResult;
  /** The transaction that was started as part of this request. Only present on the first response when the request requested to start a new transaction. */
  transaction?: string;
  /** The time at which the aggregate result was computed. This is always monotonically increasing; in this case, the previous AggregationResult in the result stream are guaranteed not to have changed between their `read_time` and this one. If the query returns no results, a response with `read_time` and no `result` will be sent, and this represents the time at which the query was run. */
  readTime?: string;
  /** Query explain metrics. This is only present when the RunAggregationQueryRequest.explain_options is provided, and it is sent only once with the last response in the stream. */
  explainMetrics?: ExplainMetrics;
}

export const RunAggregationQueryResponse: Schema.Schema<RunAggregationQueryResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    result: Schema.optional(AggregationResult),
    transaction: Schema.optional(Schema.String),
    readTime: Schema.optional(Schema.String),
    explainMetrics: Schema.optional(ExplainMetrics),
  }).annotate({ identifier: "RunAggregationQueryResponse" });

export interface GoogleFirestoreAdminV1IndexOperationMetadata {
  /** The progress, in bytes, of this operation. */
  progressBytes?: GoogleFirestoreAdminV1Progress;
  /** The progress, in documents, of this operation. */
  progressDocuments?: GoogleFirestoreAdminV1Progress;
  /** The time this operation completed. Will be unset if operation still in progress. */
  endTime?: string;
  /** The state of the operation. */
  state?:
    | "OPERATION_STATE_UNSPECIFIED"
    | "INITIALIZING"
    | "PROCESSING"
    | "CANCELLING"
    | "FINALIZING"
    | "SUCCESSFUL"
    | "FAILED"
    | "CANCELLED"
    | (string & {});
  /** The time this operation started. */
  startTime?: string;
  /** The index resource that this operation is acting on. For example: `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}/indexes/{index_id}` */
  index?: string;
}

export const GoogleFirestoreAdminV1IndexOperationMetadata: Schema.Schema<GoogleFirestoreAdminV1IndexOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    progressBytes: Schema.optional(GoogleFirestoreAdminV1Progress),
    progressDocuments: Schema.optional(GoogleFirestoreAdminV1Progress),
    endTime: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
    index: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleFirestoreAdminV1IndexOperationMetadata" });

export interface GoogleFirestoreAdminV1TtlConfig {
  /** Output only. The state of the TTL configuration. */
  state?:
    | "STATE_UNSPECIFIED"
    | "CREATING"
    | "ACTIVE"
    | "NEEDS_REPAIR"
    | (string & {});
  /** Optional. The offset, relative to the timestamp value from the TTL-enabled field, used to determine the document's expiration time. `expiration_offset.seconds` must be between 0 and 2,147,483,647 inclusive. Values more precise than seconds are rejected. If unset, defaults to 0, in which case the expiration time is the same as the timestamp value from the TTL-enabled field. */
  expirationOffset?: string;
}

export const GoogleFirestoreAdminV1TtlConfig: Schema.Schema<GoogleFirestoreAdminV1TtlConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    expirationOffset: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleFirestoreAdminV1TtlConfig" });

export interface BeginTransactionResponse {
  /** The transaction that was started. */
  transaction?: string;
}

export const BeginTransactionResponse: Schema.Schema<BeginTransactionResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    transaction: Schema.optional(Schema.String),
  }).annotate({ identifier: "BeginTransactionResponse" });

export interface Sum {
  /** The field to aggregate on. */
  field?: FieldReference;
}

export const Sum: Schema.Schema<Sum> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    field: Schema.optional(FieldReference),
  }).annotate({ identifier: "Sum" });

export interface Aggregation {
  /** Average aggregator. */
  avg?: Avg;
  /** Optional. Optional name of the field to store the result of the aggregation into. If not provided, Firestore will pick a default name following the format `field_`. For example: ``` AGGREGATE COUNT_UP_TO(1) AS count_up_to_1, COUNT_UP_TO(2), COUNT_UP_TO(3) AS count_up_to_3, COUNT(*) OVER ( ... ); ``` becomes: ``` AGGREGATE COUNT_UP_TO(1) AS count_up_to_1, COUNT_UP_TO(2) AS field_1, COUNT_UP_TO(3) AS count_up_to_3, COUNT(*) AS field_2 OVER ( ... ); ``` Requires: * Must be unique across all aggregation aliases. * Conform to document field name limitations. */
  alias?: string;
  /** Count aggregator. */
  count?: Count;
  /** Sum aggregator. */
  sum?: Sum;
}

export const Aggregation: Schema.Schema<Aggregation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    avg: Schema.optional(Avg),
    alias: Schema.optional(Schema.String),
    count: Schema.optional(Count),
    sum: Schema.optional(Sum),
  }).annotate({ identifier: "Aggregation" });

export interface GoogleFirestoreAdminV1Database {
  /** Required. The location of the database. Available locations are listed at https://cloud.google.com/firestore/docs/locations. */
  locationId?: string;
  /** State of delete protection for the database. */
  deleteProtectionState?:
    | "DELETE_PROTECTION_STATE_UNSPECIFIED"
    | "DELETE_PROTECTION_DISABLED"
    | "DELETE_PROTECTION_ENABLED"
    | (string & {});
  /** Output only. The database resource's prior database ID. This field is only populated for deleted databases. */
  previousId?: string;
  /** Output only. The system-generated UUID4 for this Database. */
  uid?: string;
  /** Output only. The period during which past versions of data are retained in the database. Any read or query can specify a `read_time` within this window, and will read the state of the database at that time. If the PITR feature is enabled, the retention period is 7 days. Otherwise, the retention period is 1 hour. */
  versionRetentionPeriod?: string;
  /** Optional. Input only. Immutable. Tag keys/values directly bound to this resource. For example: "123/environment": "production", "123/costCenter": "marketing" */
  tags?: Record<string, string>;
  /** Output only. The timestamp at which this database was created. Databases created before 2016 do not populate create_time. */
  createTime?: string;
  /** Whether to enable the PITR feature on this database. */
  pointInTimeRecoveryEnablement?:
    | "POINT_IN_TIME_RECOVERY_ENABLEMENT_UNSPECIFIED"
    | "POINT_IN_TIME_RECOVERY_ENABLED"
    | "POINT_IN_TIME_RECOVERY_DISABLED"
    | (string & {});
  /** Required. The type of the database. See https://cloud.google.com/datastore/docs/firestore-or-datastore for information about how to choose. */
  type?:
    | "DATABASE_TYPE_UNSPECIFIED"
    | "FIRESTORE_NATIVE"
    | "DATASTORE_MODE"
    | (string & {});
  /** The App Engine integration mode to use for this database. */
  appEngineIntegrationMode?:
    | "APP_ENGINE_INTEGRATION_MODE_UNSPECIFIED"
    | "ENABLED"
    | "DISABLED"
    | (string & {});
  /** Immutable. The default Realtime Updates mode to use for this database. */
  realtimeUpdatesMode?:
    | "REALTIME_UPDATES_MODE_UNSPECIFIED"
    | "REALTIME_UPDATES_MODE_ENABLED"
    | "REALTIME_UPDATES_MODE_DISABLED"
    | (string & {});
  /** Output only. The earliest timestamp at which older versions of the data can be read from the database. See [version_retention_period] above; this field is populated with `now - version_retention_period`. This value is continuously updated, and becomes stale the moment it is queried. If you are using this value to recover data, make sure to account for the time from the moment when the value is queried to the moment when you initiate the recovery. */
  earliestVersionTime?: string;
  /** Optional. Presence indicates CMEK is enabled for this database. */
  cmekConfig?: GoogleFirestoreAdminV1CmekConfig;
  /** Optional. The MongoDB compatible API data access mode to use for this database. If not set on write, the default value is DATA_ACCESS_MODE_ENABLED for Enterprise Edition. The value is always DATA_ACCESS_MODE_DISABLED for Standard Edition. */
  mongodbCompatibleDataAccessMode?:
    | "DATA_ACCESS_MODE_UNSPECIFIED"
    | "DATA_ACCESS_MODE_ENABLED"
    | "DATA_ACCESS_MODE_DISABLED"
    | (string & {});
  /** Immutable. The edition of the database. */
  databaseEdition?:
    | "DATABASE_EDITION_UNSPECIFIED"
    | "STANDARD"
    | "ENTERPRISE"
    | (string & {});
  /** Output only. Background: Free tier is the ability of a Firestore database to use a small amount of resources every day without being charged. Once usage exceeds the free tier limit further usage is charged. Whether this database can make use of the free tier. Only one database per project can be eligible for the free tier. The first (or next) database that is created in a project without a free tier database will be marked as eligible for the free tier. Databases that are created while there is a free tier database will not be eligible for the free tier. */
  freeTier?: boolean;
  /** Output only. The timestamp at which this database was most recently updated. Note this only includes updates to the database resource and not data contained by the database. */
  updateTime?: string;
  /** Output only. The timestamp at which this database was deleted. Only set if the database has been deleted. */
  deleteTime?: string;
  /** Output only. Information about the provenance of this database. */
  sourceInfo?: GoogleFirestoreAdminV1SourceInfo;
  /** The concurrency control mode to use for this database. If unspecified in a CreateDatabase request, this will default based on the database edition: Optimistic for Enterprise and Pessimistic for all other databases. */
  concurrencyMode?:
    | "CONCURRENCY_MODE_UNSPECIFIED"
    | "OPTIMISTIC"
    | "PESSIMISTIC"
    | "OPTIMISTIC_WITH_ENTITY_GROUPS"
    | (string & {});
  /** Optional. The Firestore API data access mode to use for this database. If not set on write: - the default value is DATA_ACCESS_MODE_DISABLED for Enterprise Edition. - the default value is DATA_ACCESS_MODE_ENABLED for Standard Edition. */
  firestoreDataAccessMode?:
    | "DATA_ACCESS_MODE_UNSPECIFIED"
    | "DATA_ACCESS_MODE_ENABLED"
    | "DATA_ACCESS_MODE_DISABLED"
    | (string & {});
  /** This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. */
  etag?: string;
  /** Output only. The key_prefix for this database. This key_prefix is used, in combination with the project ID ("~") to construct the application ID that is returned from the Cloud Datastore APIs in Google App Engine first generation runtimes. This value may be empty in which case the appid to use for URL-encoded keys is the project_id (eg: foo instead of v~foo). */
  keyPrefix?: string;
  /** The resource name of the Database. Format: `projects/{project}/databases/{database}` */
  name?: string;
}

export const GoogleFirestoreAdminV1Database: Schema.Schema<GoogleFirestoreAdminV1Database> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    locationId: Schema.optional(Schema.String),
    deleteProtectionState: Schema.optional(Schema.String),
    previousId: Schema.optional(Schema.String),
    uid: Schema.optional(Schema.String),
    versionRetentionPeriod: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    createTime: Schema.optional(Schema.String),
    pointInTimeRecoveryEnablement: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    appEngineIntegrationMode: Schema.optional(Schema.String),
    realtimeUpdatesMode: Schema.optional(Schema.String),
    earliestVersionTime: Schema.optional(Schema.String),
    cmekConfig: Schema.optional(GoogleFirestoreAdminV1CmekConfig),
    mongodbCompatibleDataAccessMode: Schema.optional(Schema.String),
    databaseEdition: Schema.optional(Schema.String),
    freeTier: Schema.optional(Schema.Boolean),
    updateTime: Schema.optional(Schema.String),
    deleteTime: Schema.optional(Schema.String),
    sourceInfo: Schema.optional(GoogleFirestoreAdminV1SourceInfo),
    concurrencyMode: Schema.optional(Schema.String),
    firestoreDataAccessMode: Schema.optional(Schema.String),
    etag: Schema.optional(Schema.String),
    keyPrefix: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleFirestoreAdminV1Database" });

export interface GoogleFirestoreAdminV1IndexConfig {
  /** The indexes supported for this field. */
  indexes?: ReadonlyArray<GoogleFirestoreAdminV1Index>;
  /** Output only. When true, the `Field`'s index configuration is set from the configuration specified by the `ancestor_field`. When false, the `Field`'s index configuration is defined explicitly. */
  usesAncestorConfig?: boolean;
  /** Output only. Specifies the resource name of the `Field` from which this field's index configuration is set (when `uses_ancestor_config` is true), or from which it *would* be set if this field had no index configuration (when `uses_ancestor_config` is false). */
  ancestorField?: string;
  /** Output only When true, the `Field`'s index configuration is in the process of being reverted. Once complete, the index config will transition to the same state as the field specified by `ancestor_field`, at which point `uses_ancestor_config` will be `true` and `reverting` will be `false`. */
  reverting?: boolean;
}

export const GoogleFirestoreAdminV1IndexConfig: Schema.Schema<GoogleFirestoreAdminV1IndexConfig> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    indexes: Schema.optional(Schema.Array(GoogleFirestoreAdminV1Index)),
    usesAncestorConfig: Schema.optional(Schema.Boolean),
    ancestorField: Schema.optional(Schema.String),
    reverting: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleFirestoreAdminV1IndexConfig" });

export interface GoogleFirestoreAdminV1Field {
  /** The index configuration for this field. If unset, field indexing will revert to the configuration defined by the `ancestor_field`. To explicitly remove all indexes for this field, specify an index config with an empty list of indexes. */
  indexConfig?: GoogleFirestoreAdminV1IndexConfig;
  /** The TTL configuration for this `Field`. Setting or unsetting this will enable or disable the TTL for documents that have this `Field`. */
  ttlConfig?: GoogleFirestoreAdminV1TtlConfig;
  /** Required. A field name of the form: `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}/fields/{field_path}` A field path can be a simple field name, e.g. `address` or a path to fields within `map_value` , e.g. `address.city`, or a special field path. The only valid special field is `*`, which represents any field. Field paths can be quoted using `` ` `` (backtick). The only character that must be escaped within a quoted field path is the backtick character itself, escaped using a backslash. Special characters in field paths that must be quoted include: `*`, `.`, `` ` `` (backtick), `[`, `]`, as well as any ascii symbolic characters. Examples: `` `address.city` `` represents a field named `address.city`, not the map key `city` in the field `address`. `` `*` `` represents a field named `*`, not any field. A special `Field` contains the default indexing settings for all fields. This field's resource name is: `projects/{project_id}/databases/{database_id}/collectionGroups/__default__/fields/*` Indexes defined on this `Field` will be applied to all fields which do not have their own `Field` index configuration. */
  name?: string;
}

export const GoogleFirestoreAdminV1Field: Schema.Schema<GoogleFirestoreAdminV1Field> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    indexConfig: Schema.optional(GoogleFirestoreAdminV1IndexConfig),
    ttlConfig: Schema.optional(GoogleFirestoreAdminV1TtlConfig),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleFirestoreAdminV1Field" });

export interface CommitRequest {
  /** The writes to apply. Always executed atomically and in order. */
  writes?: ReadonlyArray<Write>;
  /** If set, applies all writes in this transaction, and commits it. */
  transaction?: string;
}

export const CommitRequest: Schema.Schema<CommitRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    writes: Schema.optional(Schema.Array(Write)),
    transaction: Schema.optional(Schema.String),
  }).annotate({ identifier: "CommitRequest" });

export interface StructuredAggregationQuery {
  /** Nested structured query. */
  structuredQuery?: StructuredQuery;
  /** Optional. Series of aggregations to apply over the results of the `structured_query`. Requires: * A minimum of one and maximum of five aggregations per query. */
  aggregations?: ReadonlyArray<Aggregation>;
}

export const StructuredAggregationQuery: Schema.Schema<StructuredAggregationQuery> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    structuredQuery: Schema.optional(StructuredQuery),
    aggregations: Schema.optional(Schema.Array(Aggregation)),
  }).annotate({ identifier: "StructuredAggregationQuery" });

export interface RunAggregationQueryRequest {
  /** Optional. Explain options for the query. If set, additional query statistics will be returned. If not, only query results will be returned. */
  explainOptions?: ExplainOptions;
  /** Starts a new transaction as part of the query, defaulting to read-only. The new transaction ID will be returned as the first response in the stream. */
  newTransaction?: TransactionOptions;
  /** An aggregation query. */
  structuredAggregationQuery?: StructuredAggregationQuery;
  /** Run the aggregation within an already active transaction. The value here is the opaque transaction ID to execute the query in. */
  transaction?: string;
  /** Executes the query at the given timestamp. This must be a microsecond precision timestamp within the past one hour, or if Point-in-Time Recovery is enabled, can additionally be a whole minute timestamp within the past 7 days. */
  readTime?: string;
}

export const RunAggregationQueryRequest: Schema.Schema<RunAggregationQueryRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    explainOptions: Schema.optional(ExplainOptions),
    newTransaction: Schema.optional(TransactionOptions),
    structuredAggregationQuery: Schema.optional(StructuredAggregationQuery),
    transaction: Schema.optional(Schema.String),
    readTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "RunAggregationQueryRequest" });

export interface DocumentDelete {
  /** A set of target IDs for targets that previously matched this entity. */
  removedTargetIds?: ReadonlyArray<number>;
  /** The read timestamp at which the delete was observed. Greater or equal to the `commit_time` of the delete. */
  readTime?: string;
  /** The resource name of the Document that was deleted. */
  document?: string;
}

export const DocumentDelete: Schema.Schema<DocumentDelete> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    removedTargetIds: Schema.optional(Schema.Array(Schema.Number)),
    readTime: Schema.optional(Schema.String),
    document: Schema.optional(Schema.String),
  }).annotate({ identifier: "DocumentDelete" });

export interface GoogleLongrunningCancelOperationRequest {}

export const GoogleLongrunningCancelOperationRequest: Schema.Schema<GoogleLongrunningCancelOperationRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleLongrunningCancelOperationRequest",
  });

export interface ExecutePipelineRequest {
  /** A pipelined operation. */
  structuredPipeline?: StructuredPipeline;
  /** Run the query within an already active transaction. The value here is the opaque transaction ID to execute the query in. */
  transaction?: string;
  /** Execute the pipeline in a snapshot transaction at the given time. This must be a microsecond precision timestamp within the past one hour, or if Point-in-Time Recovery is enabled, can additionally be a whole minute timestamp within the past 7 days. */
  readTime?: string;
  /** Execute the pipeline in a new transaction. The identifier of the newly created transaction will be returned in the first response on the stream. This defaults to a read-only transaction. */
  newTransaction?: TransactionOptions;
}

export const ExecutePipelineRequest: Schema.Schema<ExecutePipelineRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    structuredPipeline: Schema.optional(StructuredPipeline),
    transaction: Schema.optional(Schema.String),
    readTime: Schema.optional(Schema.String),
    newTransaction: Schema.optional(TransactionOptions),
  }).annotate({ identifier: "ExecutePipelineRequest" });

export interface Empty {}

export const Empty: Schema.Schema<Empty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Empty",
  });

export interface WriteRequest {
  /** The ID of the write stream to resume. This may only be set in the first message. When left empty, a new write stream will be created. */
  streamId?: string;
  /** The writes to apply. Always executed atomically and in order. This must be empty on the first request. This may be empty on the last request. This must not be empty on all other requests. */
  writes?: ReadonlyArray<Write>;
  /** Labels associated with this write request. */
  labels?: Record<string, string>;
  /** A stream token that was previously sent by the server. The client should set this field to the token from the most recent WriteResponse it has received. This acknowledges that the client has received responses up to this token. After sending this token, earlier tokens may not be used anymore. The server may close the stream if there are too many unacknowledged responses. Leave this field unset when creating a new stream. To resume a stream at a specific point, set this field and the `stream_id` field. Leave this field unset when creating a new stream. */
  streamToken?: string;
}

export const WriteRequest: Schema.Schema<WriteRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    streamId: Schema.optional(Schema.String),
    writes: Schema.optional(Schema.Array(Write)),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    streamToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "WriteRequest" });

export interface ListenResponse {
  /** A filter to apply to the set of documents previously returned for the given target. Returned when documents may have been removed from the given target, but the exact documents are unknown. */
  filter?: ExistenceFilter;
  /** Targets have changed. */
  targetChange?: TargetChange;
  /** A Document has changed. */
  documentChange?: DocumentChange;
  /** A Document has been removed from a target (because it is no longer relevant to that target). */
  documentRemove?: DocumentRemove;
  /** A Document has been deleted. */
  documentDelete?: DocumentDelete;
}

export const ListenResponse: Schema.Schema<ListenResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(ExistenceFilter),
    targetChange: Schema.optional(TargetChange),
    documentChange: Schema.optional(DocumentChange),
    documentRemove: Schema.optional(DocumentRemove),
    documentDelete: Schema.optional(DocumentDelete),
  }).annotate({ identifier: "ListenResponse" });

export interface BatchWriteRequest {
  /** Labels associated with this batch write. */
  labels?: Record<string, string>;
  /** The writes to apply. Method does not apply writes atomically and does not guarantee ordering. Each write succeeds or fails independently. You cannot write to the same document more than once per request. */
  writes?: ReadonlyArray<Write>;
}

export const BatchWriteRequest: Schema.Schema<BatchWriteRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    writes: Schema.optional(Schema.Array(Write)),
  }).annotate({ identifier: "BatchWriteRequest" });

export interface GoogleFirestoreAdminV1BulkDeleteDocumentsRequest {
  /** Optional. IDs of the collection groups to delete. Unspecified means all collection groups. Each collection group in this list must be unique. */
  collectionIds?: ReadonlyArray<string>;
  /** Optional. Namespaces to delete. An empty list means all namespaces. This is the recommended usage for databases that don't use namespaces. An empty string element represents the default namespace. This should be used if the database has data in non-default namespaces, but doesn't want to delete from them. Each namespace in this list must be unique. */
  namespaceIds?: ReadonlyArray<string>;
}

export const GoogleFirestoreAdminV1BulkDeleteDocumentsRequest: Schema.Schema<GoogleFirestoreAdminV1BulkDeleteDocumentsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    collectionIds: Schema.optional(Schema.Array(Schema.String)),
    namespaceIds: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier: "GoogleFirestoreAdminV1BulkDeleteDocumentsRequest",
  });

export interface GoogleFirestoreAdminV1EnableUserCredsRequest {}

export const GoogleFirestoreAdminV1EnableUserCredsRequest: Schema.Schema<GoogleFirestoreAdminV1EnableUserCredsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleFirestoreAdminV1EnableUserCredsRequest",
  });

export interface GoogleFirestoreAdminV1ExportDocumentsMetadata {
  /** The time this operation started. */
  startTime?: string;
  /** The time this operation completed. Will be unset if operation still in progress. */
  endTime?: string;
  /** The state of the export operation. */
  operationState?:
    | "OPERATION_STATE_UNSPECIFIED"
    | "INITIALIZING"
    | "PROCESSING"
    | "CANCELLING"
    | "FINALIZING"
    | "SUCCESSFUL"
    | "FAILED"
    | "CANCELLED"
    | (string & {});
  /** Which collection IDs are being exported. */
  collectionIds?: ReadonlyArray<string>;
  /** Which namespace IDs are being exported. */
  namespaceIds?: ReadonlyArray<string>;
  /** The progress, in documents, of this operation. */
  progressDocuments?: GoogleFirestoreAdminV1Progress;
  /** The timestamp that corresponds to the version of the database that is being exported. If unspecified, there are no guarantees about the consistency of the documents being exported. */
  snapshotTime?: string;
  /** The progress, in bytes, of this operation. */
  progressBytes?: GoogleFirestoreAdminV1Progress;
  /** Where the documents are being exported to. */
  outputUriPrefix?: string;
}

export const GoogleFirestoreAdminV1ExportDocumentsMetadata: Schema.Schema<GoogleFirestoreAdminV1ExportDocumentsMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    operationState: Schema.optional(Schema.String),
    collectionIds: Schema.optional(Schema.Array(Schema.String)),
    namespaceIds: Schema.optional(Schema.Array(Schema.String)),
    progressDocuments: Schema.optional(GoogleFirestoreAdminV1Progress),
    snapshotTime: Schema.optional(Schema.String),
    progressBytes: Schema.optional(GoogleFirestoreAdminV1Progress),
    outputUriPrefix: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleFirestoreAdminV1ExportDocumentsMetadata" });

export interface GoogleFirestoreAdminV1CloneDatabaseMetadata {
  /** The operation state of the clone. */
  operationState?:
    | "OPERATION_STATE_UNSPECIFIED"
    | "INITIALIZING"
    | "PROCESSING"
    | "CANCELLING"
    | "FINALIZING"
    | "SUCCESSFUL"
    | "FAILED"
    | "CANCELLED"
    | (string & {});
  /** The time the clone finished, unset for ongoing clones. */
  endTime?: string;
  /** How far along the clone is as an estimated percentage of remaining time. */
  progressPercentage?: GoogleFirestoreAdminV1Progress;
  /** The name of the database being cloned to. */
  database?: string;
  /** The snapshot from which this database was cloned. */
  pitrSnapshot?: GoogleFirestoreAdminV1PitrSnapshot;
  /** The time the clone was started. */
  startTime?: string;
}

export const GoogleFirestoreAdminV1CloneDatabaseMetadata: Schema.Schema<GoogleFirestoreAdminV1CloneDatabaseMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    operationState: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    progressPercentage: Schema.optional(GoogleFirestoreAdminV1Progress),
    database: Schema.optional(Schema.String),
    pitrSnapshot: Schema.optional(GoogleFirestoreAdminV1PitrSnapshot),
    startTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleFirestoreAdminV1CloneDatabaseMetadata" });

export interface GoogleFirestoreAdminV1RestoreDatabaseMetadata {
  /** The time the restore was started. */
  startTime?: string;
  /** The name of the database being restored to. */
  database?: string;
  /** The operation state of the restore. */
  operationState?:
    | "OPERATION_STATE_UNSPECIFIED"
    | "INITIALIZING"
    | "PROCESSING"
    | "CANCELLING"
    | "FINALIZING"
    | "SUCCESSFUL"
    | "FAILED"
    | "CANCELLED"
    | (string & {});
  /** The name of the backup restoring from. */
  backup?: string;
  /** The time the restore finished, unset for ongoing restores. */
  endTime?: string;
  /** How far along the restore is as an estimated percentage of remaining time. */
  progressPercentage?: GoogleFirestoreAdminV1Progress;
}

export const GoogleFirestoreAdminV1RestoreDatabaseMetadata: Schema.Schema<GoogleFirestoreAdminV1RestoreDatabaseMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    startTime: Schema.optional(Schema.String),
    database: Schema.optional(Schema.String),
    operationState: Schema.optional(Schema.String),
    backup: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    progressPercentage: Schema.optional(GoogleFirestoreAdminV1Progress),
  }).annotate({ identifier: "GoogleFirestoreAdminV1RestoreDatabaseMetadata" });

export interface GoogleFirestoreAdminV1ListFieldsResponse {
  /** The requested fields. */
  fields?: ReadonlyArray<GoogleFirestoreAdminV1Field>;
  /** A page token that may be used to request another page of results. If blank, this is the last page. */
  nextPageToken?: string;
}

export const GoogleFirestoreAdminV1ListFieldsResponse: Schema.Schema<GoogleFirestoreAdminV1ListFieldsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fields: Schema.optional(Schema.Array(GoogleFirestoreAdminV1Field)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleFirestoreAdminV1ListFieldsResponse" });

export interface ListCollectionIdsRequest {
  /** Reads documents as they were at the given time. This must be a microsecond precision timestamp within the past one hour, or if Point-in-Time Recovery is enabled, can additionally be a whole minute timestamp within the past 7 days. */
  readTime?: string;
  /** A page token. Must be a value from ListCollectionIdsResponse. */
  pageToken?: string;
  /** The maximum number of results to return. */
  pageSize?: number;
}

export const ListCollectionIdsRequest: Schema.Schema<ListCollectionIdsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    readTime: Schema.optional(Schema.String),
    pageToken: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Number),
  }).annotate({ identifier: "ListCollectionIdsRequest" });

export interface GoogleFirestoreAdminV1ListDatabasesResponse {
  /** The databases in the project. */
  databases?: ReadonlyArray<GoogleFirestoreAdminV1Database>;
  /** In the event that data about individual databases cannot be listed they will be recorded here. An example entry might be: projects/some_project/locations/some_location This can happen if the Cloud Region that the Database resides in is currently unavailable. In this case we can't fetch all the details about the database. You may be able to get a more detailed error message (or possibly fetch the resource) by sending a 'Get' request for the resource or a 'List' request for the specific location. */
  unreachable?: ReadonlyArray<string>;
}

export const GoogleFirestoreAdminV1ListDatabasesResponse: Schema.Schema<GoogleFirestoreAdminV1ListDatabasesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    databases: Schema.optional(Schema.Array(GoogleFirestoreAdminV1Database)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleFirestoreAdminV1ListDatabasesResponse" });

export interface GoogleFirestoreAdminV1ListBackupSchedulesResponse {
  /** List of all backup schedules. */
  backupSchedules?: ReadonlyArray<GoogleFirestoreAdminV1BackupSchedule>;
}

export const GoogleFirestoreAdminV1ListBackupSchedulesResponse: Schema.Schema<GoogleFirestoreAdminV1ListBackupSchedulesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    backupSchedules: Schema.optional(
      Schema.Array(GoogleFirestoreAdminV1BackupSchedule),
    ),
  }).annotate({
    identifier: "GoogleFirestoreAdminV1ListBackupSchedulesResponse",
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

export interface ListProjectsLocationsRequest {
  /** A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. */
  pageToken?: string;
  /** The resource that owns the locations collection, if applicable. */
  name: string;
  /** The maximum number of results to return. If not set, the service selects a default. */
  pageSize?: number;
  /** Optional. Do not use this field. It is unsupported and is ignored unless explicitly documented otherwise. This is primarily for internal usage. */
  extraLocationTypes?: string[];
  /** A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). */
  filter?: string;
}

export const ListProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    name: Schema.String.pipe(T.HttpPath("name")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
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

export interface DeleteProjectsLocationsBackupsRequest {
  /** Required. Name of the backup to delete. format is `projects/{project}/locations/{location}/backups/{backup}`. */
  name: string;
}

export const DeleteProjectsLocationsBackupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsBackupsRequest>;

export type DeleteProjectsLocationsBackupsResponse = Empty;
export const DeleteProjectsLocationsBackupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsLocationsBackupsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a backup. */
export const deleteProjectsLocationsBackups: API.OperationMethod<
  DeleteProjectsLocationsBackupsRequest,
  DeleteProjectsLocationsBackupsResponse,
  DeleteProjectsLocationsBackupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsBackupsRequest,
  output: DeleteProjectsLocationsBackupsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsBackupsRequest {
  /** Required. Name of the backup to fetch. Format is `projects/{project}/locations/{location}/backups/{backup}`. */
  name: string;
}

export const GetProjectsLocationsBackupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsBackupsRequest>;

export type GetProjectsLocationsBackupsResponse = GoogleFirestoreAdminV1Backup;
export const GetProjectsLocationsBackupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleFirestoreAdminV1Backup;

export type GetProjectsLocationsBackupsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets information about a backup. */
export const getProjectsLocationsBackups: API.OperationMethod<
  GetProjectsLocationsBackupsRequest,
  GetProjectsLocationsBackupsResponse,
  GetProjectsLocationsBackupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsBackupsRequest,
  output: GetProjectsLocationsBackupsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsBackupsRequest {
  /** An expression that filters the list of returned backups. A filter expression consists of a field name, a comparison operator, and a value for filtering. The value must be a string, a number, or a boolean. The comparison operator must be one of: `<`, `>`, `<=`, `>=`, `!=`, `=`, or `:`. Colon `:` is the contains operator. Filter rules are not case sensitive. The following fields in the Backup are eligible for filtering: * `database_uid` (supports `=` only) */
  filter?: string;
  /** Required. The location to list backups from. Format is `projects/{project}/locations/{location}`. Use `{location} = '-'` to list backups from all locations for the given project. This allows listing backups from a single location or from all locations. */
  parent: string;
}

export const ListProjectsLocationsBackupsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/backups" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsBackupsRequest>;

export type ListProjectsLocationsBackupsResponse =
  GoogleFirestoreAdminV1ListBackupsResponse;
export const ListProjectsLocationsBackupsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleFirestoreAdminV1ListBackupsResponse;

export type ListProjectsLocationsBackupsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists all the backups. */
export const listProjectsLocationsBackups: API.OperationMethod<
  ListProjectsLocationsBackupsRequest,
  ListProjectsLocationsBackupsResponse,
  ListProjectsLocationsBackupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListProjectsLocationsBackupsRequest,
  output: ListProjectsLocationsBackupsResponse,
  errors: [NotFound, Forbidden],
}));

export interface BulkDeleteDocumentsProjectsDatabasesRequest {
  /** Required. Database to operate. Should be of the form: `projects/{project_id}/databases/{database_id}`. */
  name: string;
  /** Request body */
  body?: GoogleFirestoreAdminV1BulkDeleteDocumentsRequest;
}

export const BulkDeleteDocumentsProjectsDatabasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(
      GoogleFirestoreAdminV1BulkDeleteDocumentsRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+name}:bulkDeleteDocuments",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<BulkDeleteDocumentsProjectsDatabasesRequest>;

export type BulkDeleteDocumentsProjectsDatabasesResponse =
  GoogleLongrunningOperation;
export const BulkDeleteDocumentsProjectsDatabasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type BulkDeleteDocumentsProjectsDatabasesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Bulk deletes a subset of documents from Google Cloud Firestore. Documents created or updated after the underlying system starts to process the request will not be deleted. The bulk delete occurs in the background and its progress can be monitored and managed via the Operation resource that is created. For more details on bulk delete behavior, refer to: https://cloud.google.com/firestore/docs/manage-data/bulk-delete */
export const bulkDeleteDocumentsProjectsDatabases: API.OperationMethod<
  BulkDeleteDocumentsProjectsDatabasesRequest,
  BulkDeleteDocumentsProjectsDatabasesResponse,
  BulkDeleteDocumentsProjectsDatabasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BulkDeleteDocumentsProjectsDatabasesRequest,
  output: BulkDeleteDocumentsProjectsDatabasesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsDatabasesRequest {
  /** The current etag of the Database. If an etag is provided and does not match the current etag of the database, deletion will be blocked and a FAILED_PRECONDITION error will be returned. */
  etag?: string;
  /** Required. A name of the form `projects/{project_id}/databases/{database_id}` */
  name: string;
}

export const DeleteProjectsDatabasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    etag: Schema.optional(Schema.String).pipe(T.HttpQuery("etag")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsDatabasesRequest>;

export type DeleteProjectsDatabasesResponse = GoogleLongrunningOperation;
export const DeleteProjectsDatabasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type DeleteProjectsDatabasesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a database. */
export const deleteProjectsDatabases: API.OperationMethod<
  DeleteProjectsDatabasesRequest,
  DeleteProjectsDatabasesResponse,
  DeleteProjectsDatabasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsDatabasesRequest,
  output: DeleteProjectsDatabasesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ImportDocumentsProjectsDatabasesRequest {
  /** Required. Database to import into. Should be of the form: `projects/{project_id}/databases/{database_id}`. */
  name: string;
  /** Request body */
  body?: GoogleFirestoreAdminV1ImportDocumentsRequest;
}

export const ImportDocumentsProjectsDatabasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleFirestoreAdminV1ImportDocumentsRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+name}:importDocuments",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ImportDocumentsProjectsDatabasesRequest>;

export type ImportDocumentsProjectsDatabasesResponse =
  GoogleLongrunningOperation;
export const ImportDocumentsProjectsDatabasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type ImportDocumentsProjectsDatabasesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Imports documents into Google Cloud Firestore. Existing documents with the same name are overwritten. The import occurs in the background and its progress can be monitored and managed via the Operation resource that is created. If an ImportDocuments operation is cancelled, it is possible that a subset of the data has already been imported to Cloud Firestore. */
export const importDocumentsProjectsDatabases: API.OperationMethod<
  ImportDocumentsProjectsDatabasesRequest,
  ImportDocumentsProjectsDatabasesResponse,
  ImportDocumentsProjectsDatabasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ImportDocumentsProjectsDatabasesRequest,
  output: ImportDocumentsProjectsDatabasesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ExportDocumentsProjectsDatabasesRequest {
  /** Required. Database to export. Should be of the form: `projects/{project_id}/databases/{database_id}`. */
  name: string;
  /** Request body */
  body?: GoogleFirestoreAdminV1ExportDocumentsRequest;
}

export const ExportDocumentsProjectsDatabasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleFirestoreAdminV1ExportDocumentsRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+name}:exportDocuments",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ExportDocumentsProjectsDatabasesRequest>;

export type ExportDocumentsProjectsDatabasesResponse =
  GoogleLongrunningOperation;
export const ExportDocumentsProjectsDatabasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type ExportDocumentsProjectsDatabasesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Exports a copy of all or a subset of documents from Google Cloud Firestore to another storage system, such as Google Cloud Storage. Recent updates to documents may not be reflected in the export. The export occurs in the background and its progress can be monitored and managed via the Operation resource that is created. The output of an export may only be used once the associated operation is done. If an export operation is cancelled before completion it may leave partial data behind in Google Cloud Storage. For more details on export behavior and output format, refer to: https://cloud.google.com/firestore/docs/manage-data/export-import */
export const exportDocumentsProjectsDatabases: API.OperationMethod<
  ExportDocumentsProjectsDatabasesRequest,
  ExportDocumentsProjectsDatabasesResponse,
  ExportDocumentsProjectsDatabasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ExportDocumentsProjectsDatabasesRequest,
  output: ExportDocumentsProjectsDatabasesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsDatabasesRequest {
  /** Required. A parent name of the form `projects/{project_id}` */
  parent: string;
  /** Required. The ID to use for the database, which will become the final component of the database's resource name. This value should be 4-63 characters. Valid characters are /a-z-/ with first character a letter and the last a letter or a number. Must not be UUID-like /[0-9a-f]{8}(-[0-9a-f]{4}){3}-[0-9a-f]{12}/. "(default)" database ID is also valid if the database is Standard edition. */
  databaseId?: string;
  /** Request body */
  body?: GoogleFirestoreAdminV1Database;
}

export const CreateProjectsDatabasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    databaseId: Schema.optional(Schema.String).pipe(T.HttpQuery("databaseId")),
    body: Schema.optional(GoogleFirestoreAdminV1Database).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/databases", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsDatabasesRequest>;

export type CreateProjectsDatabasesResponse = GoogleLongrunningOperation;
export const CreateProjectsDatabasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type CreateProjectsDatabasesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Create a database. */
export const createProjectsDatabases: API.OperationMethod<
  CreateProjectsDatabasesRequest,
  CreateProjectsDatabasesResponse,
  CreateProjectsDatabasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsDatabasesRequest,
  output: CreateProjectsDatabasesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CloneProjectsDatabasesRequest {
  /** Required. The project to clone the database in. Format is `projects/{project_id}`. */
  parent: string;
  /** Request body */
  body?: GoogleFirestoreAdminV1CloneDatabaseRequest;
}

export const CloneProjectsDatabasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleFirestoreAdminV1CloneDatabaseRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/databases:clone",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CloneProjectsDatabasesRequest>;

export type CloneProjectsDatabasesResponse = GoogleLongrunningOperation;
export const CloneProjectsDatabasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type CloneProjectsDatabasesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new database by cloning an existing one. The new database must be in the same cloud region or multi-region location as the existing database. This behaves similar to FirestoreAdmin.CreateDatabase except instead of creating a new empty database, a new database is created with the database type, index configuration, and documents from an existing database. The long-running operation can be used to track the progress of the clone, with the Operation's metadata field type being the CloneDatabaseMetadata. The response type is the Database if the clone was successful. The new database is not readable or writeable until the LRO has completed. */
export const cloneProjectsDatabases: API.OperationMethod<
  CloneProjectsDatabasesRequest,
  CloneProjectsDatabasesResponse,
  CloneProjectsDatabasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CloneProjectsDatabasesRequest,
  output: CloneProjectsDatabasesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsDatabasesRequest {
  /** If true, also returns deleted resources. */
  showDeleted?: boolean;
  /** Required. A parent name of the form `projects/{project_id}` */
  parent: string;
}

export const ListProjectsDatabasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    showDeleted: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("showDeleted"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/databases" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsDatabasesRequest>;

export type ListProjectsDatabasesResponse =
  GoogleFirestoreAdminV1ListDatabasesResponse;
export const ListProjectsDatabasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleFirestoreAdminV1ListDatabasesResponse;

export type ListProjectsDatabasesError = DefaultErrors | NotFound | Forbidden;

/** List all the databases in the project. */
export const listProjectsDatabases: API.OperationMethod<
  ListProjectsDatabasesRequest,
  ListProjectsDatabasesResponse,
  ListProjectsDatabasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListProjectsDatabasesRequest,
  output: ListProjectsDatabasesResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchProjectsDatabasesRequest {
  /** The resource name of the Database. Format: `projects/{project}/databases/{database}` */
  name: string;
  /** The list of fields to be updated. */
  updateMask?: string;
  /** Request body */
  body?: GoogleFirestoreAdminV1Database;
}

export const PatchProjectsDatabasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleFirestoreAdminV1Database).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsDatabasesRequest>;

export type PatchProjectsDatabasesResponse = GoogleLongrunningOperation;
export const PatchProjectsDatabasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type PatchProjectsDatabasesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a database. */
export const patchProjectsDatabases: API.OperationMethod<
  PatchProjectsDatabasesRequest,
  PatchProjectsDatabasesResponse,
  PatchProjectsDatabasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsDatabasesRequest,
  output: PatchProjectsDatabasesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsDatabasesRequest {
  /** Required. A name of the form `projects/{project_id}/databases/{database_id}` */
  name: string;
}

export const GetProjectsDatabasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsDatabasesRequest>;

export type GetProjectsDatabasesResponse = GoogleFirestoreAdminV1Database;
export const GetProjectsDatabasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleFirestoreAdminV1Database;

export type GetProjectsDatabasesError = DefaultErrors | NotFound | Forbidden;

/** Gets information about a database. */
export const getProjectsDatabases: API.OperationMethod<
  GetProjectsDatabasesRequest,
  GetProjectsDatabasesResponse,
  GetProjectsDatabasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsDatabasesRequest,
  output: GetProjectsDatabasesResponse,
  errors: [NotFound, Forbidden],
}));

export interface RestoreProjectsDatabasesRequest {
  /** Required. The project to restore the database in. Format is `projects/{project_id}`. */
  parent: string;
  /** Request body */
  body?: GoogleFirestoreAdminV1RestoreDatabaseRequest;
}

export const RestoreProjectsDatabasesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleFirestoreAdminV1RestoreDatabaseRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/databases:restore",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<RestoreProjectsDatabasesRequest>;

export type RestoreProjectsDatabasesResponse = GoogleLongrunningOperation;
export const RestoreProjectsDatabasesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type RestoreProjectsDatabasesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new database by restoring from an existing backup. The new database must be in the same cloud region or multi-region location as the existing backup. This behaves similar to FirestoreAdmin.CreateDatabase except instead of creating a new empty database, a new database is created with the database type, index configuration, and documents from an existing backup. The long-running operation can be used to track the progress of the restore, with the Operation's metadata field type being the RestoreDatabaseMetadata. The response type is the Database if the restore was successful. The new database is not readable or writeable until the LRO has completed. */
export const restoreProjectsDatabases: API.OperationMethod<
  RestoreProjectsDatabasesRequest,
  RestoreProjectsDatabasesResponse,
  RestoreProjectsDatabasesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RestoreProjectsDatabasesRequest,
  output: RestoreProjectsDatabasesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsDatabasesCollectionGroupsFieldsRequest {
  /** Required. A field name of the form: `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}/fields/{field_path}` A field path can be a simple field name, e.g. `address` or a path to fields within `map_value` , e.g. `address.city`, or a special field path. The only valid special field is `*`, which represents any field. Field paths can be quoted using `` ` `` (backtick). The only character that must be escaped within a quoted field path is the backtick character itself, escaped using a backslash. Special characters in field paths that must be quoted include: `*`, `.`, `` ` `` (backtick), `[`, `]`, as well as any ascii symbolic characters. Examples: `` `address.city` `` represents a field named `address.city`, not the map key `city` in the field `address`. `` `*` `` represents a field named `*`, not any field. A special `Field` contains the default indexing settings for all fields. This field's resource name is: `projects/{project_id}/databases/{database_id}/collectionGroups/__default__/fields/*` Indexes defined on this `Field` will be applied to all fields which do not have their own `Field` index configuration. */
  name: string;
  /** A mask, relative to the field. If specified, only configuration specified by this field_mask will be updated in the field. */
  updateMask?: string;
  /** Request body */
  body?: GoogleFirestoreAdminV1Field;
}

export const PatchProjectsDatabasesCollectionGroupsFieldsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleFirestoreAdminV1Field).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsDatabasesCollectionGroupsFieldsRequest>;

export type PatchProjectsDatabasesCollectionGroupsFieldsResponse =
  GoogleLongrunningOperation;
export const PatchProjectsDatabasesCollectionGroupsFieldsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type PatchProjectsDatabasesCollectionGroupsFieldsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a field configuration. Currently, field updates apply only to single field index configuration. However, calls to FirestoreAdmin.UpdateField should provide a field mask to avoid changing any configuration that the caller isn't aware of. The field mask should be specified as: `{ paths: "index_config" }`. This call returns a google.longrunning.Operation which may be used to track the status of the field update. The metadata for the operation will be the type FieldOperationMetadata. To configure the default field settings for the database, use the special `Field` with resource name: `projects/{project_id}/databases/{database_id}/collectionGroups/__default__/fields/*`. */
export const patchProjectsDatabasesCollectionGroupsFields: API.OperationMethod<
  PatchProjectsDatabasesCollectionGroupsFieldsRequest,
  PatchProjectsDatabasesCollectionGroupsFieldsResponse,
  PatchProjectsDatabasesCollectionGroupsFieldsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsDatabasesCollectionGroupsFieldsRequest,
  output: PatchProjectsDatabasesCollectionGroupsFieldsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsDatabasesCollectionGroupsFieldsRequest {
  /** The filter to apply to list results. Currently, FirestoreAdmin.ListFields only supports listing fields that have been explicitly overridden. To issue this query, call FirestoreAdmin.ListFields with a filter that includes `indexConfig.usesAncestorConfig:false` or `ttlConfig:*`. */
  filter?: string;
  /** A page token, returned from a previous call to FirestoreAdmin.ListFields, that may be used to get the next page of results. */
  pageToken?: string;
  /** Required. A parent name of the form `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}` */
  parent: string;
  /** The number of results to return. */
  pageSize?: number;
}

export const ListProjectsDatabasesCollectionGroupsFieldsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/fields" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsDatabasesCollectionGroupsFieldsRequest>;

export type ListProjectsDatabasesCollectionGroupsFieldsResponse =
  GoogleFirestoreAdminV1ListFieldsResponse;
export const ListProjectsDatabasesCollectionGroupsFieldsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleFirestoreAdminV1ListFieldsResponse;

export type ListProjectsDatabasesCollectionGroupsFieldsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists the field configuration and metadata for this database. Currently, FirestoreAdmin.ListFields only supports listing fields that have been explicitly overridden. To issue this query, call FirestoreAdmin.ListFields with the filter set to `indexConfig.usesAncestorConfig:false` or `ttlConfig:*`. */
export const listProjectsDatabasesCollectionGroupsFields: API.PaginatedOperationMethod<
  ListProjectsDatabasesCollectionGroupsFieldsRequest,
  ListProjectsDatabasesCollectionGroupsFieldsResponse,
  ListProjectsDatabasesCollectionGroupsFieldsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsDatabasesCollectionGroupsFieldsRequest,
  output: ListProjectsDatabasesCollectionGroupsFieldsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsDatabasesCollectionGroupsFieldsRequest {
  /** Required. A name of the form `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}/fields/{field_id}` */
  name: string;
}

export const GetProjectsDatabasesCollectionGroupsFieldsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsDatabasesCollectionGroupsFieldsRequest>;

export type GetProjectsDatabasesCollectionGroupsFieldsResponse =
  GoogleFirestoreAdminV1Field;
export const GetProjectsDatabasesCollectionGroupsFieldsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleFirestoreAdminV1Field;

export type GetProjectsDatabasesCollectionGroupsFieldsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the metadata and configuration for a Field. */
export const getProjectsDatabasesCollectionGroupsFields: API.OperationMethod<
  GetProjectsDatabasesCollectionGroupsFieldsRequest,
  GetProjectsDatabasesCollectionGroupsFieldsResponse,
  GetProjectsDatabasesCollectionGroupsFieldsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsDatabasesCollectionGroupsFieldsRequest,
  output: GetProjectsDatabasesCollectionGroupsFieldsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetProjectsDatabasesCollectionGroupsIndexesRequest {
  /** Required. A name of the form `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}/indexes/{index_id}` */
  name: string;
}

export const GetProjectsDatabasesCollectionGroupsIndexesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsDatabasesCollectionGroupsIndexesRequest>;

export type GetProjectsDatabasesCollectionGroupsIndexesResponse =
  GoogleFirestoreAdminV1Index;
export const GetProjectsDatabasesCollectionGroupsIndexesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleFirestoreAdminV1Index;

export type GetProjectsDatabasesCollectionGroupsIndexesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a composite index. */
export const getProjectsDatabasesCollectionGroupsIndexes: API.OperationMethod<
  GetProjectsDatabasesCollectionGroupsIndexesRequest,
  GetProjectsDatabasesCollectionGroupsIndexesResponse,
  GetProjectsDatabasesCollectionGroupsIndexesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsDatabasesCollectionGroupsIndexesRequest,
  output: GetProjectsDatabasesCollectionGroupsIndexesResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsDatabasesCollectionGroupsIndexesRequest {
  /** Required. A name of the form `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}/indexes/{index_id}` */
  name: string;
}

export const DeleteProjectsDatabasesCollectionGroupsIndexesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsDatabasesCollectionGroupsIndexesRequest>;

export type DeleteProjectsDatabasesCollectionGroupsIndexesResponse = Empty;
export const DeleteProjectsDatabasesCollectionGroupsIndexesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsDatabasesCollectionGroupsIndexesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a composite index. */
export const deleteProjectsDatabasesCollectionGroupsIndexes: API.OperationMethod<
  DeleteProjectsDatabasesCollectionGroupsIndexesRequest,
  DeleteProjectsDatabasesCollectionGroupsIndexesResponse,
  DeleteProjectsDatabasesCollectionGroupsIndexesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsDatabasesCollectionGroupsIndexesRequest,
  output: DeleteProjectsDatabasesCollectionGroupsIndexesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsDatabasesCollectionGroupsIndexesRequest {
  /** Required. A parent name of the form `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}` */
  parent: string;
  /** Request body */
  body?: GoogleFirestoreAdminV1Index;
}

export const CreateProjectsDatabasesCollectionGroupsIndexesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleFirestoreAdminV1Index).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/indexes", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsDatabasesCollectionGroupsIndexesRequest>;

export type CreateProjectsDatabasesCollectionGroupsIndexesResponse =
  GoogleLongrunningOperation;
export const CreateProjectsDatabasesCollectionGroupsIndexesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type CreateProjectsDatabasesCollectionGroupsIndexesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a composite index. This returns a google.longrunning.Operation which may be used to track the status of the creation. The metadata for the operation will be the type IndexOperationMetadata. */
export const createProjectsDatabasesCollectionGroupsIndexes: API.OperationMethod<
  CreateProjectsDatabasesCollectionGroupsIndexesRequest,
  CreateProjectsDatabasesCollectionGroupsIndexesResponse,
  CreateProjectsDatabasesCollectionGroupsIndexesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsDatabasesCollectionGroupsIndexesRequest,
  output: CreateProjectsDatabasesCollectionGroupsIndexesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsDatabasesCollectionGroupsIndexesRequest {
  /** Required. A parent name of the form `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}` */
  parent: string;
  /** The number of results to return. */
  pageSize?: number;
  /** The filter to apply to list results. */
  filter?: string;
  /** A page token, returned from a previous call to FirestoreAdmin.ListIndexes, that may be used to get the next page of results. */
  pageToken?: string;
}

export const ListProjectsDatabasesCollectionGroupsIndexesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/indexes" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsDatabasesCollectionGroupsIndexesRequest>;

export type ListProjectsDatabasesCollectionGroupsIndexesResponse =
  GoogleFirestoreAdminV1ListIndexesResponse;
export const ListProjectsDatabasesCollectionGroupsIndexesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleFirestoreAdminV1ListIndexesResponse;

export type ListProjectsDatabasesCollectionGroupsIndexesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists composite indexes. */
export const listProjectsDatabasesCollectionGroupsIndexes: API.PaginatedOperationMethod<
  ListProjectsDatabasesCollectionGroupsIndexesRequest,
  ListProjectsDatabasesCollectionGroupsIndexesResponse,
  ListProjectsDatabasesCollectionGroupsIndexesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsDatabasesCollectionGroupsIndexesRequest,
  output: ListProjectsDatabasesCollectionGroupsIndexesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface ListProjectsDatabasesBackupSchedulesRequest {
  /** Required. The parent database. Format is `projects/{project}/databases/{database}`. */
  parent: string;
}

export const ListProjectsDatabasesBackupSchedulesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/backupSchedules" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsDatabasesBackupSchedulesRequest>;

export type ListProjectsDatabasesBackupSchedulesResponse =
  GoogleFirestoreAdminV1ListBackupSchedulesResponse;
export const ListProjectsDatabasesBackupSchedulesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleFirestoreAdminV1ListBackupSchedulesResponse;

export type ListProjectsDatabasesBackupSchedulesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** List backup schedules. */
export const listProjectsDatabasesBackupSchedules: API.OperationMethod<
  ListProjectsDatabasesBackupSchedulesRequest,
  ListProjectsDatabasesBackupSchedulesResponse,
  ListProjectsDatabasesBackupSchedulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListProjectsDatabasesBackupSchedulesRequest,
  output: ListProjectsDatabasesBackupSchedulesResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchProjectsDatabasesBackupSchedulesRequest {
  /** Output only. The unique backup schedule identifier across all locations and databases for the given project. This will be auto-assigned. Format is `projects/{project}/databases/{database}/backupSchedules/{backup_schedule}` */
  name: string;
  /** The list of fields to be updated. */
  updateMask?: string;
  /** Request body */
  body?: GoogleFirestoreAdminV1BackupSchedule;
}

export const PatchProjectsDatabasesBackupSchedulesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleFirestoreAdminV1BackupSchedule).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsDatabasesBackupSchedulesRequest>;

export type PatchProjectsDatabasesBackupSchedulesResponse =
  GoogleFirestoreAdminV1BackupSchedule;
export const PatchProjectsDatabasesBackupSchedulesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleFirestoreAdminV1BackupSchedule;

export type PatchProjectsDatabasesBackupSchedulesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a backup schedule. */
export const patchProjectsDatabasesBackupSchedules: API.OperationMethod<
  PatchProjectsDatabasesBackupSchedulesRequest,
  PatchProjectsDatabasesBackupSchedulesResponse,
  PatchProjectsDatabasesBackupSchedulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsDatabasesBackupSchedulesRequest,
  output: PatchProjectsDatabasesBackupSchedulesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsDatabasesBackupSchedulesRequest {
  /** Required. The name of the backup schedule. Format `projects/{project}/databases/{database}/backupSchedules/{backup_schedule}` */
  name: string;
}

export const DeleteProjectsDatabasesBackupSchedulesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsDatabasesBackupSchedulesRequest>;

export type DeleteProjectsDatabasesBackupSchedulesResponse = Empty;
export const DeleteProjectsDatabasesBackupSchedulesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsDatabasesBackupSchedulesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a backup schedule. */
export const deleteProjectsDatabasesBackupSchedules: API.OperationMethod<
  DeleteProjectsDatabasesBackupSchedulesRequest,
  DeleteProjectsDatabasesBackupSchedulesResponse,
  DeleteProjectsDatabasesBackupSchedulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsDatabasesBackupSchedulesRequest,
  output: DeleteProjectsDatabasesBackupSchedulesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsDatabasesBackupSchedulesRequest {
  /** Required. The name of the backup schedule. Format `projects/{project}/databases/{database}/backupSchedules/{backup_schedule}` */
  name: string;
}

export const GetProjectsDatabasesBackupSchedulesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsDatabasesBackupSchedulesRequest>;

export type GetProjectsDatabasesBackupSchedulesResponse =
  GoogleFirestoreAdminV1BackupSchedule;
export const GetProjectsDatabasesBackupSchedulesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleFirestoreAdminV1BackupSchedule;

export type GetProjectsDatabasesBackupSchedulesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets information about a backup schedule. */
export const getProjectsDatabasesBackupSchedules: API.OperationMethod<
  GetProjectsDatabasesBackupSchedulesRequest,
  GetProjectsDatabasesBackupSchedulesResponse,
  GetProjectsDatabasesBackupSchedulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsDatabasesBackupSchedulesRequest,
  output: GetProjectsDatabasesBackupSchedulesResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsDatabasesBackupSchedulesRequest {
  /** Required. The parent database. Format `projects/{project}/databases/{database}` */
  parent: string;
  /** Request body */
  body?: GoogleFirestoreAdminV1BackupSchedule;
}

export const CreateProjectsDatabasesBackupSchedulesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleFirestoreAdminV1BackupSchedule).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/backupSchedules",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsDatabasesBackupSchedulesRequest>;

export type CreateProjectsDatabasesBackupSchedulesResponse =
  GoogleFirestoreAdminV1BackupSchedule;
export const CreateProjectsDatabasesBackupSchedulesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleFirestoreAdminV1BackupSchedule;

export type CreateProjectsDatabasesBackupSchedulesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a backup schedule on a database. At most two backup schedules can be configured on a database, one daily backup schedule and one weekly backup schedule. */
export const createProjectsDatabasesBackupSchedules: API.OperationMethod<
  CreateProjectsDatabasesBackupSchedulesRequest,
  CreateProjectsDatabasesBackupSchedulesResponse,
  CreateProjectsDatabasesBackupSchedulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsDatabasesBackupSchedulesRequest,
  output: CreateProjectsDatabasesBackupSchedulesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsDatabasesOperationsRequest {
  /** The name of the operation resource to be deleted. */
  name: string;
}

export const DeleteProjectsDatabasesOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsDatabasesOperationsRequest>;

export type DeleteProjectsDatabasesOperationsResponse = Empty;
export const DeleteProjectsDatabasesOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsDatabasesOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. */
export const deleteProjectsDatabasesOperations: API.OperationMethod<
  DeleteProjectsDatabasesOperationsRequest,
  DeleteProjectsDatabasesOperationsResponse,
  DeleteProjectsDatabasesOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsDatabasesOperationsRequest,
  output: DeleteProjectsDatabasesOperationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsDatabasesOperationsRequest {
  /** The name of the operation resource. */
  name: string;
}

export const GetProjectsDatabasesOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsDatabasesOperationsRequest>;

export type GetProjectsDatabasesOperationsResponse = GoogleLongrunningOperation;
export const GetProjectsDatabasesOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type GetProjectsDatabasesOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service. */
export const getProjectsDatabasesOperations: API.OperationMethod<
  GetProjectsDatabasesOperationsRequest,
  GetProjectsDatabasesOperationsResponse,
  GetProjectsDatabasesOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsDatabasesOperationsRequest,
  output: GetProjectsDatabasesOperationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CancelProjectsDatabasesOperationsRequest {
  /** The name of the operation resource to be cancelled. */
  name: string;
  /** Request body */
  body?: GoogleLongrunningCancelOperationRequest;
}

export const CancelProjectsDatabasesOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleLongrunningCancelOperationRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:cancel", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CancelProjectsDatabasesOperationsRequest>;

export type CancelProjectsDatabasesOperationsResponse = Empty;
export const CancelProjectsDatabasesOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type CancelProjectsDatabasesOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`. */
export const cancelProjectsDatabasesOperations: API.OperationMethod<
  CancelProjectsDatabasesOperationsRequest,
  CancelProjectsDatabasesOperationsResponse,
  CancelProjectsDatabasesOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CancelProjectsDatabasesOperationsRequest,
  output: CancelProjectsDatabasesOperationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsDatabasesOperationsRequest {
  /** The standard list filter. */
  filter?: string;
  /** When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. */
  returnPartialSuccess?: boolean;
  /** The name of the operation's parent resource. */
  name: string;
  /** The standard list page size. */
  pageSize?: number;
  /** The standard list page token. */
  pageToken?: string;
}

export const ListProjectsDatabasesOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}/operations" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsDatabasesOperationsRequest>;

export type ListProjectsDatabasesOperationsResponse =
  GoogleLongrunningListOperationsResponse;
export const ListProjectsDatabasesOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningListOperationsResponse;

export type ListProjectsDatabasesOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. */
export const listProjectsDatabasesOperations: API.PaginatedOperationMethod<
  ListProjectsDatabasesOperationsRequest,
  ListProjectsDatabasesOperationsResponse,
  ListProjectsDatabasesOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsDatabasesOperationsRequest,
  output: ListProjectsDatabasesOperationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface EnableProjectsDatabasesUserCredsRequest {
  /** Required. A name of the form `projects/{project_id}/databases/{database_id}/userCreds/{user_creds_id}` */
  name: string;
  /** Request body */
  body?: GoogleFirestoreAdminV1EnableUserCredsRequest;
}

export const EnableProjectsDatabasesUserCredsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleFirestoreAdminV1EnableUserCredsRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:enable", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<EnableProjectsDatabasesUserCredsRequest>;

export type EnableProjectsDatabasesUserCredsResponse =
  GoogleFirestoreAdminV1UserCreds;
export const EnableProjectsDatabasesUserCredsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleFirestoreAdminV1UserCreds;

export type EnableProjectsDatabasesUserCredsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Enables a user creds. No-op if the user creds are already enabled. */
export const enableProjectsDatabasesUserCreds: API.OperationMethod<
  EnableProjectsDatabasesUserCredsRequest,
  EnableProjectsDatabasesUserCredsResponse,
  EnableProjectsDatabasesUserCredsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: EnableProjectsDatabasesUserCredsRequest,
  output: EnableProjectsDatabasesUserCredsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DisableProjectsDatabasesUserCredsRequest {
  /** Required. A name of the form `projects/{project_id}/databases/{database_id}/userCreds/{user_creds_id}` */
  name: string;
  /** Request body */
  body?: GoogleFirestoreAdminV1DisableUserCredsRequest;
}

export const DisableProjectsDatabasesUserCredsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleFirestoreAdminV1DisableUserCredsRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:disable", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<DisableProjectsDatabasesUserCredsRequest>;

export type DisableProjectsDatabasesUserCredsResponse =
  GoogleFirestoreAdminV1UserCreds;
export const DisableProjectsDatabasesUserCredsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleFirestoreAdminV1UserCreds;

export type DisableProjectsDatabasesUserCredsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Disables a user creds. No-op if the user creds are already disabled. */
export const disableProjectsDatabasesUserCreds: API.OperationMethod<
  DisableProjectsDatabasesUserCredsRequest,
  DisableProjectsDatabasesUserCredsResponse,
  DisableProjectsDatabasesUserCredsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DisableProjectsDatabasesUserCredsRequest,
  output: DisableProjectsDatabasesUserCredsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsDatabasesUserCredsRequest {
  /** Required. A name of the form `projects/{project_id}/databases/{database_id}/userCreds/{user_creds_id}` */
  name: string;
}

export const DeleteProjectsDatabasesUserCredsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsDatabasesUserCredsRequest>;

export type DeleteProjectsDatabasesUserCredsResponse = Empty;
export const DeleteProjectsDatabasesUserCredsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsDatabasesUserCredsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a user creds. */
export const deleteProjectsDatabasesUserCreds: API.OperationMethod<
  DeleteProjectsDatabasesUserCredsRequest,
  DeleteProjectsDatabasesUserCredsResponse,
  DeleteProjectsDatabasesUserCredsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsDatabasesUserCredsRequest,
  output: DeleteProjectsDatabasesUserCredsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsDatabasesUserCredsRequest {
  /** Required. A name of the form `projects/{project_id}/databases/{database_id}/userCreds/{user_creds_id}` */
  name: string;
}

export const GetProjectsDatabasesUserCredsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsDatabasesUserCredsRequest>;

export type GetProjectsDatabasesUserCredsResponse =
  GoogleFirestoreAdminV1UserCreds;
export const GetProjectsDatabasesUserCredsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleFirestoreAdminV1UserCreds;

export type GetProjectsDatabasesUserCredsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a user creds resource. Note that the returned resource does not contain the secret value itself. */
export const getProjectsDatabasesUserCreds: API.OperationMethod<
  GetProjectsDatabasesUserCredsRequest,
  GetProjectsDatabasesUserCredsResponse,
  GetProjectsDatabasesUserCredsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsDatabasesUserCredsRequest,
  output: GetProjectsDatabasesUserCredsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ResetPasswordProjectsDatabasesUserCredsRequest {
  /** Required. A name of the form `projects/{project_id}/databases/{database_id}/userCreds/{user_creds_id}` */
  name: string;
  /** Request body */
  body?: GoogleFirestoreAdminV1ResetUserPasswordRequest;
}

export const ResetPasswordProjectsDatabasesUserCredsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleFirestoreAdminV1ResetUserPasswordRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:resetPassword", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<ResetPasswordProjectsDatabasesUserCredsRequest>;

export type ResetPasswordProjectsDatabasesUserCredsResponse =
  GoogleFirestoreAdminV1UserCreds;
export const ResetPasswordProjectsDatabasesUserCredsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleFirestoreAdminV1UserCreds;

export type ResetPasswordProjectsDatabasesUserCredsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Resets the password of a user creds. */
export const resetPasswordProjectsDatabasesUserCreds: API.OperationMethod<
  ResetPasswordProjectsDatabasesUserCredsRequest,
  ResetPasswordProjectsDatabasesUserCredsResponse,
  ResetPasswordProjectsDatabasesUserCredsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ResetPasswordProjectsDatabasesUserCredsRequest,
  output: ResetPasswordProjectsDatabasesUserCredsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsDatabasesUserCredsRequest {
  /** Required. A parent database name of the form `projects/{project_id}/databases/{database_id}` */
  parent: string;
}

export const ListProjectsDatabasesUserCredsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/userCreds" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsDatabasesUserCredsRequest>;

export type ListProjectsDatabasesUserCredsResponse =
  GoogleFirestoreAdminV1ListUserCredsResponse;
export const ListProjectsDatabasesUserCredsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleFirestoreAdminV1ListUserCredsResponse;

export type ListProjectsDatabasesUserCredsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** List all user creds in the database. Note that the returned resource does not contain the secret value itself. */
export const listProjectsDatabasesUserCreds: API.OperationMethod<
  ListProjectsDatabasesUserCredsRequest,
  ListProjectsDatabasesUserCredsResponse,
  ListProjectsDatabasesUserCredsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListProjectsDatabasesUserCredsRequest,
  output: ListProjectsDatabasesUserCredsResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateProjectsDatabasesUserCredsRequest {
  /** Required. A parent name of the form `projects/{project_id}/databases/{database_id}` */
  parent: string;
  /** Required. The ID to use for the user creds, which will become the final component of the user creds's resource name. This value should be 4-63 characters. Valid characters are /a-z-/ with first character a letter and the last a letter or a number. Must not be UUID-like /[0-9a-f]{8}(-[0-9a-f]{4}){3}-[0-9a-f]{12}/. */
  userCredsId?: string;
  /** Request body */
  body?: GoogleFirestoreAdminV1UserCreds;
}

export const CreateProjectsDatabasesUserCredsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    userCredsId: Schema.optional(Schema.String).pipe(
      T.HttpQuery("userCredsId"),
    ),
    body: Schema.optional(GoogleFirestoreAdminV1UserCreds).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/userCreds", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsDatabasesUserCredsRequest>;

export type CreateProjectsDatabasesUserCredsResponse =
  GoogleFirestoreAdminV1UserCreds;
export const CreateProjectsDatabasesUserCredsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleFirestoreAdminV1UserCreds;

export type CreateProjectsDatabasesUserCredsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Create a user creds. */
export const createProjectsDatabasesUserCreds: API.OperationMethod<
  CreateProjectsDatabasesUserCredsRequest,
  CreateProjectsDatabasesUserCredsResponse,
  CreateProjectsDatabasesUserCredsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsDatabasesUserCredsRequest,
  output: CreateProjectsDatabasesUserCredsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsDatabasesDocumentsRequest {
  /** Optional. The optional ordering of the documents to return. For example: `priority desc, __name__ desc`. This mirrors the `ORDER BY` used in Firestore queries but in a string representation. When absent, documents are ordered based on `__name__ ASC`. */
  orderBy?: string;
  /** Optional. The maximum number of documents to return in a single response. Firestore may return fewer than this value. */
  pageSize?: number;
  /** Optional. The collection ID, relative to `parent`, to list. For example: `chatrooms` or `messages`. This is optional, and when not provided, Firestore will list documents from all collections under the provided `parent`. */
  collectionId: string;
  /** The list of field paths in the mask. See Document.fields for a field path syntax reference. */
  "mask.fieldPaths"?: string[];
  /** Perform the read as part of an already active transaction. */
  transaction?: string;
  /** Perform the read at the provided time. This must be a microsecond precision timestamp within the past one hour, or if Point-in-Time Recovery is enabled, can additionally be a whole minute timestamp within the past 7 days. */
  readTime?: string;
  /** If the list should show missing documents. A document is missing if it does not exist, but there are sub-documents nested underneath it. When true, such missing documents will be returned with a key but will not have fields, `create_time`, or `update_time` set. Requests with `show_missing` may not specify `where` or `order_by`. */
  showMissing?: boolean;
  /** Optional. A page token, received from a previous `ListDocuments` response. Provide this to retrieve the subsequent page. When paginating, all other parameters (with the exception of `page_size`) must match the values set in the request that generated the page token. */
  pageToken?: string;
  /** Required. The parent resource name. In the format: `projects/{project_id}/databases/{database_id}/documents` or `projects/{project_id}/databases/{database_id}/documents/{document_path}`. For example: `projects/my-project/databases/my-database/documents` or `projects/my-project/databases/my-database/documents/chatrooms/my-chatroom` */
  parent: string;
}

export const ListProjectsDatabasesDocumentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    collectionId: Schema.String.pipe(T.HttpPath("collectionId")),
    "mask.fieldPaths": Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("mask.fieldPaths"),
    ),
    transaction: Schema.optional(Schema.String).pipe(
      T.HttpQuery("transaction"),
    ),
    readTime: Schema.optional(Schema.String).pipe(T.HttpQuery("readTime")),
    showMissing: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("showMissing"),
    ),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/{collectionId}" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsDatabasesDocumentsRequest>;

export type ListProjectsDatabasesDocumentsResponse = ListDocumentsResponse;
export const ListProjectsDatabasesDocumentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListDocumentsResponse;

export type ListProjectsDatabasesDocumentsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists documents. */
export const listProjectsDatabasesDocuments: API.PaginatedOperationMethod<
  ListProjectsDatabasesDocumentsRequest,
  ListProjectsDatabasesDocumentsResponse,
  ListProjectsDatabasesDocumentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsDatabasesDocumentsRequest,
  output: ListProjectsDatabasesDocumentsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsDatabasesDocumentsRequest {
  /** The list of field paths in the mask. See Document.fields for a field path syntax reference. */
  "mask.fieldPaths"?: string[];
  /** Reads the document in a transaction. */
  transaction?: string;
  /** Reads the version of the document at the given time. This must be a microsecond precision timestamp within the past one hour, or if Point-in-Time Recovery is enabled, can additionally be a whole minute timestamp within the past 7 days. */
  readTime?: string;
  /** Required. The resource name of the Document to get. In the format: `projects/{project_id}/databases/{database_id}/documents/{document_path}`. */
  name: string;
}

export const GetProjectsDatabasesDocumentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    "mask.fieldPaths": Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("mask.fieldPaths"),
    ),
    transaction: Schema.optional(Schema.String).pipe(
      T.HttpQuery("transaction"),
    ),
    readTime: Schema.optional(Schema.String).pipe(T.HttpQuery("readTime")),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsDatabasesDocumentsRequest>;

export type GetProjectsDatabasesDocumentsResponse = Document;
export const GetProjectsDatabasesDocumentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Document;

export type GetProjectsDatabasesDocumentsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets a single document. */
export const getProjectsDatabasesDocuments: API.OperationMethod<
  GetProjectsDatabasesDocumentsRequest,
  GetProjectsDatabasesDocumentsResponse,
  GetProjectsDatabasesDocumentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsDatabasesDocumentsRequest,
  output: GetProjectsDatabasesDocumentsResponse,
  errors: [NotFound, Forbidden],
}));

export interface PartitionQueryProjectsDatabasesDocumentsRequest {
  /** Required. The parent resource name. In the format: `projects/{project_id}/databases/{database_id}/documents`. Document resource names are not supported; only database resource names can be specified. */
  parent: string;
  /** Request body */
  body?: PartitionQueryRequest;
}

export const PartitionQueryProjectsDatabasesDocumentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(PartitionQueryRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}:partitionQuery",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<PartitionQueryProjectsDatabasesDocumentsRequest>;

export type PartitionQueryProjectsDatabasesDocumentsResponse =
  PartitionQueryResponse;
export const PartitionQueryProjectsDatabasesDocumentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ PartitionQueryResponse;

export type PartitionQueryProjectsDatabasesDocumentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Partitions a query by returning partition cursors that can be used to run the query in parallel. The returned partition cursors are split points that can be used by RunQuery as starting/end points for the query results. */
export const partitionQueryProjectsDatabasesDocuments: API.OperationMethod<
  PartitionQueryProjectsDatabasesDocumentsRequest,
  PartitionQueryProjectsDatabasesDocumentsResponse,
  PartitionQueryProjectsDatabasesDocumentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PartitionQueryProjectsDatabasesDocumentsRequest,
  output: PartitionQueryProjectsDatabasesDocumentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListDocumentsProjectsDatabasesDocumentsRequest {
  /** Required. The parent resource name. In the format: `projects/{project_id}/databases/{database_id}/documents` or `projects/{project_id}/databases/{database_id}/documents/{document_path}`. For example: `projects/my-project/databases/my-database/documents` or `projects/my-project/databases/my-database/documents/chatrooms/my-chatroom` */
  parent: string;
  /** Optional. A page token, received from a previous `ListDocuments` response. Provide this to retrieve the subsequent page. When paginating, all other parameters (with the exception of `page_size`) must match the values set in the request that generated the page token. */
  pageToken?: string;
  /** The list of field paths in the mask. See Document.fields for a field path syntax reference. */
  "mask.fieldPaths"?: string[];
  /** Perform the read as part of an already active transaction. */
  transaction?: string;
  /** Perform the read at the provided time. This must be a microsecond precision timestamp within the past one hour, or if Point-in-Time Recovery is enabled, can additionally be a whole minute timestamp within the past 7 days. */
  readTime?: string;
  /** If the list should show missing documents. A document is missing if it does not exist, but there are sub-documents nested underneath it. When true, such missing documents will be returned with a key but will not have fields, `create_time`, or `update_time` set. Requests with `show_missing` may not specify `where` or `order_by`. */
  showMissing?: boolean;
  /** Optional. The optional ordering of the documents to return. For example: `priority desc, __name__ desc`. This mirrors the `ORDER BY` used in Firestore queries but in a string representation. When absent, documents are ordered based on `__name__ ASC`. */
  orderBy?: string;
  /** Optional. The collection ID, relative to `parent`, to list. For example: `chatrooms` or `messages`. This is optional, and when not provided, Firestore will list documents from all collections under the provided `parent`. */
  collectionId: string;
  /** Optional. The maximum number of documents to return in a single response. Firestore may return fewer than this value. */
  pageSize?: number;
}

export const ListDocumentsProjectsDatabasesDocumentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    "mask.fieldPaths": Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("mask.fieldPaths"),
    ),
    transaction: Schema.optional(Schema.String).pipe(
      T.HttpQuery("transaction"),
    ),
    readTime: Schema.optional(Schema.String).pipe(T.HttpQuery("readTime")),
    showMissing: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("showMissing"),
    ),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    collectionId: Schema.String.pipe(T.HttpPath("collectionId")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/{collectionId}" }),
    svc,
  ) as unknown as Schema.Schema<ListDocumentsProjectsDatabasesDocumentsRequest>;

export type ListDocumentsProjectsDatabasesDocumentsResponse =
  ListDocumentsResponse;
export const ListDocumentsProjectsDatabasesDocumentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListDocumentsResponse;

export type ListDocumentsProjectsDatabasesDocumentsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists documents. */
export const listDocumentsProjectsDatabasesDocuments: API.PaginatedOperationMethod<
  ListDocumentsProjectsDatabasesDocumentsRequest,
  ListDocumentsProjectsDatabasesDocumentsResponse,
  ListDocumentsProjectsDatabasesDocumentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListDocumentsProjectsDatabasesDocumentsRequest,
  output: ListDocumentsProjectsDatabasesDocumentsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface WriteProjectsDatabasesDocumentsRequest {
  /** Required. The database name. In the format: `projects/{project_id}/databases/{database_id}`. This is only required in the first message. */
  database: string;
  /** Request body */
  body?: WriteRequest;
}

export const WriteProjectsDatabasesDocumentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    database: Schema.String.pipe(T.HttpPath("database")),
    body: Schema.optional(WriteRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+database}/documents:write",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<WriteProjectsDatabasesDocumentsRequest>;

export type WriteProjectsDatabasesDocumentsResponse = WriteResponse;
export const WriteProjectsDatabasesDocumentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ WriteResponse;

export type WriteProjectsDatabasesDocumentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Streams batches of document updates and deletes, in order. This method is only available via gRPC or WebChannel (not REST). */
export const writeProjectsDatabasesDocuments: API.OperationMethod<
  WriteProjectsDatabasesDocumentsRequest,
  WriteProjectsDatabasesDocumentsResponse,
  WriteProjectsDatabasesDocumentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: WriteProjectsDatabasesDocumentsRequest,
  output: WriteProjectsDatabasesDocumentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface BatchWriteProjectsDatabasesDocumentsRequest {
  /** Required. The database name. In the format: `projects/{project_id}/databases/{database_id}`. */
  database: string;
  /** Request body */
  body?: BatchWriteRequest;
}

export const BatchWriteProjectsDatabasesDocumentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    database: Schema.String.pipe(T.HttpPath("database")),
    body: Schema.optional(BatchWriteRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+database}/documents:batchWrite",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<BatchWriteProjectsDatabasesDocumentsRequest>;

export type BatchWriteProjectsDatabasesDocumentsResponse = BatchWriteResponse;
export const BatchWriteProjectsDatabasesDocumentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ BatchWriteResponse;

export type BatchWriteProjectsDatabasesDocumentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Applies a batch of write operations. The BatchWrite method does not apply the write operations atomically and can apply them out of order. Method does not allow more than one write per document. Each write succeeds or fails independently. See the BatchWriteResponse for the success status of each write. If you require an atomically applied set of writes, use Commit instead. */
export const batchWriteProjectsDatabasesDocuments: API.OperationMethod<
  BatchWriteProjectsDatabasesDocumentsRequest,
  BatchWriteProjectsDatabasesDocumentsResponse,
  BatchWriteProjectsDatabasesDocumentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BatchWriteProjectsDatabasesDocumentsRequest,
  output: BatchWriteProjectsDatabasesDocumentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListenProjectsDatabasesDocumentsRequest {
  /** Required. The database name. In the format: `projects/{project_id}/databases/{database_id}`. */
  database: string;
  /** Request body */
  body?: ListenRequest;
}

export const ListenProjectsDatabasesDocumentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    database: Schema.String.pipe(T.HttpPath("database")),
    body: Schema.optional(ListenRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+database}/documents:listen",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ListenProjectsDatabasesDocumentsRequest>;

export type ListenProjectsDatabasesDocumentsResponse = ListenResponse;
export const ListenProjectsDatabasesDocumentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListenResponse;

export type ListenProjectsDatabasesDocumentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Listens to changes. This method is only available via gRPC or WebChannel (not REST). */
export const listenProjectsDatabasesDocuments: API.OperationMethod<
  ListenProjectsDatabasesDocumentsRequest,
  ListenProjectsDatabasesDocumentsResponse,
  ListenProjectsDatabasesDocumentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListenProjectsDatabasesDocumentsRequest,
  output: ListenProjectsDatabasesDocumentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsDatabasesDocumentsRequest {
  /** The resource name of the document, for example `projects/{project_id}/databases/{database_id}/documents/{document_path}`. */
  name: string;
  /** The list of field paths in the mask. See Document.fields for a field path syntax reference. */
  "updateMask.fieldPaths"?: string[];
  /** When set to `true`, the target document must exist. When set to `false`, the target document must not exist. */
  "currentDocument.exists"?: boolean;
  /** When set, the target document must exist and have been last updated at that time. Timestamp must be microsecond aligned. */
  "currentDocument.updateTime"?: string;
  /** The list of field paths in the mask. See Document.fields for a field path syntax reference. */
  "mask.fieldPaths"?: string[];
  /** Request body */
  body?: Document;
}

export const PatchProjectsDatabasesDocumentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    "updateMask.fieldPaths": Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("updateMask.fieldPaths"),
    ),
    "currentDocument.exists": Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("currentDocument.exists"),
    ),
    "currentDocument.updateTime": Schema.optional(Schema.String).pipe(
      T.HttpQuery("currentDocument.updateTime"),
    ),
    "mask.fieldPaths": Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("mask.fieldPaths"),
    ),
    body: Schema.optional(Document).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsDatabasesDocumentsRequest>;

export type PatchProjectsDatabasesDocumentsResponse = Document;
export const PatchProjectsDatabasesDocumentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Document;

export type PatchProjectsDatabasesDocumentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates or inserts a document. */
export const patchProjectsDatabasesDocuments: API.OperationMethod<
  PatchProjectsDatabasesDocumentsRequest,
  PatchProjectsDatabasesDocumentsResponse,
  PatchProjectsDatabasesDocumentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsDatabasesDocumentsRequest,
  output: PatchProjectsDatabasesDocumentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface RunAggregationQueryProjectsDatabasesDocumentsRequest {
  /** Required. The parent resource name. In the format: `projects/{project_id}/databases/{database_id}/documents` or `projects/{project_id}/databases/{database_id}/documents/{document_path}`. For example: `projects/my-project/databases/my-database/documents` or `projects/my-project/databases/my-database/documents/chatrooms/my-chatroom` */
  parent: string;
  /** Request body */
  body?: RunAggregationQueryRequest;
}

export const RunAggregationQueryProjectsDatabasesDocumentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(RunAggregationQueryRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}:runAggregationQuery",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<RunAggregationQueryProjectsDatabasesDocumentsRequest>;

export type RunAggregationQueryProjectsDatabasesDocumentsResponse =
  RunAggregationQueryResponse;
export const RunAggregationQueryProjectsDatabasesDocumentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ RunAggregationQueryResponse;

export type RunAggregationQueryProjectsDatabasesDocumentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Runs an aggregation query. Rather than producing Document results like Firestore.RunQuery, this API allows running an aggregation to produce a series of AggregationResult server-side. High-Level Example: ``` -- Return the number of documents in table given a filter. SELECT COUNT(*) FROM ( SELECT * FROM k where a = true ); ``` */
export const runAggregationQueryProjectsDatabasesDocuments: API.OperationMethod<
  RunAggregationQueryProjectsDatabasesDocumentsRequest,
  RunAggregationQueryProjectsDatabasesDocumentsResponse,
  RunAggregationQueryProjectsDatabasesDocumentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RunAggregationQueryProjectsDatabasesDocumentsRequest,
  output: RunAggregationQueryProjectsDatabasesDocumentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface RunQueryProjectsDatabasesDocumentsRequest {
  /** Required. The parent resource name. In the format: `projects/{project_id}/databases/{database_id}/documents` or `projects/{project_id}/databases/{database_id}/documents/{document_path}`. For example: `projects/my-project/databases/my-database/documents` or `projects/my-project/databases/my-database/documents/chatrooms/my-chatroom` */
  parent: string;
  /** Request body */
  body?: RunQueryRequest;
}

export const RunQueryProjectsDatabasesDocumentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(RunQueryRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}:runQuery", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<RunQueryProjectsDatabasesDocumentsRequest>;

export type RunQueryProjectsDatabasesDocumentsResponse = RunQueryResponse;
export const RunQueryProjectsDatabasesDocumentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ RunQueryResponse;

export type RunQueryProjectsDatabasesDocumentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Runs a query. */
export const runQueryProjectsDatabasesDocuments: API.OperationMethod<
  RunQueryProjectsDatabasesDocumentsRequest,
  RunQueryProjectsDatabasesDocumentsResponse,
  RunQueryProjectsDatabasesDocumentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RunQueryProjectsDatabasesDocumentsRequest,
  output: RunQueryProjectsDatabasesDocumentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ExecutePipelineProjectsDatabasesDocumentsRequest {
  /** Required. Database identifier, in the form `projects/{project}/databases/{database}`. */
  database: string;
  /** Request body */
  body?: ExecutePipelineRequest;
}

export const ExecutePipelineProjectsDatabasesDocumentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    database: Schema.String.pipe(T.HttpPath("database")),
    body: Schema.optional(ExecutePipelineRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+database}/documents:executePipeline",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ExecutePipelineProjectsDatabasesDocumentsRequest>;

export type ExecutePipelineProjectsDatabasesDocumentsResponse =
  ExecutePipelineResponse;
export const ExecutePipelineProjectsDatabasesDocumentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ExecutePipelineResponse;

export type ExecutePipelineProjectsDatabasesDocumentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Executes a pipeline query. */
export const executePipelineProjectsDatabasesDocuments: API.OperationMethod<
  ExecutePipelineProjectsDatabasesDocumentsRequest,
  ExecutePipelineProjectsDatabasesDocumentsResponse,
  ExecutePipelineProjectsDatabasesDocumentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ExecutePipelineProjectsDatabasesDocumentsRequest,
  output: ExecutePipelineProjectsDatabasesDocumentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface BeginTransactionProjectsDatabasesDocumentsRequest {
  /** Required. The database name. In the format: `projects/{project_id}/databases/{database_id}`. */
  database: string;
  /** Request body */
  body?: BeginTransactionRequest;
}

export const BeginTransactionProjectsDatabasesDocumentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    database: Schema.String.pipe(T.HttpPath("database")),
    body: Schema.optional(BeginTransactionRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+database}/documents:beginTransaction",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<BeginTransactionProjectsDatabasesDocumentsRequest>;

export type BeginTransactionProjectsDatabasesDocumentsResponse =
  BeginTransactionResponse;
export const BeginTransactionProjectsDatabasesDocumentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ BeginTransactionResponse;

export type BeginTransactionProjectsDatabasesDocumentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Starts a new transaction. */
export const beginTransactionProjectsDatabasesDocuments: API.OperationMethod<
  BeginTransactionProjectsDatabasesDocumentsRequest,
  BeginTransactionProjectsDatabasesDocumentsResponse,
  BeginTransactionProjectsDatabasesDocumentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BeginTransactionProjectsDatabasesDocumentsRequest,
  output: BeginTransactionProjectsDatabasesDocumentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CommitProjectsDatabasesDocumentsRequest {
  /** Required. The database name. In the format: `projects/{project_id}/databases/{database_id}`. */
  database: string;
  /** Request body */
  body?: CommitRequest;
}

export const CommitProjectsDatabasesDocumentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    database: Schema.String.pipe(T.HttpPath("database")),
    body: Schema.optional(CommitRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+database}/documents:commit",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CommitProjectsDatabasesDocumentsRequest>;

export type CommitProjectsDatabasesDocumentsResponse = CommitResponse;
export const CommitProjectsDatabasesDocumentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ CommitResponse;

export type CommitProjectsDatabasesDocumentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Commits a transaction, while optionally updating documents. */
export const commitProjectsDatabasesDocuments: API.OperationMethod<
  CommitProjectsDatabasesDocumentsRequest,
  CommitProjectsDatabasesDocumentsResponse,
  CommitProjectsDatabasesDocumentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CommitProjectsDatabasesDocumentsRequest,
  output: CommitProjectsDatabasesDocumentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteProjectsDatabasesDocumentsRequest {
  /** When set to `true`, the target document must exist. When set to `false`, the target document must not exist. */
  "currentDocument.exists"?: boolean;
  /** Required. The resource name of the Document to delete. In the format: `projects/{project_id}/databases/{database_id}/documents/{document_path}`. */
  name: string;
  /** When set, the target document must exist and have been last updated at that time. Timestamp must be microsecond aligned. */
  "currentDocument.updateTime"?: string;
}

export const DeleteProjectsDatabasesDocumentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    "currentDocument.exists": Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("currentDocument.exists"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
    "currentDocument.updateTime": Schema.optional(Schema.String).pipe(
      T.HttpQuery("currentDocument.updateTime"),
    ),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsDatabasesDocumentsRequest>;

export type DeleteProjectsDatabasesDocumentsResponse = Empty;
export const DeleteProjectsDatabasesDocumentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteProjectsDatabasesDocumentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a document. */
export const deleteProjectsDatabasesDocuments: API.OperationMethod<
  DeleteProjectsDatabasesDocumentsRequest,
  DeleteProjectsDatabasesDocumentsResponse,
  DeleteProjectsDatabasesDocumentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsDatabasesDocumentsRequest,
  output: DeleteProjectsDatabasesDocumentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListCollectionIdsProjectsDatabasesDocumentsRequest {
  /** Required. The parent document. In the format: `projects/{project_id}/databases/{database_id}/documents/{document_path}`. For example: `projects/my-project/databases/my-database/documents/chatrooms/my-chatroom` */
  parent: string;
  /** Request body */
  body?: ListCollectionIdsRequest;
}

export const ListCollectionIdsProjectsDatabasesDocumentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(ListCollectionIdsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}:listCollectionIds",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ListCollectionIdsProjectsDatabasesDocumentsRequest>;

export type ListCollectionIdsProjectsDatabasesDocumentsResponse =
  ListCollectionIdsResponse;
export const ListCollectionIdsProjectsDatabasesDocumentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListCollectionIdsResponse;

export type ListCollectionIdsProjectsDatabasesDocumentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Lists all the collection IDs underneath a document. */
export const listCollectionIdsProjectsDatabasesDocuments: API.OperationMethod<
  ListCollectionIdsProjectsDatabasesDocumentsRequest,
  ListCollectionIdsProjectsDatabasesDocumentsResponse,
  ListCollectionIdsProjectsDatabasesDocumentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListCollectionIdsProjectsDatabasesDocumentsRequest,
  output: ListCollectionIdsProjectsDatabasesDocumentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface BatchGetProjectsDatabasesDocumentsRequest {
  /** Required. The database name. In the format: `projects/{project_id}/databases/{database_id}`. */
  database: string;
  /** Request body */
  body?: BatchGetDocumentsRequest;
}

export const BatchGetProjectsDatabasesDocumentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    database: Schema.String.pipe(T.HttpPath("database")),
    body: Schema.optional(BatchGetDocumentsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+database}/documents:batchGet",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<BatchGetProjectsDatabasesDocumentsRequest>;

export type BatchGetProjectsDatabasesDocumentsResponse =
  BatchGetDocumentsResponse;
export const BatchGetProjectsDatabasesDocumentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ BatchGetDocumentsResponse;

export type BatchGetProjectsDatabasesDocumentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Gets multiple documents. Documents returned by this method are not guaranteed to be returned in the same order that they were requested. */
export const batchGetProjectsDatabasesDocuments: API.OperationMethod<
  BatchGetProjectsDatabasesDocumentsRequest,
  BatchGetProjectsDatabasesDocumentsResponse,
  BatchGetProjectsDatabasesDocumentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BatchGetProjectsDatabasesDocumentsRequest,
  output: BatchGetProjectsDatabasesDocumentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface RollbackProjectsDatabasesDocumentsRequest {
  /** Required. The database name. In the format: `projects/{project_id}/databases/{database_id}`. */
  database: string;
  /** Request body */
  body?: RollbackRequest;
}

export const RollbackProjectsDatabasesDocumentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    database: Schema.String.pipe(T.HttpPath("database")),
    body: Schema.optional(RollbackRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+database}/documents:rollback",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<RollbackProjectsDatabasesDocumentsRequest>;

export type RollbackProjectsDatabasesDocumentsResponse = Empty;
export const RollbackProjectsDatabasesDocumentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type RollbackProjectsDatabasesDocumentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Rolls back a transaction. */
export const rollbackProjectsDatabasesDocuments: API.OperationMethod<
  RollbackProjectsDatabasesDocumentsRequest,
  RollbackProjectsDatabasesDocumentsResponse,
  RollbackProjectsDatabasesDocumentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RollbackProjectsDatabasesDocumentsRequest,
  output: RollbackProjectsDatabasesDocumentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateDocumentProjectsDatabasesDocumentsRequest {
  /** The client-assigned document ID to use for this document. Optional. If not specified, an ID will be assigned by the service. */
  documentId?: string;
  /** The list of field paths in the mask. See Document.fields for a field path syntax reference. */
  "mask.fieldPaths"?: string[];
  /** Required. The collection ID, relative to `parent`, to list. For example: `chatrooms`. */
  collectionId: string;
  /** Required. The parent resource. For example: `projects/{project_id}/databases/{database_id}/documents` or `projects/{project_id}/databases/{database_id}/documents/chatrooms/{chatroom_id}` */
  parent: string;
  /** Request body */
  body?: Document;
}

export const CreateDocumentProjectsDatabasesDocumentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    documentId: Schema.optional(Schema.String).pipe(T.HttpQuery("documentId")),
    "mask.fieldPaths": Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("mask.fieldPaths"),
    ),
    collectionId: Schema.String.pipe(T.HttpPath("collectionId")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(Document).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/{collectionId}",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateDocumentProjectsDatabasesDocumentsRequest>;

export type CreateDocumentProjectsDatabasesDocumentsResponse = Document;
export const CreateDocumentProjectsDatabasesDocumentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Document;

export type CreateDocumentProjectsDatabasesDocumentsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new document. */
export const createDocumentProjectsDatabasesDocuments: API.OperationMethod<
  CreateDocumentProjectsDatabasesDocumentsRequest,
  CreateDocumentProjectsDatabasesDocumentsResponse,
  CreateDocumentProjectsDatabasesDocumentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateDocumentProjectsDatabasesDocumentsRequest,
  output: CreateDocumentProjectsDatabasesDocumentsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));
