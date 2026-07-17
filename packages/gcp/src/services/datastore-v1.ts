// ==========================================================================
// Cloud Datastore API (datastore v1)
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
  name: "datastore",
  version: "v1",
  rootUrl: "https://datastore.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface PropertyMask {
  /** The paths to the properties covered by this mask. A path is a list of property names separated by dots (`.`), for example `foo.bar` means the property `bar` inside the entity property `foo` inside the entity associated with this path. If a property name contains a dot `.` or a backslash `\`, then that name must be escaped. A path must not be empty, and may not reference a value inside an array value. */
  paths?: ReadonlyArray<string>;
}

export const PropertyMask: Schema.Codec<PropertyMask> =
  /*@__PURE__*/ Schema.Struct({
    paths: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "PropertyMask" });

export interface ExplainOptions {
  /** Optional. Whether to execute this query. When false (the default), the query will be planned, returning only metrics from the planning stages. When true, the query will be planned and executed, returning the full query results along with both planning and execution stage metrics. */
  analyze?: boolean;
}

export const ExplainOptions: Schema.Codec<ExplainOptions> =
  /*@__PURE__*/ Schema.Struct({
    analyze: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "ExplainOptions" });

export interface LatLng {
  /** The latitude in degrees. It must be in the range [-90.0, +90.0]. */
  latitude?: number;
  /** The longitude in degrees. It must be in the range [-180.0, +180.0]. */
  longitude?: number;
}

export const LatLng: Schema.Codec<LatLng> =
  /*@__PURE__*/ Schema.Struct({
    latitude: Schema.optional(Schema.Number),
    longitude: Schema.optional(Schema.Number),
  }).annotate({ identifier: "LatLng" });

export interface PartitionId {
  /** If not empty, the ID of the database to which the entities belong. */
  databaseId?: string;
  /** If not empty, the ID of the namespace to which the entities belong. */
  namespaceId?: string;
  /** The ID of the project to which the entities belong. */
  projectId?: string;
}

export const PartitionId: Schema.Codec<PartitionId> =
  /*@__PURE__*/ Schema.Struct({
    databaseId: Schema.optional(Schema.String),
    namespaceId: Schema.optional(Schema.String),
    projectId: Schema.optional(Schema.String),
  }).annotate({ identifier: "PartitionId" });

export interface PathElement {
  /** The kind of the entity. A kind matching regex `__.*__` is reserved/read-only. A kind must not contain more than 1500 bytes when UTF-8 encoded. Cannot be `""`. Must be valid UTF-8 bytes. Legacy values that are not valid UTF-8 are encoded as `__bytes__` where `` is the base-64 encoding of the bytes. */
  kind?: string;
  /** The name of the entity. A name matching regex `__.*__` is reserved/read-only. A name must not be more than 1500 bytes when UTF-8 encoded. Cannot be `""`. Must be valid UTF-8 bytes. Legacy values that are not valid UTF-8 are encoded as `__bytes__` where `` is the base-64 encoding of the bytes. */
  name?: string;
  /** The auto-allocated ID of the entity. Never equal to zero. Values less than zero are discouraged and may not be supported in the future. */
  id?: string;
}

export const PathElement: Schema.Codec<PathElement> =
  /*@__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
  }).annotate({ identifier: "PathElement" });

export interface Key {
  /** Entities are partitioned into subsets, currently identified by a project ID and namespace ID. Queries are scoped to a single partition. */
  partitionId?: PartitionId;
  /** The entity path. An entity path consists of one or more elements composed of a kind and a string or numerical identifier, which identify entities. The first element identifies a _root entity_, the second element identifies a _child_ of the root entity, the third element identifies a child of the second entity, and so forth. The entities identified by all prefixes of the path are called the element's _ancestors_. An entity path is always fully complete: *all* of the entity's ancestors are required to be in the path along with the entity identifier itself. The only exception is that in some documented cases, the identifier in the last path element (for the entity) itself may be omitted. For example, the last path element of the key of `Mutation.insert` may have no identifier. A path can never be empty, and a path can have at most 100 elements. */
  path?: ReadonlyArray<PathElement>;
}

export const Key: Schema.Codec<Key> = /*@__PURE__*/ Schema.Struct({
  partitionId: Schema.optional(PartitionId),
  path: Schema.optional(Schema.Array(PathElement)),
}).annotate({ identifier: "Key" });

export interface Entity {
  /** The entity's key. An entity must have a key, unless otherwise documented (for example, an entity in `Value.entity_value` may have no key). An entity's kind is its key path's last element's kind, or null if it has no key. */
  key?: Key;
  /** The entity's properties. The map's keys are property names. A property name matching regex `__.*__` is reserved. A reserved property name is forbidden in certain documented contexts. The map keys, represented as UTF-8, must not exceed 1,500 bytes and cannot be empty. */
  properties?: Record<string, Value>;
}

export const Entity: Schema.Codec<Entity> =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      key: Schema.optional(Key),
      properties: Schema.optional(Schema.Record(Schema.String, Value)),
    }),
  ).annotate({ identifier: "Entity" }) as any as Schema.Codec<Entity>;

export interface Value {
  /** A boolean value. */
  booleanValue?: boolean;
  /** A geo point value representing a point on the surface of Earth. */
  geoPointValue?: LatLng;
  /** The `meaning` field should only be populated for backwards compatibility. */
  meaning?: number;
  /** A timestamp value. When stored in the Datastore, precise only to microseconds; any additional precision is rounded down. */
  timestampValue?: string;
  /** A blob value. May have at most 1,000,000 bytes. When `exclude_from_indexes` is false, may have at most 1500 bytes. In JSON requests, must be base64-encoded. */
  blobValue?: string;
  /** An array value. Cannot contain another array value. A `Value` instance that sets field `array_value` must not set fields `meaning` or `exclude_from_indexes`. */
  arrayValue?: ArrayValue;
  /** An integer value. */
  integerValue?: string;
  /** If the value should be excluded from all indexes including those defined explicitly. */
  excludeFromIndexes?: boolean;
  /** A key value. */
  keyValue?: Key;
  /** An entity value. - May have no key. - May have a key with an incomplete key path. - May have a reserved/read-only key. */
  entityValue?: Entity;
  /** A UTF-8 encoded string value. When `exclude_from_indexes` is false (it is indexed) , may have at most 1500 bytes. Otherwise, may be set to at most 1,000,000 bytes. */
  stringValue?: string;
  /** A null value. */
  nullValue?: "NULL_VALUE" | (string & {});
  /** A double value. */
  doubleValue?: number;
}

export const Value: Schema.Codec<Value> =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      booleanValue: Schema.optional(Schema.Boolean),
      geoPointValue: Schema.optional(LatLng),
      meaning: Schema.optional(Schema.Number),
      timestampValue: Schema.optional(Schema.String),
      blobValue: Schema.optional(Schema.String),
      arrayValue: Schema.optional(ArrayValue),
      integerValue: Schema.optional(Schema.String),
      excludeFromIndexes: Schema.optional(Schema.Boolean),
      keyValue: Schema.optional(Key),
      entityValue: Schema.optional(Entity),
      stringValue: Schema.optional(Schema.String),
      nullValue: Schema.optional(Schema.String),
      doubleValue: Schema.optional(Schema.Number),
    }),
  ).annotate({ identifier: "Value" }) as any as Schema.Codec<Value>;

export interface ArrayValue {
  /** Values in the array. The order of values in an array is preserved as long as all values have identical settings for 'exclude_from_indexes'. */
  values?: ReadonlyArray<Value>;
}

export const ArrayValue: Schema.Codec<ArrayValue> =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      values: Schema.optional(Schema.Array(Value)),
    }),
  ).annotate({ identifier: "ArrayValue" }) as any as Schema.Codec<ArrayValue>;

export interface PropertyReference {
  /** A reference to a property. Requires: * MUST be a dot-delimited (`.`) string of segments, where each segment conforms to entity property name limitations. */
  name?: string;
}

export const PropertyReference: Schema.Codec<PropertyReference> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "PropertyReference" });

export interface Sum {
  /** The property to aggregate on. */
  property?: PropertyReference;
}

export const Sum: Schema.Codec<Sum> = /*@__PURE__*/ Schema.Struct({
  property: Schema.optional(PropertyReference),
}).annotate({ identifier: "Sum" });

export interface Avg {
  /** The property to aggregate on. */
  property?: PropertyReference;
}

export const Avg: Schema.Codec<Avg> = /*@__PURE__*/ Schema.Struct({
  property: Schema.optional(PropertyReference),
}).annotate({ identifier: "Avg" });

export interface Count {
  /** Optional. Optional constraint on the maximum number of entities to count. This provides a way to set an upper bound on the number of entities to scan, limiting latency, and cost. Unspecified is interpreted as no bound. If a zero value is provided, a count result of zero should always be expected. High-Level Example: ``` AGGREGATE COUNT_UP_TO(1000) OVER ( SELECT * FROM k ); ``` Requires: * Must be non-negative when present. */
  upTo?: string;
}

export const Count: Schema.Codec<Count> =
  /*@__PURE__*/ Schema.Struct({
    upTo: Schema.optional(Schema.String),
  }).annotate({ identifier: "Count" });

export interface Aggregation {
  /** Sum aggregator. */
  sum?: Sum;
  /** Average aggregator. */
  avg?: Avg;
  /** Count aggregator. */
  count?: Count;
  /** Optional. Optional name of the property to store the result of the aggregation. If not provided, Datastore will pick a default name following the format `property_`. For example: ``` AGGREGATE COUNT_UP_TO(1) AS count_up_to_1, COUNT_UP_TO(2), COUNT_UP_TO(3) AS count_up_to_3, COUNT(*) OVER ( ... ); ``` becomes: ``` AGGREGATE COUNT_UP_TO(1) AS count_up_to_1, COUNT_UP_TO(2) AS property_1, COUNT_UP_TO(3) AS count_up_to_3, COUNT(*) AS property_2 OVER ( ... ); ``` Requires: * Must be unique across all aggregation aliases. * Conform to entity property name limitations. */
  alias?: string;
}

export const Aggregation: Schema.Codec<Aggregation> =
  /*@__PURE__*/ Schema.Struct({
    sum: Schema.optional(Sum),
    avg: Schema.optional(Avg),
    count: Schema.optional(Count),
    alias: Schema.optional(Schema.String),
  }).annotate({ identifier: "Aggregation" });

export interface GoogleDatastoreAdminV1CommonMetadata {
  /** The client-assigned labels which were provided when the operation was created. May also include additional labels. */
  labels?: Record<string, string>;
  /** The current state of the Operation. */
  state?:
    | "STATE_UNSPECIFIED"
    | "INITIALIZING"
    | "PROCESSING"
    | "CANCELLING"
    | "FINALIZING"
    | "SUCCESSFUL"
    | "FAILED"
    | "CANCELLED"
    | (string & {});
  /** The time the operation ended, either successfully or otherwise. */
  endTime?: string;
  /** The time that work began on the operation. */
  startTime?: string;
  /** The type of the operation. Can be used as a filter in ListOperationsRequest. */
  operationType?:
    | "OPERATION_TYPE_UNSPECIFIED"
    | "EXPORT_ENTITIES"
    | "IMPORT_ENTITIES"
    | "CREATE_INDEX"
    | "DELETE_INDEX"
    | (string & {});
}

export const GoogleDatastoreAdminV1CommonMetadata: Schema.Codec<GoogleDatastoreAdminV1CommonMetadata> =
  /*@__PURE__*/ Schema.Struct({
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    state: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
    operationType: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleDatastoreAdminV1CommonMetadata" });

export interface Status {
  /** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
  details?: ReadonlyArray<Record<string, unknown>>;
  /** The status code, which should be an enum value of google.rpc.Code. */
  code?: number;
  /** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
  message?: string;
}

export const Status: Schema.Codec<Status> =
  /*@__PURE__*/ Schema.Struct({
    details: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
    code: Schema.optional(Schema.Number),
    message: Schema.optional(Schema.String),
  }).annotate({ identifier: "Status" });

export interface GoogleLongrunningOperation {
  /** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
  done?: boolean;
  /** The error result of the operation in case of failure or cancellation. */
  error?: Status;
  /** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
  response?: Record<string, unknown>;
  /** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
  name?: string;
  /** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
  metadata?: Record<string, unknown>;
}

export const GoogleLongrunningOperation: Schema.Codec<GoogleLongrunningOperation> =
  /*@__PURE__*/ Schema.Struct({
    done: Schema.optional(Schema.Boolean),
    error: Schema.optional(Status),
    response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    name: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "GoogleLongrunningOperation" });

export interface GoogleLongrunningListOperationsResponse {
  /** The standard List next-page token. */
  nextPageToken?: string;
  /** A list of operations that matches the specified filter in the request. */
  operations?: ReadonlyArray<GoogleLongrunningOperation>;
  /** Unordered list. Unreachable resources. Populated when the request sets `ListOperationsRequest.return_partial_success` and reads across collections. For example, when attempting to list all resources across all supported locations. */
  unreachable?: ReadonlyArray<string>;
}

export const GoogleLongrunningListOperationsResponse: Schema.Codec<GoogleLongrunningListOperationsResponse> =
  /*@__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    operations: Schema.optional(Schema.Array(GoogleLongrunningOperation)),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleLongrunningListOperationsResponse" });

export interface KindExpression {
  /** The name of the kind. */
  name?: string;
}

export const KindExpression: Schema.Codec<KindExpression> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "KindExpression" });

export interface GqlQueryParameter {
  /** A value parameter. */
  value?: Value;
  /** A query cursor. Query cursors are returned in query result batches. */
  cursor?: string;
}

export const GqlQueryParameter: Schema.Codec<GqlQueryParameter> =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(Value),
    cursor: Schema.optional(Schema.String),
  }).annotate({ identifier: "GqlQueryParameter" });

export interface GqlQuery {
  /** A string of the format described [here](https://cloud.google.com/datastore/docs/apis/gql/gql_reference). */
  queryString?: string;
  /** Numbered binding site @1 references the first numbered parameter, effectively using 1-based indexing, rather than the usual 0. For each binding site numbered i in `query_string`, there must be an i-th numbered parameter. The inverse must also be true. */
  positionalBindings?: ReadonlyArray<GqlQueryParameter>;
  /** When false, the query string must not contain any literals and instead must bind all values. For example, `SELECT * FROM Kind WHERE a = 'string literal'` is not allowed, while `SELECT * FROM Kind WHERE a = @value` is. */
  allowLiterals?: boolean;
  /** For each non-reserved named binding site in the query string, there must be a named parameter with that name, but not necessarily the inverse. Key must match regex `A-Za-z_$*`, must not match regex `__.*__`, and must not be `""`. */
  namedBindings?: Record<string, GqlQueryParameter>;
}

export const GqlQuery: Schema.Codec<GqlQuery> =
  /*@__PURE__*/ Schema.Struct({
    queryString: Schema.optional(Schema.String),
    positionalBindings: Schema.optional(Schema.Array(GqlQueryParameter)),
    allowLiterals: Schema.optional(Schema.Boolean),
    namedBindings: Schema.optional(
      Schema.Record(Schema.String, GqlQueryParameter),
    ),
  }).annotate({ identifier: "GqlQuery" });

export interface ReadOnly {
  /** Reads entities at the given time. This must be a microsecond precision timestamp within the past one hour, or if Point-in-Time Recovery is enabled, can additionally be a whole minute timestamp within the past 7 days. */
  readTime?: string;
}

export const ReadOnly: Schema.Codec<ReadOnly> =
  /*@__PURE__*/ Schema.Struct({
    readTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "ReadOnly" });

export interface ReadWrite {
  /** The transaction identifier of the transaction being retried. */
  previousTransaction?: string;
}

export const ReadWrite: Schema.Codec<ReadWrite> =
  /*@__PURE__*/ Schema.Struct({
    previousTransaction: Schema.optional(Schema.String),
  }).annotate({ identifier: "ReadWrite" });

export interface TransactionOptions {
  /** The transaction should only allow reads. */
  readOnly?: ReadOnly;
  /** The transaction should allow both reads and writes. */
  readWrite?: ReadWrite;
}

export const TransactionOptions: Schema.Codec<TransactionOptions> =
  /*@__PURE__*/ Schema.Struct({
    readOnly: Schema.optional(ReadOnly),
    readWrite: Schema.optional(ReadWrite),
  }).annotate({ identifier: "TransactionOptions" });

export interface ReadOptions {
  /** Reads entities as they were at the given time. This value is only supported for Cloud Firestore in Datastore mode. This must be a microsecond precision timestamp within the past one hour, or if Point-in-Time Recovery is enabled, can additionally be a whole minute timestamp within the past 7 days. */
  readTime?: string;
  /** The identifier of the transaction in which to read. A transaction identifier is returned by a call to Datastore.BeginTransaction. */
  transaction?: string;
  /** The non-transactional read consistency to use. */
  readConsistency?:
    | "READ_CONSISTENCY_UNSPECIFIED"
    | "STRONG"
    | "EVENTUAL"
    | (string & {});
  /** Options for beginning a new transaction for this request. The new transaction identifier will be returned in the corresponding response as either LookupResponse.transaction or RunQueryResponse.transaction. */
  newTransaction?: TransactionOptions;
}

export const ReadOptions: Schema.Codec<ReadOptions> =
  /*@__PURE__*/ Schema.Struct({
    readTime: Schema.optional(Schema.String),
    transaction: Schema.optional(Schema.String),
    readConsistency: Schema.optional(Schema.String),
    newTransaction: Schema.optional(TransactionOptions),
  }).annotate({ identifier: "ReadOptions" });

export interface GoogleDatastoreAdminV1PrepareStepDetails {
  /** The concurrency mode this database will use when it reaches the `REDIRECT_WRITES` step. */
  concurrencyMode?:
    | "CONCURRENCY_MODE_UNSPECIFIED"
    | "PESSIMISTIC"
    | "OPTIMISTIC"
    | "OPTIMISTIC_WITH_ENTITY_GROUPS"
    | (string & {});
}

export const GoogleDatastoreAdminV1PrepareStepDetails: Schema.Codec<GoogleDatastoreAdminV1PrepareStepDetails> =
  /*@__PURE__*/ Schema.Struct({
    concurrencyMode: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleDatastoreAdminV1PrepareStepDetails" });

export interface GoogleDatastoreAdminV1Progress {
  /** The amount of work that has been completed. Note that this may be greater than work_estimated. */
  workCompleted?: string;
  /** An estimate of how much work needs to be performed. May be zero if the work estimate is unavailable. */
  workEstimated?: string;
}

export const GoogleDatastoreAdminV1Progress: Schema.Codec<GoogleDatastoreAdminV1Progress> =
  /*@__PURE__*/ Schema.Struct({
    workCompleted: Schema.optional(Schema.String),
    workEstimated: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleDatastoreAdminV1Progress" });

export interface GoogleDatastoreAdminV1EntityFilter {
  /** An empty list represents all namespaces. This is the preferred usage for projects that don't use namespaces. An empty string element represents the default namespace. This should be used if the project has data in non-default namespaces, but doesn't want to include them. Each namespace in this list must be unique. */
  namespaceIds?: ReadonlyArray<string>;
  /** If empty, then this represents all kinds. */
  kinds?: ReadonlyArray<string>;
}

export const GoogleDatastoreAdminV1EntityFilter: Schema.Codec<GoogleDatastoreAdminV1EntityFilter> =
  /*@__PURE__*/ Schema.Struct({
    namespaceIds: Schema.optional(Schema.Array(Schema.String)),
    kinds: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleDatastoreAdminV1EntityFilter" });

export interface GoogleDatastoreAdminV1ExportEntitiesMetadata {
  /** An estimate of the number of bytes processed. */
  progressBytes?: GoogleDatastoreAdminV1Progress;
  /** Description of which entities are being exported. */
  entityFilter?: GoogleDatastoreAdminV1EntityFilter;
  /** Location for the export metadata and data files. This will be the same value as the google.datastore.admin.v1.ExportEntitiesRequest.output_url_prefix field. The final output location is provided in google.datastore.admin.v1.ExportEntitiesResponse.output_url. */
  outputUrlPrefix?: string;
  /** An estimate of the number of entities processed. */
  progressEntities?: GoogleDatastoreAdminV1Progress;
  /** Metadata common to all Datastore Admin operations. */
  common?: GoogleDatastoreAdminV1CommonMetadata;
}

export const GoogleDatastoreAdminV1ExportEntitiesMetadata: Schema.Codec<GoogleDatastoreAdminV1ExportEntitiesMetadata> =
  /*@__PURE__*/ Schema.Struct({
    progressBytes: Schema.optional(GoogleDatastoreAdminV1Progress),
    entityFilter: Schema.optional(GoogleDatastoreAdminV1EntityFilter),
    outputUrlPrefix: Schema.optional(Schema.String),
    progressEntities: Schema.optional(GoogleDatastoreAdminV1Progress),
    common: Schema.optional(GoogleDatastoreAdminV1CommonMetadata),
  }).annotate({ identifier: "GoogleDatastoreAdminV1ExportEntitiesMetadata" });

export interface GoogleDatastoreAdminV1RedirectWritesStepDetails {
  /** The concurrency mode for this database. */
  concurrencyMode?:
    | "CONCURRENCY_MODE_UNSPECIFIED"
    | "PESSIMISTIC"
    | "OPTIMISTIC"
    | "OPTIMISTIC_WITH_ENTITY_GROUPS"
    | (string & {});
}

export const GoogleDatastoreAdminV1RedirectWritesStepDetails: Schema.Codec<GoogleDatastoreAdminV1RedirectWritesStepDetails> =
  /*@__PURE__*/ Schema.Struct({
    concurrencyMode: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleDatastoreAdminV1RedirectWritesStepDetails",
  });

export interface GoogleDatastoreAdminV1MigrationProgressEvent {
  /** Details for the `REDIRECT_WRITES` step. */
  redirectWritesStepDetails?: GoogleDatastoreAdminV1RedirectWritesStepDetails;
  /** The step that is starting. An event with step set to `START` indicates that the migration has been reverted back to the initial pre-migration state. */
  step?:
    | "MIGRATION_STEP_UNSPECIFIED"
    | "PREPARE"
    | "START"
    | "APPLY_WRITES_SYNCHRONOUSLY"
    | "COPY_AND_VERIFY"
    | "REDIRECT_EVENTUALLY_CONSISTENT_READS"
    | "REDIRECT_STRONGLY_CONSISTENT_READS"
    | "REDIRECT_WRITES"
    | (string & {});
  /** Details for the `PREPARE` step. */
  prepareStepDetails?: GoogleDatastoreAdminV1PrepareStepDetails;
}

export const GoogleDatastoreAdminV1MigrationProgressEvent: Schema.Codec<GoogleDatastoreAdminV1MigrationProgressEvent> =
  /*@__PURE__*/ Schema.Struct({
    redirectWritesStepDetails: Schema.optional(
      GoogleDatastoreAdminV1RedirectWritesStepDetails,
    ),
    step: Schema.optional(Schema.String),
    prepareStepDetails: Schema.optional(
      GoogleDatastoreAdminV1PrepareStepDetails,
    ),
  }).annotate({ identifier: "GoogleDatastoreAdminV1MigrationProgressEvent" });

export interface PropertyFilter {
  /** The property to filter by. */
  property?: PropertyReference;
  /** The operator to filter by. */
  op?:
    | "OPERATOR_UNSPECIFIED"
    | "LESS_THAN"
    | "LESS_THAN_OR_EQUAL"
    | "GREATER_THAN"
    | "GREATER_THAN_OR_EQUAL"
    | "EQUAL"
    | "IN"
    | "NOT_EQUAL"
    | "HAS_ANCESTOR"
    | "NOT_IN"
    | (string & {});
  /** The value to compare the property to. */
  value?: Value;
}

export const PropertyFilter: Schema.Codec<PropertyFilter> =
  /*@__PURE__*/ Schema.Struct({
    property: Schema.optional(PropertyReference),
    op: Schema.optional(Schema.String),
    value: Schema.optional(Value),
  }).annotate({ identifier: "PropertyFilter" });

export interface Filter {
  /** A composite filter. */
  compositeFilter?: CompositeFilter;
  /** A filter on a property. */
  propertyFilter?: PropertyFilter;
}

export const Filter: Schema.Codec<Filter> =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      compositeFilter: Schema.optional(CompositeFilter),
      propertyFilter: Schema.optional(PropertyFilter),
    }),
  ).annotate({ identifier: "Filter" }) as any as Schema.Codec<Filter>;

export interface CompositeFilter {
  /** The operator for combining multiple filters. */
  op?: "OPERATOR_UNSPECIFIED" | "AND" | "OR" | (string & {});
  /** The list of filters to combine. Requires: * At least one filter is present. */
  filters?: ReadonlyArray<Filter>;
}

export const CompositeFilter: Schema.Codec<CompositeFilter> =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      op: Schema.optional(Schema.String),
      filters: Schema.optional(Schema.Array(Filter)),
    }),
  ).annotate({
    identifier: "CompositeFilter",
  }) as any as Schema.Codec<CompositeFilter>;

export interface PlanSummary {
  /** The indexes selected for the query. For example: [ {"query_scope": "Collection", "properties": "(foo ASC, __name__ ASC)"}, {"query_scope": "Collection", "properties": "(bar ASC, __name__ ASC)"} ] */
  indexesUsed?: ReadonlyArray<Record<string, unknown>>;
}

export const PlanSummary: Schema.Codec<PlanSummary> =
  /*@__PURE__*/ Schema.Struct({
    indexesUsed: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
  }).annotate({ identifier: "PlanSummary" });

export interface EntityResult {
  /** The time at which the entity was last changed. This field is set for `FULL` entity results. If this entity is missing, this field will not be set. */
  updateTime?: string;
  /** The version of the entity, a strictly positive number that monotonically increases with changes to the entity. This field is set for `FULL` entity results. For missing entities in `LookupResponse`, this is the version of the snapshot that was used to look up the entity, and it is always set except for eventually consistent reads. */
  version?: string;
  /** The time at which the entity was created. This field is set for `FULL` entity results. If this entity is missing, this field will not be set. */
  createTime?: string;
  /** A cursor that points to the position after the result entity. Set only when the `EntityResult` is part of a `QueryResultBatch` message. */
  cursor?: string;
  /** The resulting entity. */
  entity?: Entity;
}

export const EntityResult: Schema.Codec<EntityResult> =
  /*@__PURE__*/ Schema.Struct({
    updateTime: Schema.optional(Schema.String),
    version: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    cursor: Schema.optional(Schema.String),
    entity: Schema.optional(Entity),
  }).annotate({ identifier: "EntityResult" });

export interface LookupResponse {
  /** The time at which these entities were read or found missing. */
  readTime?: string;
  /** Entities found as `ResultType.FULL` entities. The order of results in this field is undefined and has no relation to the order of the keys in the input. */
  found?: ReadonlyArray<EntityResult>;
  /** The identifier of the transaction that was started as part of this Lookup request. Set only when ReadOptions.new_transaction was set in LookupRequest.read_options. */
  transaction?: string;
  /** A list of keys that were not looked up due to resource constraints. The order of results in this field is undefined and has no relation to the order of the keys in the input. */
  deferred?: ReadonlyArray<Key>;
  /** Entities not found as `ResultType.KEY_ONLY` entities. The order of results in this field is undefined and has no relation to the order of the keys in the input. */
  missing?: ReadonlyArray<EntityResult>;
}

export const LookupResponse: Schema.Codec<LookupResponse> =
  /*@__PURE__*/ Schema.Struct({
    readTime: Schema.optional(Schema.String),
    found: Schema.optional(Schema.Array(EntityResult)),
    transaction: Schema.optional(Schema.String),
    deferred: Schema.optional(Schema.Array(Key)),
    missing: Schema.optional(Schema.Array(EntityResult)),
  }).annotate({ identifier: "LookupResponse" });

export interface AggregationResult {
  /** The result of the aggregation functions, ex: `COUNT(*) AS total_entities`. The key is the alias assigned to the aggregation function on input and the size of this map equals the number of aggregation functions in the query. */
  aggregateProperties?: Record<string, Value>;
}

export const AggregationResult: Schema.Codec<AggregationResult> =
  /*@__PURE__*/ Schema.Struct({
    aggregateProperties: Schema.optional(Schema.Record(Schema.String, Value)),
  }).annotate({ identifier: "AggregationResult" });

export interface QueryResultBatch {
  /** A cursor that points to the position after the last result in the batch. */
  endCursor?: string;
  /** Read timestamp this batch was returned from. This applies to the range of results from the query's `start_cursor` (or the beginning of the query if no cursor was given) to this batch's `end_cursor` (not the query's `end_cursor`). In a single transaction, subsequent query result batches for the same query can have a greater timestamp. Each batch's read timestamp is valid for all preceding batches. This value will not be set for eventually consistent queries in Cloud Datastore. */
  readTime?: string;
  /** The result type for every entity in `entity_results`. */
  entityResultType?:
    | "RESULT_TYPE_UNSPECIFIED"
    | "FULL"
    | "PROJECTION"
    | "KEY_ONLY"
    | (string & {});
  /** The number of results skipped, typically because of an offset. */
  skippedResults?: number;
  /** A cursor that points to the position after the last skipped result. Will be set when `skipped_results` != 0. */
  skippedCursor?: string;
  /** The version number of the snapshot this batch was returned from. This applies to the range of results from the query's `start_cursor` (or the beginning of the query if no cursor was given) to this batch's `end_cursor` (not the query's `end_cursor`). In a single transaction, subsequent query result batches for the same query can have a greater snapshot version number. Each batch's snapshot version is valid for all preceding batches. The value will be zero for eventually consistent queries. */
  snapshotVersion?: string;
  /** The results for this batch. */
  entityResults?: ReadonlyArray<EntityResult>;
  /** The state of the query after the current batch. */
  moreResults?:
    | "MORE_RESULTS_TYPE_UNSPECIFIED"
    | "NOT_FINISHED"
    | "MORE_RESULTS_AFTER_LIMIT"
    | "MORE_RESULTS_AFTER_CURSOR"
    | "NO_MORE_RESULTS"
    | (string & {});
}

export const QueryResultBatch: Schema.Codec<QueryResultBatch> =
  /*@__PURE__*/ Schema.Struct({
    endCursor: Schema.optional(Schema.String),
    readTime: Schema.optional(Schema.String),
    entityResultType: Schema.optional(Schema.String),
    skippedResults: Schema.optional(Schema.Number),
    skippedCursor: Schema.optional(Schema.String),
    snapshotVersion: Schema.optional(Schema.String),
    entityResults: Schema.optional(Schema.Array(EntityResult)),
    moreResults: Schema.optional(Schema.String),
  }).annotate({ identifier: "QueryResultBatch" });

export interface GoogleDatastoreAdminV1ExportEntitiesResponse {
  /** Location of the output metadata file. This can be used to begin an import into Cloud Datastore (this project or another project). See google.datastore.admin.v1.ImportEntitiesRequest.input_url. Only present if the operation completed successfully. */
  outputUrl?: string;
}

export const GoogleDatastoreAdminV1ExportEntitiesResponse: Schema.Codec<GoogleDatastoreAdminV1ExportEntitiesResponse> =
  /*@__PURE__*/ Schema.Struct({
    outputUrl: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleDatastoreAdminV1ExportEntitiesResponse" });

export interface FindNearest {
  /** Optional. Optional name of the field to output the result of the vector distance calculation. Must conform to entity property limitations. */
  distanceResultProperty?: string;
  /** Required. An indexed vector property to search upon. Only documents which contain vectors whose dimensionality match the query_vector can be returned. */
  vectorProperty?: PropertyReference;
  /** Required. The query vector that we are searching on. Must be a vector of no more than 2048 dimensions. */
  queryVector?: Value;
  /** Optional. Option to specify a threshold for which no less similar documents will be returned. The behavior of the specified `distance_measure` will affect the meaning of the distance threshold. Since DOT_PRODUCT distances increase when the vectors are more similar, the comparison is inverted. * For EUCLIDEAN, COSINE: WHERE distance <= distance_threshold * For DOT_PRODUCT: WHERE distance >= distance_threshold */
  distanceThreshold?: number;
  /** Required. The number of nearest neighbors to return. Must be a positive integer of no more than 100. */
  limit?: number;
  /** Required. The Distance Measure to use, required. */
  distanceMeasure?:
    | "DISTANCE_MEASURE_UNSPECIFIED"
    | "EUCLIDEAN"
    | "COSINE"
    | "DOT_PRODUCT"
    | (string & {});
}

export const FindNearest: Schema.Codec<FindNearest> =
  /*@__PURE__*/ Schema.Struct({
    distanceResultProperty: Schema.optional(Schema.String),
    vectorProperty: Schema.optional(PropertyReference),
    queryVector: Schema.optional(Value),
    distanceThreshold: Schema.optional(Schema.Number),
    limit: Schema.optional(Schema.Number),
    distanceMeasure: Schema.optional(Schema.String),
  }).annotate({ identifier: "FindNearest" });

export interface Projection {
  /** The property to project. */
  property?: PropertyReference;
}

export const Projection: Schema.Codec<Projection> =
  /*@__PURE__*/ Schema.Struct({
    property: Schema.optional(PropertyReference),
  }).annotate({ identifier: "Projection" });

export interface PropertyOrder {
  /** The property to order by. */
  property?: PropertyReference;
  /** The direction to order by. Defaults to `ASCENDING`. */
  direction?:
    | "DIRECTION_UNSPECIFIED"
    | "ASCENDING"
    | "DESCENDING"
    | (string & {});
}

export const PropertyOrder: Schema.Codec<PropertyOrder> =
  /*@__PURE__*/ Schema.Struct({
    property: Schema.optional(PropertyReference),
    direction: Schema.optional(Schema.String),
  }).annotate({ identifier: "PropertyOrder" });

export interface Query {
  /** The kinds to query (if empty, returns entities of all kinds). Currently at most 1 kind may be specified. */
  kind?: ReadonlyArray<KindExpression>;
  /** The filter to apply. */
  filter?: Filter;
  /** The number of results to skip. Applies before limit, but after all other constraints. Optional. Must be >= 0 if specified. */
  offset?: number;
  /** The maximum number of results to return. Applies after all other constraints. Optional. Unspecified is interpreted as no limit. Must be >= 0 if specified. */
  limit?: number;
  /** Optional. A potential Nearest Neighbors Search. Applies after all other filters and ordering. Finds the closest vector embeddings to the given query vector. */
  findNearest?: FindNearest;
  /** The projection to return. Defaults to returning all properties. */
  projection?: ReadonlyArray<Projection>;
  /** The properties to make distinct. The query results will contain the first result for each distinct combination of values for the given properties (if empty, all results are returned). Requires: * If `order` is specified, the set of distinct on properties must appear before the non-distinct on properties in `order`. */
  distinctOn?: ReadonlyArray<PropertyReference>;
  /** A starting point for the query results. Query cursors are returned in query result batches and [can only be used to continue the same query](https://cloud.google.com/datastore/docs/concepts/queries#cursors_limits_and_offsets). */
  startCursor?: string;
  /** The order to apply to the query results (if empty, order is unspecified). */
  order?: ReadonlyArray<PropertyOrder>;
  /** An ending point for the query results. Query cursors are returned in query result batches and [can only be used to limit the same query](https://cloud.google.com/datastore/docs/concepts/queries#cursors_limits_and_offsets). */
  endCursor?: string;
}

export const Query: Schema.Codec<Query> =
  /*@__PURE__*/ Schema.Struct({
    kind: Schema.optional(Schema.Array(KindExpression)),
    filter: Schema.optional(Filter),
    offset: Schema.optional(Schema.Number),
    limit: Schema.optional(Schema.Number),
    findNearest: Schema.optional(FindNearest),
    projection: Schema.optional(Schema.Array(Projection)),
    distinctOn: Schema.optional(Schema.Array(PropertyReference)),
    startCursor: Schema.optional(Schema.String),
    order: Schema.optional(Schema.Array(PropertyOrder)),
    endCursor: Schema.optional(Schema.String),
  }).annotate({ identifier: "Query" });

export interface AggregationQuery {
  /** Optional. Series of aggregations to apply over the results of the `nested_query`. Requires: * A minimum of one and maximum of five aggregations per query. */
  aggregations?: ReadonlyArray<Aggregation>;
  /** Nested query for aggregation */
  nestedQuery?: Query;
}

export const AggregationQuery: Schema.Codec<AggregationQuery> =
  /*@__PURE__*/ Schema.Struct({
    aggregations: Schema.optional(Schema.Array(Aggregation)),
    nestedQuery: Schema.optional(Query),
  }).annotate({ identifier: "AggregationQuery" });

export interface RunAggregationQueryRequest {
  /** Entities are partitioned into subsets, identified by a partition ID. Queries are scoped to a single partition. This partition ID is normalized with the standard default context partition ID. */
  partitionId?: PartitionId;
  /** The ID of the database against which to make the request. '(default)' is not allowed; please use empty string '' to refer the default database. */
  databaseId?: string;
  /** The GQL query to run. This query must be an aggregation query. */
  gqlQuery?: GqlQuery;
  /** Optional. Explain options for the query. If set, additional query statistics will be returned. If not, only query results will be returned. */
  explainOptions?: ExplainOptions;
  /** The options for this query. */
  readOptions?: ReadOptions;
  /** The query to run. */
  aggregationQuery?: AggregationQuery;
}

export const RunAggregationQueryRequest: Schema.Codec<RunAggregationQueryRequest> =
  /*@__PURE__*/ Schema.Struct({
    partitionId: Schema.optional(PartitionId),
    databaseId: Schema.optional(Schema.String),
    gqlQuery: Schema.optional(GqlQuery),
    explainOptions: Schema.optional(ExplainOptions),
    readOptions: Schema.optional(ReadOptions),
    aggregationQuery: Schema.optional(AggregationQuery),
  }).annotate({ identifier: "RunAggregationQueryRequest" });

export interface ReserveIdsRequest {
  /** The ID of the database against which to make the request. '(default)' is not allowed; please use empty string '' to refer the default database. */
  databaseId?: string;
  /** Required. A list of keys with complete key paths whose numeric IDs should not be auto-allocated. */
  keys?: ReadonlyArray<Key>;
}

export const ReserveIdsRequest: Schema.Codec<ReserveIdsRequest> =
  /*@__PURE__*/ Schema.Struct({
    databaseId: Schema.optional(Schema.String),
    keys: Schema.optional(Schema.Array(Key)),
  }).annotate({ identifier: "ReserveIdsRequest" });

export interface AggregationResultBatch {
  /** The state of the query after the current batch. Only COUNT(*) aggregations are supported in the initial launch. Therefore, expected result type is limited to `NO_MORE_RESULTS`. */
  moreResults?:
    | "MORE_RESULTS_TYPE_UNSPECIFIED"
    | "NOT_FINISHED"
    | "MORE_RESULTS_AFTER_LIMIT"
    | "MORE_RESULTS_AFTER_CURSOR"
    | "NO_MORE_RESULTS"
    | (string & {});
  /** Read timestamp this batch was returned from. In a single transaction, subsequent query result batches for the same query can have a greater timestamp. Each batch's read timestamp is valid for all preceding batches. */
  readTime?: string;
  /** The aggregation results for this batch. */
  aggregationResults?: ReadonlyArray<AggregationResult>;
}

export const AggregationResultBatch: Schema.Codec<AggregationResultBatch> =
  /*@__PURE__*/ Schema.Struct({
    moreResults: Schema.optional(Schema.String),
    readTime: Schema.optional(Schema.String),
    aggregationResults: Schema.optional(Schema.Array(AggregationResult)),
  }).annotate({ identifier: "AggregationResultBatch" });

export interface ExecutionStats {
  /** Debugging statistics from the execution of the query. Note that the debugging stats are subject to change as Firestore evolves. It could include: { "indexes_entries_scanned": "1000", "documents_scanned": "20", "billing_details" : { "documents_billable": "20", "index_entries_billable": "1000", "min_query_cost": "0" } } */
  debugStats?: Record<string, unknown>;
  /** Total time to execute the query in the backend. */
  executionDuration?: string;
  /** Total billable read operations. */
  readOperations?: string;
  /** Total number of results returned, including documents, projections, aggregation results, keys. */
  resultsReturned?: string;
}

export const ExecutionStats: Schema.Codec<ExecutionStats> =
  /*@__PURE__*/ Schema.Struct({
    debugStats: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    executionDuration: Schema.optional(Schema.String),
    readOperations: Schema.optional(Schema.String),
    resultsReturned: Schema.optional(Schema.String),
  }).annotate({ identifier: "ExecutionStats" });

export interface ExplainMetrics {
  /** Planning phase information for the query. */
  planSummary?: PlanSummary;
  /** Aggregated stats from the execution of the query. Only present when ExplainOptions.analyze is set to true. */
  executionStats?: ExecutionStats;
}

export const ExplainMetrics: Schema.Codec<ExplainMetrics> =
  /*@__PURE__*/ Schema.Struct({
    planSummary: Schema.optional(PlanSummary),
    executionStats: Schema.optional(ExecutionStats),
  }).annotate({ identifier: "ExplainMetrics" });

export interface RunAggregationQueryResponse {
  /** A batch of aggregation results. Always present. */
  batch?: AggregationResultBatch;
  /** The parsed form of the `GqlQuery` from the request, if it was set. */
  query?: AggregationQuery;
  /** The identifier of the transaction that was started as part of this RunAggregationQuery request. Set only when ReadOptions.new_transaction was set in RunAggregationQueryRequest.read_options. */
  transaction?: string;
  /** Query explain metrics. This is only present when the RunAggregationQueryRequest.explain_options is provided, and it is sent only once with the last response in the stream. */
  explainMetrics?: ExplainMetrics;
}

export const RunAggregationQueryResponse: Schema.Codec<RunAggregationQueryResponse> =
  /*@__PURE__*/ Schema.Struct({
    batch: Schema.optional(AggregationResultBatch),
    query: Schema.optional(AggregationQuery),
    transaction: Schema.optional(Schema.String),
    explainMetrics: Schema.optional(ExplainMetrics),
  }).annotate({ identifier: "RunAggregationQueryResponse" });

export interface PropertyTransform {
  /** Removes all of the given elements from the array in the property. If the property is not an array, or if the property does not yet exist, it is set to the empty array. Equivalent numbers of different types (e.g. 3L and 3.0) are considered equal when deciding whether an element should be removed. NaN is equal to NaN, and the null value is equal to the null value. This will remove all equivalent values if there are duplicates. The corresponding transform result will be the null value. */
  removeAllFromArray?: ArrayValue;
  /** Sets the property to the given server value. */
  setToServerValue?:
    | "SERVER_VALUE_UNSPECIFIED"
    | "REQUEST_TIME"
    | (string & {});
  /** Adds the given value to the property's current value. This must be an integer or a double value. If the property is not an integer or double, or if the property does not yet exist, the transformation will set the property to the given value. If either of the given value or the current property value are doubles, both values will be interpreted as doubles. Double arithmetic and representation of double values follows IEEE 754 semantics. If there is positive/negative integer overflow, the property is resolved to the largest magnitude positive/negative integer. */
  increment?: Value;
  /** Sets the property to the maximum of its current value and the given value. This must be an integer or a double value. If the property is not an integer or double, or if the property does not yet exist, the transformation will set the property to the given value. If a maximum operation is applied where the property and the input value are of mixed types (that is - one is an integer and one is a double) the property takes on the type of the larger operand. If the operands are equivalent (e.g. 3 and 3.0), the property does not change. 0, 0.0, and -0.0 are all zero. The maximum of a zero stored value and zero input value is always the stored value. The maximum of any numeric value x and NaN is NaN. */
  maximum?: Value;
  /** Optional. The name of the property. Property paths (a list of property names separated by dots (`.`)) may be used to refer to properties inside entity values. For example `foo.bar` means the property `bar` inside the entity property `foo`. If a property name contains a dot `.` or a backlslash `\`, then that name must be escaped. */
  property?: string;
  /** Sets the property to the minimum of its current value and the given value. This must be an integer or a double value. If the property is not an integer or double, or if the property does not yet exist, the transformation will set the property to the input value. If a minimum operation is applied where the property and the input value are of mixed types (that is - one is an integer and one is a double) the property takes on the type of the smaller operand. If the operands are equivalent (e.g. 3 and 3.0), the property does not change. 0, 0.0, and -0.0 are all zero. The minimum of a zero stored value and zero input value is always the stored value. The minimum of any numeric value x and NaN is NaN. */
  minimum?: Value;
  /** Appends the given elements in order if they are not already present in the current property value. If the property is not an array, or if the property does not yet exist, it is first set to the empty array. Equivalent numbers of different types (e.g. 3L and 3.0) are considered equal when checking if a value is missing. NaN is equal to NaN, and the null value is equal to the null value. If the input contains multiple equivalent values, only the first will be considered. The corresponding transform result will be the null value. */
  appendMissingElements?: ArrayValue;
}

export const PropertyTransform: Schema.Codec<PropertyTransform> =
  /*@__PURE__*/ Schema.Struct({
    removeAllFromArray: Schema.optional(ArrayValue),
    setToServerValue: Schema.optional(Schema.String),
    increment: Schema.optional(Value),
    maximum: Schema.optional(Value),
    property: Schema.optional(Schema.String),
    minimum: Schema.optional(Value),
    appendMissingElements: Schema.optional(ArrayValue),
  }).annotate({ identifier: "PropertyTransform" });

export interface BeginTransactionRequest {
  /** The ID of the database against which to make the request. '(default)' is not allowed; please use empty string '' to refer the default database. */
  databaseId?: string;
  /** Options for a new transaction. */
  transactionOptions?: TransactionOptions;
}

export const BeginTransactionRequest: Schema.Codec<BeginTransactionRequest> =
  /*@__PURE__*/ Schema.Struct({
    databaseId: Schema.optional(Schema.String),
    transactionOptions: Schema.optional(TransactionOptions),
  }).annotate({ identifier: "BeginTransactionRequest" });

export interface ReserveIdsResponse {}

export const ReserveIdsResponse: Schema.Codec<ReserveIdsResponse> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "ReserveIdsResponse",
  });

export interface GoogleDatastoreAdminV1IndexOperationMetadata {
  /** Metadata common to all Datastore Admin operations. */
  common?: GoogleDatastoreAdminV1CommonMetadata;
  /** An estimate of the number of entities processed. */
  progressEntities?: GoogleDatastoreAdminV1Progress;
  /** The index resource ID that this operation is acting on. */
  indexId?: string;
}

export const GoogleDatastoreAdminV1IndexOperationMetadata: Schema.Codec<GoogleDatastoreAdminV1IndexOperationMetadata> =
  /*@__PURE__*/ Schema.Struct({
    common: Schema.optional(GoogleDatastoreAdminV1CommonMetadata),
    progressEntities: Schema.optional(GoogleDatastoreAdminV1Progress),
    indexId: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleDatastoreAdminV1IndexOperationMetadata" });

export interface MutationResult {
  /** The version of the entity on the server after processing the mutation. If the mutation doesn't change anything on the server, then the version will be the version of the current entity or, if no entity is present, a version that is strictly greater than the version of any previous entity and less than the version of any possible future entity. */
  version?: string;
  /** Whether a conflict was detected for this mutation. Always false when a conflict detection strategy field is not set in the mutation. */
  conflictDetected?: boolean;
  /** The create time of the entity. This field will not be set after a 'delete'. */
  createTime?: string;
  /** The update time of the entity on the server after processing the mutation. If the mutation doesn't change anything on the server, then the timestamp will be the update timestamp of the current entity. This field will not be set after a 'delete'. */
  updateTime?: string;
  /** The results of applying each PropertyTransform, in the same order of the request. */
  transformResults?: ReadonlyArray<Value>;
  /** The automatically allocated key. Set only when the mutation allocated a key. */
  key?: Key;
}

export const MutationResult: Schema.Codec<MutationResult> =
  /*@__PURE__*/ Schema.Struct({
    version: Schema.optional(Schema.String),
    conflictDetected: Schema.optional(Schema.Boolean),
    createTime: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    transformResults: Schema.optional(Schema.Array(Value)),
    key: Schema.optional(Key),
  }).annotate({ identifier: "MutationResult" });

export interface GoogleDatastoreAdminV1beta1Progress {
  /** The amount of work that has been completed. Note that this may be greater than work_estimated. */
  workCompleted?: string;
  /** An estimate of how much work needs to be performed. May be zero if the work estimate is unavailable. */
  workEstimated?: string;
}

export const GoogleDatastoreAdminV1beta1Progress: Schema.Codec<GoogleDatastoreAdminV1beta1Progress> =
  /*@__PURE__*/ Schema.Struct({
    workCompleted: Schema.optional(Schema.String),
    workEstimated: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleDatastoreAdminV1beta1Progress" });

export interface Mutation {
  /** The update time of the entity that this mutation is being applied to. If this does not match the current update time on the server, the mutation conflicts. */
  updateTime?: string;
  /** The entity to insert. The entity must not already exist. The entity key's final path element may be incomplete. */
  insert?: Entity;
  /** The entity to update. The entity must already exist. Must have a complete key path. */
  update?: Entity;
  /** The key of the entity to delete. The entity may or may not already exist. Must have a complete key path and must not be reserved/read-only. */
  delete?: Key;
  /** The entity to upsert. The entity may or may not already exist. The entity key's final path element may be incomplete. */
  upsert?: Entity;
  /** Optional. The transforms to perform on the entity. This field can be set only when the operation is `insert`, `update`, or `upsert`. If present, the transforms are be applied to the entity regardless of the property mask, in order, after the operation. */
  propertyTransforms?: ReadonlyArray<PropertyTransform>;
  /** The strategy to use when a conflict is detected. Defaults to `SERVER_VALUE`. If this is set, then `conflict_detection_strategy` must also be set. */
  conflictResolutionStrategy?:
    | "STRATEGY_UNSPECIFIED"
    | "SERVER_VALUE"
    | "FAIL"
    | (string & {});
  /** The version of the entity that this mutation is being applied to. If this does not match the current version on the server, the mutation conflicts. */
  baseVersion?: string;
  /** The properties to write in this mutation. None of the properties in the mask may have a reserved name, except for `__key__`. This field is ignored for `delete`. If the entity already exists, only properties referenced in the mask are updated, others are left untouched. Properties referenced in the mask but not in the entity are deleted. */
  propertyMask?: PropertyMask;
}

export const Mutation: Schema.Codec<Mutation> =
  /*@__PURE__*/ Schema.Struct({
    updateTime: Schema.optional(Schema.String),
    insert: Schema.optional(Entity),
    update: Schema.optional(Entity),
    delete: Schema.optional(Key),
    upsert: Schema.optional(Entity),
    propertyTransforms: Schema.optional(Schema.Array(PropertyTransform)),
    conflictResolutionStrategy: Schema.optional(Schema.String),
    baseVersion: Schema.optional(Schema.String),
    propertyMask: Schema.optional(PropertyMask),
  }).annotate({ identifier: "Mutation" });

export interface CommitRequest {
  /** The ID of the database against which to make the request. '(default)' is not allowed; please use empty string '' to refer the default database. */
  databaseId?: string;
  /** The identifier of the transaction associated with the commit. A transaction identifier is returned by a call to Datastore.BeginTransaction. */
  transaction?: string;
  /** The mutations to perform. When mode is `TRANSACTIONAL`, mutations affecting a single entity are applied in order. The following sequences of mutations affecting a single entity are not permitted in a single `Commit` request: - `insert` followed by `insert` - `update` followed by `insert` - `upsert` followed by `insert` - `delete` followed by `update` When mode is `NON_TRANSACTIONAL`, no two mutations may affect a single entity. */
  mutations?: ReadonlyArray<Mutation>;
  /** Options for beginning a new transaction for this request. The transaction is committed when the request completes. If specified, TransactionOptions.mode must be TransactionOptions.ReadWrite. */
  singleUseTransaction?: TransactionOptions;
  /** The type of commit to perform. Defaults to `TRANSACTIONAL`. */
  mode?:
    | "MODE_UNSPECIFIED"
    | "TRANSACTIONAL"
    | "NON_TRANSACTIONAL"
    | (string & {});
}

export const CommitRequest: Schema.Codec<CommitRequest> =
  /*@__PURE__*/ Schema.Struct({
    databaseId: Schema.optional(Schema.String),
    transaction: Schema.optional(Schema.String),
    mutations: Schema.optional(Schema.Array(Mutation)),
    singleUseTransaction: Schema.optional(TransactionOptions),
    mode: Schema.optional(Schema.String),
  }).annotate({ identifier: "CommitRequest" });

export interface GoogleDatastoreAdminV1ImportEntitiesRequest {
  /** Client-assigned labels. */
  labels?: Record<string, string>;
  /** Required. The full resource URL of the external storage location. Currently, only Google Cloud Storage is supported. So input_url should be of the form: `gs://BUCKET_NAME[/NAMESPACE_PATH]/OVERALL_EXPORT_METADATA_FILE`, where `BUCKET_NAME` is the name of the Cloud Storage bucket, `NAMESPACE_PATH` is an optional Cloud Storage namespace path (this is not a Cloud Datastore namespace), and `OVERALL_EXPORT_METADATA_FILE` is the metadata file written by the ExportEntities operation. For more information about Cloud Storage namespace paths, see [Object name considerations](https://cloud.google.com/storage/docs/naming#object-considerations). For more information, see google.datastore.admin.v1.ExportEntitiesResponse.output_url. */
  inputUrl?: string;
  /** Optionally specify which kinds/namespaces are to be imported. If provided, the list must be a subset of the EntityFilter used in creating the export, otherwise a FAILED_PRECONDITION error will be returned. If no filter is specified then all entities from the export are imported. */
  entityFilter?: GoogleDatastoreAdminV1EntityFilter;
}

export const GoogleDatastoreAdminV1ImportEntitiesRequest: Schema.Codec<GoogleDatastoreAdminV1ImportEntitiesRequest> =
  /*@__PURE__*/ Schema.Struct({
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    inputUrl: Schema.optional(Schema.String),
    entityFilter: Schema.optional(GoogleDatastoreAdminV1EntityFilter),
  }).annotate({ identifier: "GoogleDatastoreAdminV1ImportEntitiesRequest" });

export interface GoogleDatastoreAdminV1beta1EntityFilter {
  /** If empty, then this represents all kinds. */
  kinds?: ReadonlyArray<string>;
  /** An empty list represents all namespaces. This is the preferred usage for projects that don't use namespaces. An empty string element represents the default namespace. This should be used if the project has data in non-default namespaces, but doesn't want to include them. Each namespace in this list must be unique. */
  namespaceIds?: ReadonlyArray<string>;
}

export const GoogleDatastoreAdminV1beta1EntityFilter: Schema.Codec<GoogleDatastoreAdminV1beta1EntityFilter> =
  /*@__PURE__*/ Schema.Struct({
    kinds: Schema.optional(Schema.Array(Schema.String)),
    namespaceIds: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleDatastoreAdminV1beta1EntityFilter" });

export interface GoogleDatastoreAdminV1ExportEntitiesRequest {
  /** Description of what data from the project is included in the export. */
  entityFilter?: GoogleDatastoreAdminV1EntityFilter;
  /** Required. Location for the export metadata and data files. The full resource URL of the external storage location. Currently, only Google Cloud Storage is supported. So output_url_prefix should be of the form: `gs://BUCKET_NAME[/NAMESPACE_PATH]`, where `BUCKET_NAME` is the name of the Cloud Storage bucket and `NAMESPACE_PATH` is an optional Cloud Storage namespace path (this is not a Cloud Datastore namespace). For more information about Cloud Storage namespace paths, see [Object name considerations](https://cloud.google.com/storage/docs/naming#object-considerations). The resulting files will be nested deeper than the specified URL prefix. The final output URL will be provided in the google.datastore.admin.v1.ExportEntitiesResponse.output_url field. That value should be used for subsequent ImportEntities operations. By nesting the data files deeper, the same Cloud Storage bucket can be used in multiple ExportEntities operations without conflict. */
  outputUrlPrefix?: string;
  /** Client-assigned labels. */
  labels?: Record<string, string>;
}

export const GoogleDatastoreAdminV1ExportEntitiesRequest: Schema.Codec<GoogleDatastoreAdminV1ExportEntitiesRequest> =
  /*@__PURE__*/ Schema.Struct({
    entityFilter: Schema.optional(GoogleDatastoreAdminV1EntityFilter),
    outputUrlPrefix: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "GoogleDatastoreAdminV1ExportEntitiesRequest" });

export interface GoogleDatastoreAdminV1DatastoreFirestoreMigrationMetadata {
  /** The current state of migration from Cloud Datastore to Cloud Firestore in Datastore mode. */
  migrationState?:
    | "MIGRATION_STATE_UNSPECIFIED"
    | "RUNNING"
    | "PAUSED"
    | "COMPLETE"
    | (string & {});
  /** The current step of migration from Cloud Datastore to Cloud Firestore in Datastore mode. */
  migrationStep?:
    | "MIGRATION_STEP_UNSPECIFIED"
    | "PREPARE"
    | "START"
    | "APPLY_WRITES_SYNCHRONOUSLY"
    | "COPY_AND_VERIFY"
    | "REDIRECT_EVENTUALLY_CONSISTENT_READS"
    | "REDIRECT_STRONGLY_CONSISTENT_READS"
    | "REDIRECT_WRITES"
    | (string & {});
}

export const GoogleDatastoreAdminV1DatastoreFirestoreMigrationMetadata: Schema.Codec<GoogleDatastoreAdminV1DatastoreFirestoreMigrationMetadata> =
  /*@__PURE__*/ Schema.Struct({
    migrationState: Schema.optional(Schema.String),
    migrationStep: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleDatastoreAdminV1DatastoreFirestoreMigrationMetadata",
  });

export interface RollbackResponse {}

export const RollbackResponse: Schema.Codec<RollbackResponse> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "RollbackResponse",
  });

export interface GoogleDatastoreAdminV1ImportEntitiesMetadata {
  /** Metadata common to all Datastore Admin operations. */
  common?: GoogleDatastoreAdminV1CommonMetadata;
  /** An estimate of the number of entities processed. */
  progressEntities?: GoogleDatastoreAdminV1Progress;
  /** Description of which entities are being imported. */
  entityFilter?: GoogleDatastoreAdminV1EntityFilter;
  /** The location of the import metadata file. This will be the same value as the google.datastore.admin.v1.ExportEntitiesResponse.output_url field. */
  inputUrl?: string;
  /** An estimate of the number of bytes processed. */
  progressBytes?: GoogleDatastoreAdminV1Progress;
}

export const GoogleDatastoreAdminV1ImportEntitiesMetadata: Schema.Codec<GoogleDatastoreAdminV1ImportEntitiesMetadata> =
  /*@__PURE__*/ Schema.Struct({
    common: Schema.optional(GoogleDatastoreAdminV1CommonMetadata),
    progressEntities: Schema.optional(GoogleDatastoreAdminV1Progress),
    entityFilter: Schema.optional(GoogleDatastoreAdminV1EntityFilter),
    inputUrl: Schema.optional(Schema.String),
    progressBytes: Schema.optional(GoogleDatastoreAdminV1Progress),
  }).annotate({ identifier: "GoogleDatastoreAdminV1ImportEntitiesMetadata" });

export interface LookupRequest {
  /** The ID of the database against which to make the request. '(default)' is not allowed; please use empty string '' to refer the default database. */
  databaseId?: string;
  /** The options for this lookup request. */
  readOptions?: ReadOptions;
  /** The properties to return. Defaults to returning all properties. If this field is set and an entity has a property not referenced in the mask, it will be absent from LookupResponse.found.entity.properties. The entity's key is always returned. */
  propertyMask?: PropertyMask;
  /** Required. Keys of entities to look up. */
  keys?: ReadonlyArray<Key>;
}

export const LookupRequest: Schema.Codec<LookupRequest> =
  /*@__PURE__*/ Schema.Struct({
    databaseId: Schema.optional(Schema.String),
    readOptions: Schema.optional(ReadOptions),
    propertyMask: Schema.optional(PropertyMask),
    keys: Schema.optional(Schema.Array(Key)),
  }).annotate({ identifier: "LookupRequest" });

export interface GoogleDatastoreAdminV1IndexedProperty {
  /** Required. The property name to index. */
  name?: string;
  /** Required. The indexed property's direction. Must not be DIRECTION_UNSPECIFIED. */
  direction?:
    | "DIRECTION_UNSPECIFIED"
    | "ASCENDING"
    | "DESCENDING"
    | (string & {});
}

export const GoogleDatastoreAdminV1IndexedProperty: Schema.Codec<GoogleDatastoreAdminV1IndexedProperty> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    direction: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleDatastoreAdminV1IndexedProperty" });

export interface GoogleDatastoreAdminV1Index {
  /** Output only. The resource ID of the index. */
  indexId?: string;
  /** Required. The index's ancestor mode. Must not be ANCESTOR_MODE_UNSPECIFIED. */
  ancestor?:
    | "ANCESTOR_MODE_UNSPECIFIED"
    | "NONE"
    | "ALL_ANCESTORS"
    | (string & {});
  /** Output only. The state of the index. */
  state?:
    | "STATE_UNSPECIFIED"
    | "CREATING"
    | "READY"
    | "DELETING"
    | "ERROR"
    | (string & {});
  /** Required. The entity kind to which this index applies. */
  kind?: string;
  /** Output only. Project ID. */
  projectId?: string;
  /** Required. An ordered sequence of property names and their index attributes. Requires: * A maximum of 100 properties. */
  properties?: ReadonlyArray<GoogleDatastoreAdminV1IndexedProperty>;
}

export const GoogleDatastoreAdminV1Index: Schema.Codec<GoogleDatastoreAdminV1Index> =
  /*@__PURE__*/ Schema.Struct({
    indexId: Schema.optional(Schema.String),
    ancestor: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    projectId: Schema.optional(Schema.String),
    properties: Schema.optional(
      Schema.Array(GoogleDatastoreAdminV1IndexedProperty),
    ),
  }).annotate({ identifier: "GoogleDatastoreAdminV1Index" });

export interface AllocateIdsResponse {
  /** The keys specified in the request (in the same order), each with its key path completed with a newly allocated ID. */
  keys?: ReadonlyArray<Key>;
}

export const AllocateIdsResponse: Schema.Codec<AllocateIdsResponse> =
  /*@__PURE__*/ Schema.Struct({
    keys: Schema.optional(Schema.Array(Key)),
  }).annotate({ identifier: "AllocateIdsResponse" });

export interface GoogleDatastoreAdminV1beta1CommonMetadata {
  /** The type of the operation. Can be used as a filter in ListOperationsRequest. */
  operationType?:
    | "OPERATION_TYPE_UNSPECIFIED"
    | "EXPORT_ENTITIES"
    | "IMPORT_ENTITIES"
    | (string & {});
  /** The time that work began on the operation. */
  startTime?: string;
  /** The current state of the Operation. */
  state?:
    | "STATE_UNSPECIFIED"
    | "INITIALIZING"
    | "PROCESSING"
    | "CANCELLING"
    | "FINALIZING"
    | "SUCCESSFUL"
    | "FAILED"
    | "CANCELLED"
    | (string & {});
  /** The time the operation ended, either successfully or otherwise. */
  endTime?: string;
  /** The client-assigned labels which were provided when the operation was created. May also include additional labels. */
  labels?: Record<string, string>;
}

export const GoogleDatastoreAdminV1beta1CommonMetadata: Schema.Codec<GoogleDatastoreAdminV1beta1CommonMetadata> =
  /*@__PURE__*/ Schema.Struct({
    operationType: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "GoogleDatastoreAdminV1beta1CommonMetadata" });

export interface GoogleDatastoreAdminV1beta1ImportEntitiesMetadata {
  /** An estimate of the number of entities processed. */
  progressEntities?: GoogleDatastoreAdminV1beta1Progress;
  /** Metadata common to all Datastore Admin operations. */
  common?: GoogleDatastoreAdminV1beta1CommonMetadata;
  /** An estimate of the number of bytes processed. */
  progressBytes?: GoogleDatastoreAdminV1beta1Progress;
  /** Description of which entities are being imported. */
  entityFilter?: GoogleDatastoreAdminV1beta1EntityFilter;
  /** The location of the import metadata file. This will be the same value as the google.datastore.admin.v1beta1.ExportEntitiesResponse.output_url field. */
  inputUrl?: string;
}

export const GoogleDatastoreAdminV1beta1ImportEntitiesMetadata: Schema.Codec<GoogleDatastoreAdminV1beta1ImportEntitiesMetadata> =
  /*@__PURE__*/ Schema.Struct({
    progressEntities: Schema.optional(GoogleDatastoreAdminV1beta1Progress),
    common: Schema.optional(GoogleDatastoreAdminV1beta1CommonMetadata),
    progressBytes: Schema.optional(GoogleDatastoreAdminV1beta1Progress),
    entityFilter: Schema.optional(GoogleDatastoreAdminV1beta1EntityFilter),
    inputUrl: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleDatastoreAdminV1beta1ImportEntitiesMetadata",
  });

export interface RunQueryResponse {
  /** A batch of query results. This is always present unless running a query under explain-only mode: RunQueryRequest.explain_options was provided and ExplainOptions.analyze was set to false. */
  batch?: QueryResultBatch;
  /** The parsed form of the `GqlQuery` from the request, if it was set. */
  query?: Query;
  /** The identifier of the transaction that was started as part of this RunQuery request. Set only when ReadOptions.new_transaction was set in RunQueryRequest.read_options. */
  transaction?: string;
  /** Query explain metrics. This is only present when the RunQueryRequest.explain_options is provided, and it is sent only once with the last response in the stream. */
  explainMetrics?: ExplainMetrics;
}

export const RunQueryResponse: Schema.Codec<RunQueryResponse> =
  /*@__PURE__*/ Schema.Struct({
    batch: Schema.optional(QueryResultBatch),
    query: Schema.optional(Query),
    transaction: Schema.optional(Schema.String),
    explainMetrics: Schema.optional(ExplainMetrics),
  }).annotate({ identifier: "RunQueryResponse" });

export interface AllocateIdsRequest {
  /** The ID of the database against which to make the request. '(default)' is not allowed; please use empty string '' to refer the default database. */
  databaseId?: string;
  /** Required. A list of keys with incomplete key paths for which to allocate IDs. No key may be reserved/read-only. */
  keys?: ReadonlyArray<Key>;
}

export const AllocateIdsRequest: Schema.Codec<AllocateIdsRequest> =
  /*@__PURE__*/ Schema.Struct({
    databaseId: Schema.optional(Schema.String),
    keys: Schema.optional(Schema.Array(Key)),
  }).annotate({ identifier: "AllocateIdsRequest" });

export interface GoogleDatastoreAdminV1ListIndexesResponse {
  /** The indexes. */
  indexes?: ReadonlyArray<GoogleDatastoreAdminV1Index>;
  /** The standard List next-page token. */
  nextPageToken?: string;
}

export const GoogleDatastoreAdminV1ListIndexesResponse: Schema.Codec<GoogleDatastoreAdminV1ListIndexesResponse> =
  /*@__PURE__*/ Schema.Struct({
    indexes: Schema.optional(Schema.Array(GoogleDatastoreAdminV1Index)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleDatastoreAdminV1ListIndexesResponse" });

export interface GoogleDatastoreAdminV1beta1ExportEntitiesMetadata {
  /** Description of which entities are being exported. */
  entityFilter?: GoogleDatastoreAdminV1beta1EntityFilter;
  /** Location for the export metadata and data files. This will be the same value as the google.datastore.admin.v1beta1.ExportEntitiesRequest.output_url_prefix field. The final output location is provided in google.datastore.admin.v1beta1.ExportEntitiesResponse.output_url. */
  outputUrlPrefix?: string;
  /** An estimate of the number of bytes processed. */
  progressBytes?: GoogleDatastoreAdminV1beta1Progress;
  /** Metadata common to all Datastore Admin operations. */
  common?: GoogleDatastoreAdminV1beta1CommonMetadata;
  /** An estimate of the number of entities processed. */
  progressEntities?: GoogleDatastoreAdminV1beta1Progress;
}

export const GoogleDatastoreAdminV1beta1ExportEntitiesMetadata: Schema.Codec<GoogleDatastoreAdminV1beta1ExportEntitiesMetadata> =
  /*@__PURE__*/ Schema.Struct({
    entityFilter: Schema.optional(GoogleDatastoreAdminV1beta1EntityFilter),
    outputUrlPrefix: Schema.optional(Schema.String),
    progressBytes: Schema.optional(GoogleDatastoreAdminV1beta1Progress),
    common: Schema.optional(GoogleDatastoreAdminV1beta1CommonMetadata),
    progressEntities: Schema.optional(GoogleDatastoreAdminV1beta1Progress),
  }).annotate({
    identifier: "GoogleDatastoreAdminV1beta1ExportEntitiesMetadata",
  });

export interface Empty {}

export const Empty: Schema.Codec<Empty> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Empty",
  });

export interface CommitResponse {
  /** The result of performing the mutations. The i-th mutation result corresponds to the i-th mutation in the request. */
  mutationResults?: ReadonlyArray<MutationResult>;
  /** The number of index entries updated during the commit, or zero if none were updated. */
  indexUpdates?: number;
  /** The transaction commit timestamp. Not set for non-transactional commits. */
  commitTime?: string;
}

export const CommitResponse: Schema.Codec<CommitResponse> =
  /*@__PURE__*/ Schema.Struct({
    mutationResults: Schema.optional(Schema.Array(MutationResult)),
    indexUpdates: Schema.optional(Schema.Number),
    commitTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "CommitResponse" });

export interface RollbackRequest {
  /** The ID of the database against which to make the request. '(default)' is not allowed; please use empty string '' to refer the default database. */
  databaseId?: string;
  /** Required. The transaction identifier, returned by a call to Datastore.BeginTransaction. */
  transaction?: string;
}

export const RollbackRequest: Schema.Codec<RollbackRequest> =
  /*@__PURE__*/ Schema.Struct({
    databaseId: Schema.optional(Schema.String),
    transaction: Schema.optional(Schema.String),
  }).annotate({ identifier: "RollbackRequest" });

export interface GoogleDatastoreAdminV1MigrationStateEvent {
  /** The new state of the migration. */
  state?:
    | "MIGRATION_STATE_UNSPECIFIED"
    | "RUNNING"
    | "PAUSED"
    | "COMPLETE"
    | (string & {});
}

export const GoogleDatastoreAdminV1MigrationStateEvent: Schema.Codec<GoogleDatastoreAdminV1MigrationStateEvent> =
  /*@__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleDatastoreAdminV1MigrationStateEvent" });

export interface BeginTransactionResponse {
  /** The transaction identifier (always present). */
  transaction?: string;
}

export const BeginTransactionResponse: Schema.Codec<BeginTransactionResponse> =
  /*@__PURE__*/ Schema.Struct({
    transaction: Schema.optional(Schema.String),
  }).annotate({ identifier: "BeginTransactionResponse" });

export interface GoogleDatastoreAdminV1beta1ExportEntitiesResponse {
  /** Location of the output metadata file. This can be used to begin an import into Cloud Datastore (this project or another project). See google.datastore.admin.v1beta1.ImportEntitiesRequest.input_url. Only present if the operation completed successfully. */
  outputUrl?: string;
}

export const GoogleDatastoreAdminV1beta1ExportEntitiesResponse: Schema.Codec<GoogleDatastoreAdminV1beta1ExportEntitiesResponse> =
  /*@__PURE__*/ Schema.Struct({
    outputUrl: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleDatastoreAdminV1beta1ExportEntitiesResponse",
  });

export interface RunQueryRequest {
  /** The GQL query to run. This query must be a non-aggregation query. */
  gqlQuery?: GqlQuery;
  /** Optional. Explain options for the query. If set, additional query statistics will be returned. If not, only query results will be returned. */
  explainOptions?: ExplainOptions;
  /** The ID of the database against which to make the request. '(default)' is not allowed; please use empty string '' to refer the default database. */
  databaseId?: string;
  /** The query to run. */
  query?: Query;
  /** Entities are partitioned into subsets, identified by a partition ID. Queries are scoped to a single partition. This partition ID is normalized with the standard default context partition ID. */
  partitionId?: PartitionId;
  /** The options for this query. */
  readOptions?: ReadOptions;
  /** The properties to return. This field must not be set for a projection query. See LookupRequest.property_mask. */
  propertyMask?: PropertyMask;
}

export const RunQueryRequest: Schema.Codec<RunQueryRequest> =
  /*@__PURE__*/ Schema.Struct({
    gqlQuery: Schema.optional(GqlQuery),
    explainOptions: Schema.optional(ExplainOptions),
    databaseId: Schema.optional(Schema.String),
    query: Schema.optional(Query),
    partitionId: Schema.optional(PartitionId),
    readOptions: Schema.optional(ReadOptions),
    propertyMask: Schema.optional(PropertyMask),
  }).annotate({ identifier: "RunQueryRequest" });

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

export interface BeginTransactionProjectsRequest {
  /** Required. The ID of the project against which to make the request. */
  projectId: string;
  /** Request body */
  body?: BeginTransactionRequest;
}

export const BeginTransactionProjectsRequest =
  /*@__PURE__*/ Schema.Struct({
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    body: Schema.optional(BeginTransactionRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/projects/{projectId}:beginTransaction",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<BeginTransactionProjectsRequest>;

export type BeginTransactionProjectsResponse = BeginTransactionResponse;
export const BeginTransactionProjectsResponse =
  /*@__PURE__*/ BeginTransactionResponse;

export type BeginTransactionProjectsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Begins a new transaction. */
export const beginTransactionProjects: API.OperationMethod<
  BeginTransactionProjectsRequest,
  BeginTransactionProjectsResponse,
  BeginTransactionProjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: BeginTransactionProjectsRequest,
  output: BeginTransactionProjectsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface RollbackProjectsRequest {
  /** Required. The ID of the project against which to make the request. */
  projectId: string;
  /** Request body */
  body?: RollbackRequest;
}

export const RollbackProjectsRequest =
  /*@__PURE__*/ Schema.Struct({
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    body: Schema.optional(RollbackRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/projects/{projectId}:rollback",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<RollbackProjectsRequest>;

export type RollbackProjectsResponse = RollbackResponse;
export const RollbackProjectsResponse = /*@__PURE__*/ RollbackResponse;

export type RollbackProjectsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Rolls back a transaction. */
export const rollbackProjects: API.OperationMethod<
  RollbackProjectsRequest,
  RollbackProjectsResponse,
  RollbackProjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RollbackProjectsRequest,
  output: RollbackProjectsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ExportProjectsRequest {
  /** Required. Project ID against which to make the request. */
  projectId: string;
  /** Request body */
  body?: GoogleDatastoreAdminV1ExportEntitiesRequest;
}

export const ExportProjectsRequest = /*@__PURE__*/ Schema.Struct({
  projectId: Schema.String.pipe(T.HttpPath("projectId")),
  body: Schema.optional(GoogleDatastoreAdminV1ExportEntitiesRequest).pipe(
    T.HttpBody(),
  ),
}).pipe(
  T.Http({
    method: "POST",
    path: "v1/projects/{projectId}:export",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Codec<ExportProjectsRequest>;

export type ExportProjectsResponse = GoogleLongrunningOperation;
export const ExportProjectsResponse = /*@__PURE__*/ GoogleLongrunningOperation;

export type ExportProjectsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Exports a copy of all or a subset of entities from Google Cloud Datastore to another storage system, such as Google Cloud Storage. Recent updates to entities may not be reflected in the export. The export occurs in the background and its progress can be monitored and managed via the Operation resource that is created. The output of an export may only be used once the associated operation is done. If an export operation is cancelled before completion it may leave partial data behind in Google Cloud Storage. */
export const exportProjects: API.OperationMethod<
  ExportProjectsRequest,
  ExportProjectsResponse,
  ExportProjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ExportProjectsRequest,
  output: ExportProjectsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface RunAggregationQueryProjectsRequest {
  /** Required. The ID of the project against which to make the request. */
  projectId: string;
  /** Request body */
  body?: RunAggregationQueryRequest;
}

export const RunAggregationQueryProjectsRequest =
  /*@__PURE__*/ Schema.Struct({
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    body: Schema.optional(RunAggregationQueryRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/projects/{projectId}:runAggregationQuery",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<RunAggregationQueryProjectsRequest>;

export type RunAggregationQueryProjectsResponse = RunAggregationQueryResponse;
export const RunAggregationQueryProjectsResponse =
  /*@__PURE__*/ RunAggregationQueryResponse;

export type RunAggregationQueryProjectsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Runs an aggregation query. */
export const runAggregationQueryProjects: API.OperationMethod<
  RunAggregationQueryProjectsRequest,
  RunAggregationQueryProjectsResponse,
  RunAggregationQueryProjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RunAggregationQueryProjectsRequest,
  output: RunAggregationQueryProjectsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface RunQueryProjectsRequest {
  /** Required. The ID of the project against which to make the request. */
  projectId: string;
  /** Request body */
  body?: RunQueryRequest;
}

export const RunQueryProjectsRequest =
  /*@__PURE__*/ Schema.Struct({
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    body: Schema.optional(RunQueryRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/projects/{projectId}:runQuery",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<RunQueryProjectsRequest>;

export type RunQueryProjectsResponse = RunQueryResponse;
export const RunQueryProjectsResponse = /*@__PURE__*/ RunQueryResponse;

export type RunQueryProjectsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Queries for entities. */
export const runQueryProjects: API.OperationMethod<
  RunQueryProjectsRequest,
  RunQueryProjectsResponse,
  RunQueryProjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RunQueryProjectsRequest,
  output: RunQueryProjectsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ImportProjectsRequest {
  /** Required. Project ID against which to make the request. */
  projectId: string;
  /** Request body */
  body?: GoogleDatastoreAdminV1ImportEntitiesRequest;
}

export const ImportProjectsRequest = /*@__PURE__*/ Schema.Struct({
  projectId: Schema.String.pipe(T.HttpPath("projectId")),
  body: Schema.optional(GoogleDatastoreAdminV1ImportEntitiesRequest).pipe(
    T.HttpBody(),
  ),
}).pipe(
  T.Http({
    method: "POST",
    path: "v1/projects/{projectId}:import",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Codec<ImportProjectsRequest>;

export type ImportProjectsResponse = GoogleLongrunningOperation;
export const ImportProjectsResponse = /*@__PURE__*/ GoogleLongrunningOperation;

export type ImportProjectsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Imports entities into Google Cloud Datastore. Existing entities with the same key are overwritten. The import occurs in the background and its progress can be monitored and managed via the Operation resource that is created. If an ImportEntities operation is cancelled, it is possible that a subset of the data has already been imported to Cloud Datastore. */
export const importProjects: API.OperationMethod<
  ImportProjectsRequest,
  ImportProjectsResponse,
  ImportProjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ImportProjectsRequest,
  output: ImportProjectsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface LookupProjectsRequest {
  /** Required. The ID of the project against which to make the request. */
  projectId: string;
  /** Request body */
  body?: LookupRequest;
}

export const LookupProjectsRequest = /*@__PURE__*/ Schema.Struct({
  projectId: Schema.String.pipe(T.HttpPath("projectId")),
  body: Schema.optional(LookupRequest).pipe(T.HttpBody()),
}).pipe(
  T.Http({
    method: "POST",
    path: "v1/projects/{projectId}:lookup",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Codec<LookupProjectsRequest>;

export type LookupProjectsResponse = LookupResponse;
export const LookupProjectsResponse = /*@__PURE__*/ LookupResponse;

export type LookupProjectsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Looks up entities by key. */
export const lookupProjects: API.OperationMethod<
  LookupProjectsRequest,
  LookupProjectsResponse,
  LookupProjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: LookupProjectsRequest,
  output: LookupProjectsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ReserveIdsProjectsRequest {
  /** Required. The ID of the project against which to make the request. */
  projectId: string;
  /** Request body */
  body?: ReserveIdsRequest;
}

export const ReserveIdsProjectsRequest =
  /*@__PURE__*/ Schema.Struct({
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    body: Schema.optional(ReserveIdsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/projects/{projectId}:reserveIds",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<ReserveIdsProjectsRequest>;

export type ReserveIdsProjectsResponse = ReserveIdsResponse;
export const ReserveIdsProjectsResponse = /*@__PURE__*/ ReserveIdsResponse;

export type ReserveIdsProjectsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Prevents the supplied keys' IDs from being auto-allocated by Cloud Datastore. */
export const reserveIdsProjects: API.OperationMethod<
  ReserveIdsProjectsRequest,
  ReserveIdsProjectsResponse,
  ReserveIdsProjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ReserveIdsProjectsRequest,
  output: ReserveIdsProjectsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CommitProjectsRequest {
  /** Required. The ID of the project against which to make the request. */
  projectId: string;
  /** Request body */
  body?: CommitRequest;
}

export const CommitProjectsRequest = /*@__PURE__*/ Schema.Struct({
  projectId: Schema.String.pipe(T.HttpPath("projectId")),
  body: Schema.optional(CommitRequest).pipe(T.HttpBody()),
}).pipe(
  T.Http({
    method: "POST",
    path: "v1/projects/{projectId}:commit",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Codec<CommitProjectsRequest>;

export type CommitProjectsResponse = CommitResponse;
export const CommitProjectsResponse = /*@__PURE__*/ CommitResponse;

export type CommitProjectsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Commits a transaction, optionally creating, deleting or modifying some entities. */
export const commitProjects: API.OperationMethod<
  CommitProjectsRequest,
  CommitProjectsResponse,
  CommitProjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CommitProjectsRequest,
  output: CommitProjectsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface AllocateIdsProjectsRequest {
  /** Required. The ID of the project against which to make the request. */
  projectId: string;
  /** Request body */
  body?: AllocateIdsRequest;
}

export const AllocateIdsProjectsRequest =
  /*@__PURE__*/ Schema.Struct({
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    body: Schema.optional(AllocateIdsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/projects/{projectId}:allocateIds",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<AllocateIdsProjectsRequest>;

export type AllocateIdsProjectsResponse = AllocateIdsResponse;
export const AllocateIdsProjectsResponse = /*@__PURE__*/ AllocateIdsResponse;

export type AllocateIdsProjectsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Allocates IDs for the given keys, which is useful for referencing an entity before it is inserted. */
export const allocateIdsProjects: API.OperationMethod<
  AllocateIdsProjectsRequest,
  AllocateIdsProjectsResponse,
  AllocateIdsProjectsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AllocateIdsProjectsRequest,
  output: AllocateIdsProjectsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsOperationsRequest {
  /** The name of the operation resource. */
  name: string;
}

export const GetProjectsOperationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsOperationsRequest>;

export type GetProjectsOperationsResponse = GoogleLongrunningOperation;
export const GetProjectsOperationsResponse =
  /*@__PURE__*/ GoogleLongrunningOperation;

export type GetProjectsOperationsError = DefaultErrors | NotFound | Forbidden;

/** Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service. */
export const getProjectsOperations: API.OperationMethod<
  GetProjectsOperationsRequest,
  GetProjectsOperationsResponse,
  GetProjectsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsOperationsRequest,
  output: GetProjectsOperationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsOperationsRequest {
  /** The name of the operation resource to be deleted. */
  name: string;
}

export const DeleteProjectsOperationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsOperationsRequest>;

export type DeleteProjectsOperationsResponse = Empty;
export const DeleteProjectsOperationsResponse = /*@__PURE__*/ Empty;

export type DeleteProjectsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. */
export const deleteProjectsOperations: API.OperationMethod<
  DeleteProjectsOperationsRequest,
  DeleteProjectsOperationsResponse,
  DeleteProjectsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsOperationsRequest,
  output: DeleteProjectsOperationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CancelProjectsOperationsRequest {
  /** The name of the operation resource to be cancelled. */
  name: string;
}

export const CancelProjectsOperationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:cancel", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<CancelProjectsOperationsRequest>;

export type CancelProjectsOperationsResponse = Empty;
export const CancelProjectsOperationsResponse = /*@__PURE__*/ Empty;

export type CancelProjectsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`. */
export const cancelProjectsOperations: API.OperationMethod<
  CancelProjectsOperationsRequest,
  CancelProjectsOperationsResponse,
  CancelProjectsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CancelProjectsOperationsRequest,
  output: CancelProjectsOperationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsOperationsRequest {
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

export const ListProjectsOperationsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}/operations" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsOperationsRequest>;

export type ListProjectsOperationsResponse =
  GoogleLongrunningListOperationsResponse;
export const ListProjectsOperationsResponse =
  /*@__PURE__*/ GoogleLongrunningListOperationsResponse;

export type ListProjectsOperationsError = DefaultErrors | NotFound | Forbidden;

/** Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. */
export const listProjectsOperations: API.PaginatedOperationMethod<
  ListProjectsOperationsRequest,
  ListProjectsOperationsResponse,
  ListProjectsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsOperationsRequest,
  output: ListProjectsOperationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsIndexesRequest {
  /** Project ID against which to make the request. */
  projectId: string;
  /** The resource ID of the index to delete. */
  indexId: string;
}

export const DeleteProjectsIndexesRequest =
  /*@__PURE__*/ Schema.Struct({
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    indexId: Schema.String.pipe(T.HttpPath("indexId")),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "v1/projects/{projectId}/indexes/{indexId}",
    }),
    svc,
  ) as unknown as Schema.Codec<DeleteProjectsIndexesRequest>;

export type DeleteProjectsIndexesResponse = GoogleLongrunningOperation;
export const DeleteProjectsIndexesResponse =
  /*@__PURE__*/ GoogleLongrunningOperation;

export type DeleteProjectsIndexesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes an existing index. An index can only be deleted if it is in a `READY` or `ERROR` state. On successful execution of the request, the index will be in a `DELETING` state. And on completion of the returned google.longrunning.Operation, the index will be removed. During index deletion, the process could result in an error, in which case the index will move to the `ERROR` state. The process can be recovered by fixing the data that caused the error, followed by calling delete again. */
export const deleteProjectsIndexes: API.OperationMethod<
  DeleteProjectsIndexesRequest,
  DeleteProjectsIndexesResponse,
  DeleteProjectsIndexesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProjectsIndexesRequest,
  output: DeleteProjectsIndexesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsIndexesRequest {
  filter?: string;
  /** The next_page_token value returned from a previous List request, if any. */
  pageToken?: string;
  /** Project ID against which to make the request. */
  projectId: string;
  /** The maximum number of items to return. If zero, then all results will be returned. */
  pageSize?: number;
}

export const ListProjectsIndexesRequest =
  /*@__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/projects/{projectId}/indexes" }),
    svc,
  ) as unknown as Schema.Codec<ListProjectsIndexesRequest>;

export type ListProjectsIndexesResponse =
  GoogleDatastoreAdminV1ListIndexesResponse;
export const ListProjectsIndexesResponse =
  /*@__PURE__*/ GoogleDatastoreAdminV1ListIndexesResponse;

export type ListProjectsIndexesError = DefaultErrors | NotFound | Forbidden;

/** Lists the indexes that match the specified filters. Datastore uses an eventually consistent query to fetch the list of indexes and may occasionally return stale results. */
export const listProjectsIndexes: API.PaginatedOperationMethod<
  ListProjectsIndexesRequest,
  ListProjectsIndexesResponse,
  ListProjectsIndexesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsIndexesRequest,
  output: ListProjectsIndexesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateProjectsIndexesRequest {
  /** Project ID against which to make the request. */
  projectId: string;
  /** Request body */
  body?: GoogleDatastoreAdminV1Index;
}

export const CreateProjectsIndexesRequest =
  /*@__PURE__*/ Schema.Struct({
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    body: Schema.optional(GoogleDatastoreAdminV1Index).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/projects/{projectId}/indexes",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CreateProjectsIndexesRequest>;

export type CreateProjectsIndexesResponse = GoogleLongrunningOperation;
export const CreateProjectsIndexesResponse =
  /*@__PURE__*/ GoogleLongrunningOperation;

export type CreateProjectsIndexesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates the specified index. A newly created index's initial state is `CREATING`. On completion of the returned google.longrunning.Operation, the state will be `READY`. If the index already exists, the call will return an `ALREADY_EXISTS` status. During index creation, the process could result in an error, in which case the index will move to the `ERROR` state. The process can be recovered by fixing the data that caused the error, removing the index with delete, then re-creating the index with create. Indexes with a single property cannot be created. */
export const createProjectsIndexes: API.OperationMethod<
  CreateProjectsIndexesRequest,
  CreateProjectsIndexesResponse,
  CreateProjectsIndexesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProjectsIndexesRequest,
  output: CreateProjectsIndexesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsIndexesRequest {
  /** Project ID against which to make the request. */
  projectId: string;
  /** The resource ID of the index to get. */
  indexId: string;
}

export const GetProjectsIndexesRequest =
  /*@__PURE__*/ Schema.Struct({
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    indexId: Schema.String.pipe(T.HttpPath("indexId")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "v1/projects/{projectId}/indexes/{indexId}",
    }),
    svc,
  ) as unknown as Schema.Codec<GetProjectsIndexesRequest>;

export type GetProjectsIndexesResponse = GoogleDatastoreAdminV1Index;
export const GetProjectsIndexesResponse =
  /*@__PURE__*/ GoogleDatastoreAdminV1Index;

export type GetProjectsIndexesError = DefaultErrors | NotFound | Forbidden;

/** Gets an index. */
export const getProjectsIndexes: API.OperationMethod<
  GetProjectsIndexesRequest,
  GetProjectsIndexesResponse,
  GetProjectsIndexesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProjectsIndexesRequest,
  output: GetProjectsIndexesResponse,
  errors: [NotFound, Forbidden],
}));
