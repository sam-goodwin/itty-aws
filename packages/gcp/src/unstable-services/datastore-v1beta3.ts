// ==========================================================================
// Cloud Datastore API (datastore v1beta3)
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
  name: "datastore",
  version: "v1beta3",
  rootUrl: "https://datastore.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface GoogleDatastoreAdminV1beta1CommonMetadata {
  /** The time that work began on the operation. */
  startTime?: string;
  /** The time the operation ended, either successfully or otherwise. */
  endTime?: string;
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
  /** The type of the operation. Can be used as a filter in ListOperationsRequest. */
  operationType?:
    | "OPERATION_TYPE_UNSPECIFIED"
    | "EXPORT_ENTITIES"
    | "IMPORT_ENTITIES"
    | (string & {});
  /** The client-assigned labels which were provided when the operation was created. May also include additional labels. */
  labels?: Record<string, string>;
}

export const GoogleDatastoreAdminV1beta1CommonMetadata: Schema.Schema<GoogleDatastoreAdminV1beta1CommonMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    operationType: Schema.optional(Schema.String),
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "GoogleDatastoreAdminV1beta1CommonMetadata" });

export interface GoogleDatastoreAdminV1beta1Progress {
  /** The amount of work that has been completed. Note that this may be greater than work_estimated. */
  workCompleted?: string;
  /** An estimate of how much work needs to be performed. May be zero if the work estimate is unavailable. */
  workEstimated?: string;
}

export const GoogleDatastoreAdminV1beta1Progress: Schema.Schema<GoogleDatastoreAdminV1beta1Progress> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    workCompleted: Schema.optional(Schema.String),
    workEstimated: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleDatastoreAdminV1beta1Progress" });

export interface GoogleDatastoreAdminV1beta1EntityFilter {
  /** If empty, then this represents all kinds. */
  kinds?: ReadonlyArray<string>;
  /** An empty list represents all namespaces. This is the preferred usage for projects that don't use namespaces. An empty string element represents the default namespace. This should be used if the project has data in non-default namespaces, but doesn't want to include them. Each namespace in this list must be unique. */
  namespaceIds?: ReadonlyArray<string>;
}

export const GoogleDatastoreAdminV1beta1EntityFilter: Schema.Schema<GoogleDatastoreAdminV1beta1EntityFilter> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kinds: Schema.optional(Schema.Array(Schema.String)),
    namespaceIds: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleDatastoreAdminV1beta1EntityFilter" });

export interface GoogleDatastoreAdminV1beta1ImportEntitiesMetadata {
  /** Metadata common to all Datastore Admin operations. */
  common?: GoogleDatastoreAdminV1beta1CommonMetadata;
  /** An estimate of the number of entities processed. */
  progressEntities?: GoogleDatastoreAdminV1beta1Progress;
  /** An estimate of the number of bytes processed. */
  progressBytes?: GoogleDatastoreAdminV1beta1Progress;
  /** The location of the import metadata file. This will be the same value as the google.datastore.admin.v1beta1.ExportEntitiesResponse.output_url field. */
  inputUrl?: string;
  /** Description of which entities are being imported. */
  entityFilter?: GoogleDatastoreAdminV1beta1EntityFilter;
}

export const GoogleDatastoreAdminV1beta1ImportEntitiesMetadata: Schema.Schema<GoogleDatastoreAdminV1beta1ImportEntitiesMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    common: Schema.optional(GoogleDatastoreAdminV1beta1CommonMetadata),
    progressEntities: Schema.optional(GoogleDatastoreAdminV1beta1Progress),
    progressBytes: Schema.optional(GoogleDatastoreAdminV1beta1Progress),
    inputUrl: Schema.optional(Schema.String),
    entityFilter: Schema.optional(GoogleDatastoreAdminV1beta1EntityFilter),
  }).annotate({
    identifier: "GoogleDatastoreAdminV1beta1ImportEntitiesMetadata",
  });

export interface KindExpression {
  /** The name of the kind. */
  name?: string;
}

export const KindExpression: Schema.Schema<KindExpression> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "KindExpression" });

export interface PropertyReference {
  /** A reference to a property. Requires: * MUST be a dot-delimited (`.`) string of segments, where each segment conforms to entity property name limitations. */
  name?: string;
}

export const PropertyReference: Schema.Schema<PropertyReference> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "PropertyReference" });

export interface PartitionId {
  /** The ID of the project to which the entities belong. */
  projectId?: string;
  /** If not empty, the ID of the namespace to which the entities belong. */
  namespaceId?: string;
}

export const PartitionId: Schema.Schema<PartitionId> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    projectId: Schema.optional(Schema.String),
    namespaceId: Schema.optional(Schema.String),
  }).annotate({ identifier: "PartitionId" });

export interface PathElement {
  /** The auto-allocated ID of the entity. Never equal to zero. Values less than zero are discouraged and may not be supported in the future. */
  id?: string;
  /** The kind of the entity. A kind matching regex `__.*__` is reserved/read-only. A kind must not contain more than 1500 bytes when UTF-8 encoded. Cannot be `""`. Must be valid UTF-8 bytes. Legacy values that are not valid UTF-8 are encoded as `__bytes__` where `` is the base-64 encoding of the bytes. */
  kind?: string;
  /** The name of the entity. A name matching regex `__.*__` is reserved/read-only. A name must not be more than 1500 bytes when UTF-8 encoded. Cannot be `""`. Must be valid UTF-8 bytes. Legacy values that are not valid UTF-8 are encoded as `__bytes__` where `` is the base-64 encoding of the bytes. */
  name?: string;
}

export const PathElement: Schema.Schema<PathElement> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "PathElement" });

export interface Key {
  /** Entities are partitioned into subsets, currently identified by a project ID and namespace ID. Queries are scoped to a single partition. */
  partitionId?: PartitionId;
  /** The entity path. An entity path consists of one or more elements composed of a kind and a string or numerical identifier, which identify entities. The first element identifies a _root entity_, the second element identifies a _child_ of the root entity, the third element identifies a child of the second entity, and so forth. The entities identified by all prefixes of the path are called the element's _ancestors_. An entity path is always fully complete: *all* of the entity's ancestors are required to be in the path along with the entity identifier itself. The only exception is that in some documented cases, the identifier in the last path element (for the entity) itself may be omitted. For example, the last path element of the key of `Mutation.insert` may have no identifier. A path can never be empty, and a path can have at most 100 elements. */
  path?: ReadonlyArray<PathElement>;
}

export const Key: Schema.Schema<Key> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    partitionId: Schema.optional(PartitionId),
    path: Schema.optional(Schema.Array(PathElement)),
  }).annotate({ identifier: "Key" });

export interface Entity {
  /** The entity's key. An entity must have a key, unless otherwise documented (for example, an entity in `Value.entity_value` may have no key). An entity's kind is its key path's last element's kind, or null if it has no key. */
  key?: Key;
  /** The entity's properties. The map's keys are property names. A property name matching regex `__.*__` is reserved. A reserved property name is forbidden in certain documented contexts. The map keys, represented as UTF-8, must not exceed 1,500 bytes and cannot be empty. */
  properties?: Record<string, Value>;
}

export const Entity: Schema.Schema<Entity> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      key: Schema.optional(Key),
      properties: Schema.optional(Schema.Record(Schema.String, Value)),
    }),
  ).annotate({ identifier: "Entity" }) as any as Schema.Schema<Entity>;

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

export interface ArrayValue {
  /** Values in the array. The order of values in an array is preserved as long as all values have identical settings for 'exclude_from_indexes'. */
  values?: ReadonlyArray<Value>;
}

export const ArrayValue: Schema.Schema<ArrayValue> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      values: Schema.optional(Schema.Array(Value)),
    }),
  ).annotate({ identifier: "ArrayValue" }) as any as Schema.Schema<ArrayValue>;

export interface Value {
  /** A boolean value. */
  booleanValue?: boolean;
  /** A double value. */
  doubleValue?: number;
  /** A blob value. May have at most 1,000,000 bytes. When `exclude_from_indexes` is false, may have at most 1500 bytes. In JSON requests, must be base64-encoded. */
  blobValue?: string;
  /** If the value should be excluded from all indexes including those defined explicitly. */
  excludeFromIndexes?: boolean;
  /** A key value. */
  keyValue?: Key;
  /** The `meaning` field should only be populated for backwards compatibility. */
  meaning?: number;
  /** An entity value. - May have no key. - May have a key with an incomplete key path. - May have a reserved/read-only key. */
  entityValue?: Entity;
  /** An integer value. */
  integerValue?: string;
  /** A geo point value representing a point on the surface of Earth. */
  geoPointValue?: LatLng;
  /** A timestamp value. When stored in the Datastore, precise only to microseconds; any additional precision is rounded down. */
  timestampValue?: string;
  /** A null value. */
  nullValue?: "NULL_VALUE" | (string & {});
  /** An array value. Cannot contain another array value. A `Value` instance that sets field `array_value` must not set fields `meaning` or `exclude_from_indexes`. */
  arrayValue?: ArrayValue;
  /** A UTF-8 encoded string value. When `exclude_from_indexes` is false (it is indexed) , may have at most 1500 bytes. Otherwise, may be set to at most 1,000,000 bytes. */
  stringValue?: string;
}

export const Value: Schema.Schema<Value> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      booleanValue: Schema.optional(Schema.Boolean),
      doubleValue: Schema.optional(Schema.Number),
      blobValue: Schema.optional(Schema.String),
      excludeFromIndexes: Schema.optional(Schema.Boolean),
      keyValue: Schema.optional(Key),
      meaning: Schema.optional(Schema.Number),
      entityValue: Schema.optional(Entity),
      integerValue: Schema.optional(Schema.String),
      geoPointValue: Schema.optional(LatLng),
      timestampValue: Schema.optional(Schema.String),
      nullValue: Schema.optional(Schema.String),
      arrayValue: Schema.optional(ArrayValue),
      stringValue: Schema.optional(Schema.String),
    }),
  ).annotate({ identifier: "Value" }) as any as Schema.Schema<Value>;

export interface FindNearest {
  /** Required. An indexed vector property to search upon. Only documents which contain vectors whose dimensionality match the query_vector can be returned. */
  vectorProperty?: PropertyReference;
  /** Required. The number of nearest neighbors to return. Must be a positive integer of no more than 100. */
  limit?: number;
  /** Required. The Distance Measure to use, required. */
  distanceMeasure?:
    | "DISTANCE_MEASURE_UNSPECIFIED"
    | "EUCLIDEAN"
    | "COSINE"
    | "DOT_PRODUCT"
    | (string & {});
  /** Optional. Optional name of the field to output the result of the vector distance calculation. Must conform to entity property limitations. */
  distanceResultProperty?: string;
  /** Optional. Option to specify a threshold for which no less similar documents will be returned. The behavior of the specified `distance_measure` will affect the meaning of the distance threshold. Since DOT_PRODUCT distances increase when the vectors are more similar, the comparison is inverted. * For EUCLIDEAN, COSINE: WHERE distance <= distance_threshold * For DOT_PRODUCT: WHERE distance >= distance_threshold */
  distanceThreshold?: number;
  /** Required. The query vector that we are searching on. Must be a vector of no more than 2048 dimensions. */
  queryVector?: Value;
}

export const FindNearest: Schema.Schema<FindNearest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    vectorProperty: Schema.optional(PropertyReference),
    limit: Schema.optional(Schema.Number),
    distanceMeasure: Schema.optional(Schema.String),
    distanceResultProperty: Schema.optional(Schema.String),
    distanceThreshold: Schema.optional(Schema.Number),
    queryVector: Schema.optional(Value),
  }).annotate({ identifier: "FindNearest" });

export interface Projection {
  /** The property to project. */
  property?: PropertyReference;
}

export const Projection: Schema.Schema<Projection> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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

export const PropertyOrder: Schema.Schema<PropertyOrder> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    property: Schema.optional(PropertyReference),
    direction: Schema.optional(Schema.String),
  }).annotate({ identifier: "PropertyOrder" });

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

export interface PropertyFilter {
  /** The value to compare the property to. */
  value?: Value;
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
}

export const PropertyFilter: Schema.Schema<PropertyFilter> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Value),
    property: Schema.optional(PropertyReference),
    op: Schema.optional(Schema.String),
  }).annotate({ identifier: "PropertyFilter" });

export interface Filter {
  /** A composite filter. */
  compositeFilter?: CompositeFilter;
  /** A filter on a property. */
  propertyFilter?: PropertyFilter;
}

export const Filter: Schema.Schema<Filter> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      compositeFilter: Schema.optional(CompositeFilter),
      propertyFilter: Schema.optional(PropertyFilter),
    }),
  ).annotate({ identifier: "Filter" }) as any as Schema.Schema<Filter>;

export interface Query {
  /** An ending point for the query results. Query cursors are returned in query result batches and [can only be used to limit the same query](https://cloud.google.com/datastore/docs/concepts/queries#cursors_limits_and_offsets). */
  endCursor?: string;
  /** The kinds to query (if empty, returns entities of all kinds). Currently at most 1 kind may be specified. */
  kind?: ReadonlyArray<KindExpression>;
  /** The number of results to skip. Applies before limit, but after all other constraints. Optional. Must be >= 0 if specified. */
  offset?: number;
  /** The maximum number of results to return. Applies after all other constraints. Optional. Unspecified is interpreted as no limit. Must be >= 0 if specified. */
  limit?: number;
  /** Optional. A potential Nearest Neighbors Search. Applies after all other filters and ordering. Finds the closest vector embeddings to the given query vector. */
  findNearest?: FindNearest;
  /** The projection to return. Defaults to returning all properties. */
  projection?: ReadonlyArray<Projection>;
  /** A starting point for the query results. Query cursors are returned in query result batches and [can only be used to continue the same query](https://cloud.google.com/datastore/docs/concepts/queries#cursors_limits_and_offsets). */
  startCursor?: string;
  /** The properties to make distinct. The query results will contain the first result for each distinct combination of values for the given properties (if empty, all results are returned). Requires: * If `order` is specified, the set of distinct on properties must appear before the non-distinct on properties in `order`. */
  distinctOn?: ReadonlyArray<PropertyReference>;
  /** The order to apply to the query results (if empty, order is unspecified). */
  order?: ReadonlyArray<PropertyOrder>;
  /** The filter to apply. */
  filter?: Filter;
}

export const Query: Schema.Schema<Query> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    endCursor: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.Array(KindExpression)),
    offset: Schema.optional(Schema.Number),
    limit: Schema.optional(Schema.Number),
    findNearest: Schema.optional(FindNearest),
    projection: Schema.optional(Schema.Array(Projection)),
    startCursor: Schema.optional(Schema.String),
    distinctOn: Schema.optional(Schema.Array(PropertyReference)),
    order: Schema.optional(Schema.Array(PropertyOrder)),
    filter: Schema.optional(Filter),
  }).annotate({ identifier: "Query" });

export interface ReserveIdsRequest {
  /** The ID of the database against which to make the request. '(default)' is not allowed; please use empty string '' to refer the default database. */
  databaseId?: string;
  /** Required. A list of keys with complete key paths whose numeric IDs should not be auto-allocated. */
  keys?: ReadonlyArray<Key>;
}

export const ReserveIdsRequest: Schema.Schema<ReserveIdsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    databaseId: Schema.optional(Schema.String),
    keys: Schema.optional(Schema.Array(Key)),
  }).annotate({ identifier: "ReserveIdsRequest" });

export interface ReserveIdsResponse {}

export const ReserveIdsResponse: Schema.Schema<ReserveIdsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "ReserveIdsResponse",
  });

export interface EntityResult {
  /** The version of the entity, a strictly positive number that monotonically increases with changes to the entity. This field is set for `FULL` entity results. For missing entities in `LookupResponse`, this is the version of the snapshot that was used to look up the entity, and it is always set except for eventually consistent reads. */
  version?: string;
  /** The time at which the entity was created. This field is set for `FULL` entity results. If this entity is missing, this field will not be set. */
  createTime?: string;
  /** The time at which the entity was last changed. This field is set for `FULL` entity results. If this entity is missing, this field will not be set. */
  updateTime?: string;
  /** A cursor that points to the position after the result entity. Set only when the `EntityResult` is part of a `QueryResultBatch` message. */
  cursor?: string;
  /** The resulting entity. */
  entity?: Entity;
}

export const EntityResult: Schema.Schema<EntityResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    version: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    cursor: Schema.optional(Schema.String),
    entity: Schema.optional(Entity),
  }).annotate({ identifier: "EntityResult" });

export interface BeginTransactionResponse {
  /** The transaction identifier (always present). */
  transaction?: string;
}

export const BeginTransactionResponse: Schema.Schema<BeginTransactionResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    transaction: Schema.optional(Schema.String),
  }).annotate({ identifier: "BeginTransactionResponse" });

export interface PropertyMask {
  /** The paths to the properties covered by this mask. A path is a list of property names separated by dots (`.`), for example `foo.bar` means the property `bar` inside the entity property `foo` inside the entity associated with this path. If a property name contains a dot `.` or a backslash `\`, then that name must be escaped. A path must not be empty, and may not reference a value inside an array value. */
  paths?: ReadonlyArray<string>;
}

export const PropertyMask: Schema.Schema<PropertyMask> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    paths: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "PropertyMask" });

export interface ExplainOptions {
  /** Optional. Whether to execute this query. When false (the default), the query will be planned, returning only metrics from the planning stages. When true, the query will be planned and executed, returning the full query results along with both planning and execution stage metrics. */
  analyze?: boolean;
}

export const ExplainOptions: Schema.Schema<ExplainOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    analyze: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "ExplainOptions" });

export interface GqlQueryParameter {
  /** A value parameter. */
  value?: Value;
  /** A query cursor. Query cursors are returned in query result batches. */
  cursor?: string;
}

export const GqlQueryParameter: Schema.Schema<GqlQueryParameter> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Value),
    cursor: Schema.optional(Schema.String),
  }).annotate({ identifier: "GqlQueryParameter" });

export interface GqlQuery {
  /** When false, the query string must not contain any literals and instead must bind all values. For example, `SELECT * FROM Kind WHERE a = 'string literal'` is not allowed, while `SELECT * FROM Kind WHERE a = @value` is. */
  allowLiterals?: boolean;
  /** For each non-reserved named binding site in the query string, there must be a named parameter with that name, but not necessarily the inverse. Key must match regex `A-Za-z_$*`, must not match regex `__.*__`, and must not be `""`. */
  namedBindings?: Record<string, GqlQueryParameter>;
  /** Numbered binding site @1 references the first numbered parameter, effectively using 1-based indexing, rather than the usual 0. For each binding site numbered i in `query_string`, there must be an i-th numbered parameter. The inverse must also be true. */
  positionalBindings?: ReadonlyArray<GqlQueryParameter>;
  /** A string of the format described [here](https://cloud.google.com/datastore/docs/apis/gql/gql_reference). */
  queryString?: string;
}

export const GqlQuery: Schema.Schema<GqlQuery> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allowLiterals: Schema.optional(Schema.Boolean),
    namedBindings: Schema.optional(
      Schema.Record(Schema.String, GqlQueryParameter),
    ),
    positionalBindings: Schema.optional(Schema.Array(GqlQueryParameter)),
    queryString: Schema.optional(Schema.String),
  }).annotate({ identifier: "GqlQuery" });

export interface ReadOptions {
  /** The non-transactional read consistency to use. */
  readConsistency?:
    | "READ_CONSISTENCY_UNSPECIFIED"
    | "STRONG"
    | "EVENTUAL"
    | (string & {});
  /** Reads entities as they were at the given time. This value is only supported for Cloud Firestore in Datastore mode. This must be a microsecond precision timestamp within the past one hour, or if Point-in-Time Recovery is enabled, can additionally be a whole minute timestamp within the past 7 days. */
  readTime?: string;
  /** The identifier of the transaction in which to read. A transaction identifier is returned by a call to Datastore.BeginTransaction. */
  transaction?: string;
}

export const ReadOptions: Schema.Schema<ReadOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    readConsistency: Schema.optional(Schema.String),
    readTime: Schema.optional(Schema.String),
    transaction: Schema.optional(Schema.String),
  }).annotate({ identifier: "ReadOptions" });

export interface RunQueryRequest {
  /** The properties to return. This field must not be set for a projection query. See LookupRequest.property_mask. */
  propertyMask?: PropertyMask;
  /** Optional. Explain options for the query. If set, additional query statistics will be returned. If not, only query results will be returned. */
  explainOptions?: ExplainOptions;
  /** The GQL query to run. This query must be a non-aggregation query. */
  gqlQuery?: GqlQuery;
  /** Entities are partitioned into subsets, identified by a partition ID. Queries are scoped to a single partition. This partition ID is normalized with the standard default context partition ID. */
  partitionId?: PartitionId;
  /** The query to run. */
  query?: Query;
  /** The options for this query. */
  readOptions?: ReadOptions;
}

export const RunQueryRequest: Schema.Schema<RunQueryRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    propertyMask: Schema.optional(PropertyMask),
    explainOptions: Schema.optional(ExplainOptions),
    gqlQuery: Schema.optional(GqlQuery),
    partitionId: Schema.optional(PartitionId),
    query: Schema.optional(Query),
    readOptions: Schema.optional(ReadOptions),
  }).annotate({ identifier: "RunQueryRequest" });

export interface LookupRequest {
  /** Required. Keys of entities to look up. */
  keys?: ReadonlyArray<Key>;
  /** The properties to return. Defaults to returning all properties. If this field is set and an entity has a property not referenced in the mask, it will be absent from LookupResponse.found.entity.properties. The entity's key is always returned. */
  propertyMask?: PropertyMask;
  /** The options for this lookup request. */
  readOptions?: ReadOptions;
}

export const LookupRequest: Schema.Schema<LookupRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    keys: Schema.optional(Schema.Array(Key)),
    propertyMask: Schema.optional(PropertyMask),
    readOptions: Schema.optional(ReadOptions),
  }).annotate({ identifier: "LookupRequest" });

export interface AggregationResult {
  /** The result of the aggregation functions, ex: `COUNT(*) AS total_entities`. The key is the alias assigned to the aggregation function on input and the size of this map equals the number of aggregation functions in the query. */
  aggregateProperties?: Record<string, Value>;
}

export const AggregationResult: Schema.Schema<AggregationResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    aggregateProperties: Schema.optional(Schema.Record(Schema.String, Value)),
  }).annotate({ identifier: "AggregationResult" });

export interface ExecutionStats {
  /** Total billable read operations. */
  readOperations?: string;
  /** Total time to execute the query in the backend. */
  executionDuration?: string;
  /** Total number of results returned, including documents, projections, aggregation results, keys. */
  resultsReturned?: string;
  /** Debugging statistics from the execution of the query. Note that the debugging stats are subject to change as Firestore evolves. It could include: { "indexes_entries_scanned": "1000", "documents_scanned": "20", "billing_details" : { "documents_billable": "20", "index_entries_billable": "1000", "min_query_cost": "0" } } */
  debugStats?: Record<string, unknown>;
}

export const ExecutionStats: Schema.Schema<ExecutionStats> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    readOperations: Schema.optional(Schema.String),
    executionDuration: Schema.optional(Schema.String),
    resultsReturned: Schema.optional(Schema.String),
    debugStats: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "ExecutionStats" });

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
  /** Aggregated stats from the execution of the query. Only present when ExplainOptions.analyze is set to true. */
  executionStats?: ExecutionStats;
  /** Planning phase information for the query. */
  planSummary?: PlanSummary;
}

export const ExplainMetrics: Schema.Schema<ExplainMetrics> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    executionStats: Schema.optional(ExecutionStats),
    planSummary: Schema.optional(PlanSummary),
  }).annotate({ identifier: "ExplainMetrics" });

export interface Sum {
  /** The property to aggregate on. */
  property?: PropertyReference;
}

export const Sum: Schema.Schema<Sum> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    property: Schema.optional(PropertyReference),
  }).annotate({ identifier: "Sum" });

export interface Count {
  /** Optional. Optional constraint on the maximum number of entities to count. This provides a way to set an upper bound on the number of entities to scan, limiting latency, and cost. Unspecified is interpreted as no bound. If a zero value is provided, a count result of zero should always be expected. High-Level Example: ``` AGGREGATE COUNT_UP_TO(1000) OVER ( SELECT * FROM k ); ``` Requires: * Must be non-negative when present. */
  upTo?: string;
}

export const Count: Schema.Schema<Count> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    upTo: Schema.optional(Schema.String),
  }).annotate({ identifier: "Count" });

export interface Avg {
  /** The property to aggregate on. */
  property?: PropertyReference;
}

export const Avg: Schema.Schema<Avg> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    property: Schema.optional(PropertyReference),
  }).annotate({ identifier: "Avg" });

export interface Aggregation {
  /** Sum aggregator. */
  sum?: Sum;
  /** Count aggregator. */
  count?: Count;
  /** Average aggregator. */
  avg?: Avg;
  /** Optional. Optional name of the property to store the result of the aggregation. If not provided, Datastore will pick a default name following the format `property_`. For example: ``` AGGREGATE COUNT_UP_TO(1) AS count_up_to_1, COUNT_UP_TO(2), COUNT_UP_TO(3) AS count_up_to_3, COUNT(*) OVER ( ... ); ``` becomes: ``` AGGREGATE COUNT_UP_TO(1) AS count_up_to_1, COUNT_UP_TO(2) AS property_1, COUNT_UP_TO(3) AS count_up_to_3, COUNT(*) AS property_2 OVER ( ... ); ``` Requires: * Must be unique across all aggregation aliases. * Conform to entity property name limitations. */
  alias?: string;
}

export const Aggregation: Schema.Schema<Aggregation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sum: Schema.optional(Sum),
    count: Schema.optional(Count),
    avg: Schema.optional(Avg),
    alias: Schema.optional(Schema.String),
  }).annotate({ identifier: "Aggregation" });

export interface AggregationQuery {
  /** Nested query for aggregation */
  nestedQuery?: Query;
  /** Optional. Series of aggregations to apply over the results of the `nested_query`. Requires: * A minimum of one and maximum of five aggregations per query. */
  aggregations?: ReadonlyArray<Aggregation>;
}

export const AggregationQuery: Schema.Schema<AggregationQuery> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nestedQuery: Schema.optional(Query),
    aggregations: Schema.optional(Schema.Array(Aggregation)),
  }).annotate({ identifier: "AggregationQuery" });

export interface AggregationResultBatch {
  /** The state of the query after the current batch. Only COUNT(*) aggregations are supported in the initial launch. Therefore, expected result type is limited to `NO_MORE_RESULTS`. */
  moreResults?:
    | "MORE_RESULTS_TYPE_UNSPECIFIED"
    | "NOT_FINISHED"
    | "MORE_RESULTS_AFTER_LIMIT"
    | "MORE_RESULTS_AFTER_CURSOR"
    | "NO_MORE_RESULTS"
    | (string & {});
  /** The aggregation results for this batch. */
  aggregationResults?: ReadonlyArray<AggregationResult>;
  /** Read timestamp this batch was returned from. In a single transaction, subsequent query result batches for the same query can have a greater timestamp. Each batch's read timestamp is valid for all preceding batches. */
  readTime?: string;
}

export const AggregationResultBatch: Schema.Schema<AggregationResultBatch> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    moreResults: Schema.optional(Schema.String),
    aggregationResults: Schema.optional(Schema.Array(AggregationResult)),
    readTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "AggregationResultBatch" });

export interface RunAggregationQueryResponse {
  /** Query explain metrics. This is only present when the RunAggregationQueryRequest.explain_options is provided, and it is sent only once with the last response in the stream. */
  explainMetrics?: ExplainMetrics;
  /** The parsed form of the `GqlQuery` from the request, if it was set. */
  query?: AggregationQuery;
  /** A batch of aggregation results. Always present. */
  batch?: AggregationResultBatch;
}

export const RunAggregationQueryResponse: Schema.Schema<RunAggregationQueryResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    explainMetrics: Schema.optional(ExplainMetrics),
    query: Schema.optional(AggregationQuery),
    batch: Schema.optional(AggregationResultBatch),
  }).annotate({ identifier: "RunAggregationQueryResponse" });

export interface RunAggregationQueryRequest {
  /** The options for this query. */
  readOptions?: ReadOptions;
  /** Optional. Explain options for the query. If set, additional query statistics will be returned. If not, only query results will be returned. */
  explainOptions?: ExplainOptions;
  /** The GQL query to run. This query must be an aggregation query. */
  gqlQuery?: GqlQuery;
  /** Entities are partitioned into subsets, identified by a partition ID. Queries are scoped to a single partition. This partition ID is normalized with the standard default context partition ID. */
  partitionId?: PartitionId;
  /** The query to run. */
  aggregationQuery?: AggregationQuery;
}

export const RunAggregationQueryRequest: Schema.Schema<RunAggregationQueryRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    readOptions: Schema.optional(ReadOptions),
    explainOptions: Schema.optional(ExplainOptions),
    gqlQuery: Schema.optional(GqlQuery),
    partitionId: Schema.optional(PartitionId),
    aggregationQuery: Schema.optional(AggregationQuery),
  }).annotate({ identifier: "RunAggregationQueryRequest" });

export interface PropertyTransform {
  /** Sets the property to the maximum of its current value and the given value. This must be an integer or a double value. If the property is not an integer or double, or if the property does not yet exist, the transformation will set the property to the given value. If a maximum operation is applied where the property and the input value are of mixed types (that is - one is an integer and one is a double) the property takes on the type of the larger operand. If the operands are equivalent (e.g. 3 and 3.0), the property does not change. 0, 0.0, and -0.0 are all zero. The maximum of a zero stored value and zero input value is always the stored value. The maximum of any numeric value x and NaN is NaN. */
  maximum?: Value;
  /** Sets the property to the minimum of its current value and the given value. This must be an integer or a double value. If the property is not an integer or double, or if the property does not yet exist, the transformation will set the property to the input value. If a minimum operation is applied where the property and the input value are of mixed types (that is - one is an integer and one is a double) the property takes on the type of the smaller operand. If the operands are equivalent (e.g. 3 and 3.0), the property does not change. 0, 0.0, and -0.0 are all zero. The minimum of a zero stored value and zero input value is always the stored value. The minimum of any numeric value x and NaN is NaN. */
  minimum?: Value;
  /** Removes all of the given elements from the array in the property. If the property is not an array, or if the property does not yet exist, it is set to the empty array. Equivalent numbers of different types (e.g. 3L and 3.0) are considered equal when deciding whether an element should be removed. NaN is equal to NaN, and the null value is equal to the null value. This will remove all equivalent values if there are duplicates. The corresponding transform result will be the null value. */
  removeAllFromArray?: ArrayValue;
  /** Sets the property to the given server value. */
  setToServerValue?:
    | "SERVER_VALUE_UNSPECIFIED"
    | "REQUEST_TIME"
    | (string & {});
  /** Adds the given value to the property's current value. This must be an integer or a double value. If the property is not an integer or double, or if the property does not yet exist, the transformation will set the property to the given value. If either of the given value or the current property value are doubles, both values will be interpreted as doubles. Double arithmetic and representation of double values follows IEEE 754 semantics. If there is positive/negative integer overflow, the property is resolved to the largest magnitude positive/negative integer. */
  increment?: Value;
  /** Appends the given elements in order if they are not already present in the current property value. If the property is not an array, or if the property does not yet exist, it is first set to the empty array. Equivalent numbers of different types (e.g. 3L and 3.0) are considered equal when checking if a value is missing. NaN is equal to NaN, and the null value is equal to the null value. If the input contains multiple equivalent values, only the first will be considered. The corresponding transform result will be the null value. */
  appendMissingElements?: ArrayValue;
  /** Optional. The name of the property. Property paths (a list of property names separated by dots (`.`)) may be used to refer to properties inside entity values. For example `foo.bar` means the property `bar` inside the entity property `foo`. If a property name contains a dot `.` or a backlslash `\`, then that name must be escaped. */
  property?: string;
}

export const PropertyTransform: Schema.Schema<PropertyTransform> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    maximum: Schema.optional(Value),
    minimum: Schema.optional(Value),
    removeAllFromArray: Schema.optional(ArrayValue),
    setToServerValue: Schema.optional(Schema.String),
    increment: Schema.optional(Value),
    appendMissingElements: Schema.optional(ArrayValue),
    property: Schema.optional(Schema.String),
  }).annotate({ identifier: "PropertyTransform" });

export interface Mutation {
  /** The entity to update. The entity must already exist. Must have a complete key path. */
  update?: Entity;
  /** The properties to write in this mutation. None of the properties in the mask may have a reserved name, except for `__key__`. This field is ignored for `delete`. If the entity already exists, only properties referenced in the mask are updated, others are left untouched. Properties referenced in the mask but not in the entity are deleted. */
  propertyMask?: PropertyMask;
  /** The entity to upsert. The entity may or may not already exist. The entity key's final path element may be incomplete. */
  upsert?: Entity;
  /** The version of the entity that this mutation is being applied to. If this does not match the current version on the server, the mutation conflicts. */
  baseVersion?: string;
  /** The update time of the entity that this mutation is being applied to. If this does not match the current update time on the server, the mutation conflicts. */
  updateTime?: string;
  /** The entity to insert. The entity must not already exist. The entity key's final path element may be incomplete. */
  insert?: Entity;
  /** Optional. The transforms to perform on the entity. This field can be set only when the operation is `insert`, `update`, or `upsert`. If present, the transforms are be applied to the entity regardless of the property mask, in order, after the operation. */
  propertyTransforms?: ReadonlyArray<PropertyTransform>;
  /** The key of the entity to delete. The entity may or may not already exist. Must have a complete key path and must not be reserved/read-only. */
  delete?: Key;
  /** The strategy to use when a conflict is detected. Defaults to `SERVER_VALUE`. If this is set, then `conflict_detection_strategy` must also be set. */
  conflictResolutionStrategy?:
    | "STRATEGY_UNSPECIFIED"
    | "SERVER_VALUE"
    | "FAIL"
    | (string & {});
}

export const Mutation: Schema.Schema<Mutation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    update: Schema.optional(Entity),
    propertyMask: Schema.optional(PropertyMask),
    upsert: Schema.optional(Entity),
    baseVersion: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    insert: Schema.optional(Entity),
    propertyTransforms: Schema.optional(Schema.Array(PropertyTransform)),
    delete: Schema.optional(Key),
    conflictResolutionStrategy: Schema.optional(Schema.String),
  }).annotate({ identifier: "Mutation" });

export interface CommitRequest {
  /** The identifier of the transaction associated with the commit. A transaction identifier is returned by a call to Datastore.BeginTransaction. */
  transaction?: string;
  /** The type of commit to perform. Defaults to `TRANSACTIONAL`. */
  mode?:
    | "MODE_UNSPECIFIED"
    | "TRANSACTIONAL"
    | "NON_TRANSACTIONAL"
    | (string & {});
  /** The mutations to perform. When mode is `TRANSACTIONAL`, mutations affecting a single entity are applied in order. The following sequences of mutations affecting a single entity are not permitted in a single `Commit` request: - `insert` followed by `insert` - `update` followed by `insert` - `upsert` followed by `insert` - `delete` followed by `update` When mode is `NON_TRANSACTIONAL`, no two mutations may affect a single entity. */
  mutations?: ReadonlyArray<Mutation>;
}

export const CommitRequest: Schema.Schema<CommitRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    transaction: Schema.optional(Schema.String),
    mode: Schema.optional(Schema.String),
    mutations: Schema.optional(Schema.Array(Mutation)),
  }).annotate({ identifier: "CommitRequest" });

export interface GoogleDatastoreAdminV1EntityFilter {
  /** If empty, then this represents all kinds. */
  kinds?: ReadonlyArray<string>;
  /** An empty list represents all namespaces. This is the preferred usage for projects that don't use namespaces. An empty string element represents the default namespace. This should be used if the project has data in non-default namespaces, but doesn't want to include them. Each namespace in this list must be unique. */
  namespaceIds?: ReadonlyArray<string>;
}

export const GoogleDatastoreAdminV1EntityFilter: Schema.Schema<GoogleDatastoreAdminV1EntityFilter> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    kinds: Schema.optional(Schema.Array(Schema.String)),
    namespaceIds: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "GoogleDatastoreAdminV1EntityFilter" });

export interface ReadWrite {
  /** The transaction identifier of the transaction being retried. */
  previousTransaction?: string;
}

export const ReadWrite: Schema.Schema<ReadWrite> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    previousTransaction: Schema.optional(Schema.String),
  }).annotate({ identifier: "ReadWrite" });

export interface ReadOnly {
  /** Reads entities at the given time. This must be a microsecond precision timestamp within the past one hour, or if Point-in-Time Recovery is enabled, can additionally be a whole minute timestamp within the past 7 days. */
  readTime?: string;
}

export const ReadOnly: Schema.Schema<ReadOnly> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    readTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "ReadOnly" });

export interface TransactionOptions {
  /** The transaction should allow both reads and writes. */
  readWrite?: ReadWrite;
  /** The transaction should only allow reads. */
  readOnly?: ReadOnly;
}

export const TransactionOptions: Schema.Schema<TransactionOptions> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    readWrite: Schema.optional(ReadWrite),
    readOnly: Schema.optional(ReadOnly),
  }).annotate({ identifier: "TransactionOptions" });

export interface AllocateIdsRequest {
  /** Required. A list of keys with incomplete key paths for which to allocate IDs. No key may be reserved/read-only. */
  keys?: ReadonlyArray<Key>;
}

export const AllocateIdsRequest: Schema.Schema<AllocateIdsRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    keys: Schema.optional(Schema.Array(Key)),
  }).annotate({ identifier: "AllocateIdsRequest" });

export interface GoogleDatastoreAdminV1MigrationStateEvent {
  /** The new state of the migration. */
  state?:
    | "MIGRATION_STATE_UNSPECIFIED"
    | "RUNNING"
    | "PAUSED"
    | "COMPLETE"
    | (string & {});
}

export const GoogleDatastoreAdminV1MigrationStateEvent: Schema.Schema<GoogleDatastoreAdminV1MigrationStateEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleDatastoreAdminV1MigrationStateEvent" });

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
  /** The type of the operation. Can be used as a filter in ListOperationsRequest. */
  operationType?:
    | "OPERATION_TYPE_UNSPECIFIED"
    | "EXPORT_ENTITIES"
    | "IMPORT_ENTITIES"
    | "CREATE_INDEX"
    | "DELETE_INDEX"
    | (string & {});
  /** The time that work began on the operation. */
  startTime?: string;
  /** The time the operation ended, either successfully or otherwise. */
  endTime?: string;
}

export const GoogleDatastoreAdminV1CommonMetadata: Schema.Schema<GoogleDatastoreAdminV1CommonMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    labels: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    state: Schema.optional(Schema.String),
    operationType: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleDatastoreAdminV1CommonMetadata" });

export interface GoogleDatastoreAdminV1Progress {
  /** An estimate of how much work needs to be performed. May be zero if the work estimate is unavailable. */
  workEstimated?: string;
  /** The amount of work that has been completed. Note that this may be greater than work_estimated. */
  workCompleted?: string;
}

export const GoogleDatastoreAdminV1Progress: Schema.Schema<GoogleDatastoreAdminV1Progress> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    workEstimated: Schema.optional(Schema.String),
    workCompleted: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleDatastoreAdminV1Progress" });

export interface GoogleDatastoreAdminV1IndexOperationMetadata {
  /** The index resource ID that this operation is acting on. */
  indexId?: string;
  /** Metadata common to all Datastore Admin operations. */
  common?: GoogleDatastoreAdminV1CommonMetadata;
  /** An estimate of the number of entities processed. */
  progressEntities?: GoogleDatastoreAdminV1Progress;
}

export const GoogleDatastoreAdminV1IndexOperationMetadata: Schema.Schema<GoogleDatastoreAdminV1IndexOperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    indexId: Schema.optional(Schema.String),
    common: Schema.optional(GoogleDatastoreAdminV1CommonMetadata),
    progressEntities: Schema.optional(GoogleDatastoreAdminV1Progress),
  }).annotate({ identifier: "GoogleDatastoreAdminV1IndexOperationMetadata" });

export interface BeginTransactionRequest {
  /** Options for a new transaction. */
  transactionOptions?: TransactionOptions;
}

export const BeginTransactionRequest: Schema.Schema<BeginTransactionRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    transactionOptions: Schema.optional(TransactionOptions),
  }).annotate({ identifier: "BeginTransactionRequest" });

export interface GoogleDatastoreAdminV1ImportEntitiesMetadata {
  /** Description of which entities are being imported. */
  entityFilter?: GoogleDatastoreAdminV1EntityFilter;
  /** An estimate of the number of bytes processed. */
  progressBytes?: GoogleDatastoreAdminV1Progress;
  /** The location of the import metadata file. This will be the same value as the google.datastore.admin.v1.ExportEntitiesResponse.output_url field. */
  inputUrl?: string;
  /** Metadata common to all Datastore Admin operations. */
  common?: GoogleDatastoreAdminV1CommonMetadata;
  /** An estimate of the number of entities processed. */
  progressEntities?: GoogleDatastoreAdminV1Progress;
}

export const GoogleDatastoreAdminV1ImportEntitiesMetadata: Schema.Schema<GoogleDatastoreAdminV1ImportEntitiesMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entityFilter: Schema.optional(GoogleDatastoreAdminV1EntityFilter),
    progressBytes: Schema.optional(GoogleDatastoreAdminV1Progress),
    inputUrl: Schema.optional(Schema.String),
    common: Schema.optional(GoogleDatastoreAdminV1CommonMetadata),
    progressEntities: Schema.optional(GoogleDatastoreAdminV1Progress),
  }).annotate({ identifier: "GoogleDatastoreAdminV1ImportEntitiesMetadata" });

export interface QueryResultBatch {
  /** A cursor that points to the position after the last skipped result. Will be set when `skipped_results` != 0. */
  skippedCursor?: string;
  /** The result type for every entity in `entity_results`. */
  entityResultType?:
    | "RESULT_TYPE_UNSPECIFIED"
    | "FULL"
    | "PROJECTION"
    | "KEY_ONLY"
    | (string & {});
  /** The state of the query after the current batch. */
  moreResults?:
    | "MORE_RESULTS_TYPE_UNSPECIFIED"
    | "NOT_FINISHED"
    | "MORE_RESULTS_AFTER_LIMIT"
    | "MORE_RESULTS_AFTER_CURSOR"
    | "NO_MORE_RESULTS"
    | (string & {});
  /** A cursor that points to the position after the last result in the batch. */
  endCursor?: string;
  /** The version number of the snapshot this batch was returned from. This applies to the range of results from the query's `start_cursor` (or the beginning of the query if no cursor was given) to this batch's `end_cursor` (not the query's `end_cursor`). In a single transaction, subsequent query result batches for the same query can have a greater snapshot version number. Each batch's snapshot version is valid for all preceding batches. The value will be zero for eventually consistent queries. */
  snapshotVersion?: string;
  /** Read timestamp this batch was returned from. This applies to the range of results from the query's `start_cursor` (or the beginning of the query if no cursor was given) to this batch's `end_cursor` (not the query's `end_cursor`). In a single transaction, subsequent query result batches for the same query can have a greater timestamp. Each batch's read timestamp is valid for all preceding batches. This value will not be set for eventually consistent queries in Cloud Datastore. */
  readTime?: string;
  /** The results for this batch. */
  entityResults?: ReadonlyArray<EntityResult>;
  /** The number of results skipped, typically because of an offset. */
  skippedResults?: number;
}

export const QueryResultBatch: Schema.Schema<QueryResultBatch> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    skippedCursor: Schema.optional(Schema.String),
    entityResultType: Schema.optional(Schema.String),
    moreResults: Schema.optional(Schema.String),
    endCursor: Schema.optional(Schema.String),
    snapshotVersion: Schema.optional(Schema.String),
    readTime: Schema.optional(Schema.String),
    entityResults: Schema.optional(Schema.Array(EntityResult)),
    skippedResults: Schema.optional(Schema.Number),
  }).annotate({ identifier: "QueryResultBatch" });

export interface RunQueryResponse {
  /** A batch of query results. This is always present unless running a query under explain-only mode: RunQueryRequest.explain_options was provided and ExplainOptions.analyze was set to false. */
  batch?: QueryResultBatch;
  /** The parsed form of the `GqlQuery` from the request, if it was set. */
  query?: Query;
  /** Query explain metrics. This is only present when the RunQueryRequest.explain_options is provided, and it is sent only once with the last response in the stream. */
  explainMetrics?: ExplainMetrics;
}

export const RunQueryResponse: Schema.Schema<RunQueryResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    batch: Schema.optional(QueryResultBatch),
    query: Schema.optional(Query),
    explainMetrics: Schema.optional(ExplainMetrics),
  }).annotate({ identifier: "RunQueryResponse" });

export interface GoogleDatastoreAdminV1RedirectWritesStepDetails {
  /** The concurrency mode for this database. */
  concurrencyMode?:
    | "CONCURRENCY_MODE_UNSPECIFIED"
    | "PESSIMISTIC"
    | "OPTIMISTIC"
    | "OPTIMISTIC_WITH_ENTITY_GROUPS"
    | (string & {});
}

export const GoogleDatastoreAdminV1RedirectWritesStepDetails: Schema.Schema<GoogleDatastoreAdminV1RedirectWritesStepDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    concurrencyMode: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleDatastoreAdminV1RedirectWritesStepDetails",
  });

export interface GoogleDatastoreAdminV1PrepareStepDetails {
  /** The concurrency mode this database will use when it reaches the `REDIRECT_WRITES` step. */
  concurrencyMode?:
    | "CONCURRENCY_MODE_UNSPECIFIED"
    | "PESSIMISTIC"
    | "OPTIMISTIC"
    | "OPTIMISTIC_WITH_ENTITY_GROUPS"
    | (string & {});
}

export const GoogleDatastoreAdminV1PrepareStepDetails: Schema.Schema<GoogleDatastoreAdminV1PrepareStepDetails> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    concurrencyMode: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleDatastoreAdminV1PrepareStepDetails" });

export interface GoogleDatastoreAdminV1MigrationProgressEvent {
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
  /** Details for the `REDIRECT_WRITES` step. */
  redirectWritesStepDetails?: GoogleDatastoreAdminV1RedirectWritesStepDetails;
  /** Details for the `PREPARE` step. */
  prepareStepDetails?: GoogleDatastoreAdminV1PrepareStepDetails;
}

export const GoogleDatastoreAdminV1MigrationProgressEvent: Schema.Schema<GoogleDatastoreAdminV1MigrationProgressEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    step: Schema.optional(Schema.String),
    redirectWritesStepDetails: Schema.optional(
      GoogleDatastoreAdminV1RedirectWritesStepDetails,
    ),
    prepareStepDetails: Schema.optional(
      GoogleDatastoreAdminV1PrepareStepDetails,
    ),
  }).annotate({ identifier: "GoogleDatastoreAdminV1MigrationProgressEvent" });

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

export const GoogleDatastoreAdminV1DatastoreFirestoreMigrationMetadata: Schema.Schema<GoogleDatastoreAdminV1DatastoreFirestoreMigrationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    migrationState: Schema.optional(Schema.String),
    migrationStep: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleDatastoreAdminV1DatastoreFirestoreMigrationMetadata",
  });

export interface GoogleDatastoreAdminV1beta1ExportEntitiesMetadata {
  /** An estimate of the number of bytes processed. */
  progressBytes?: GoogleDatastoreAdminV1beta1Progress;
  /** Description of which entities are being exported. */
  entityFilter?: GoogleDatastoreAdminV1beta1EntityFilter;
  /** Location for the export metadata and data files. This will be the same value as the google.datastore.admin.v1beta1.ExportEntitiesRequest.output_url_prefix field. The final output location is provided in google.datastore.admin.v1beta1.ExportEntitiesResponse.output_url. */
  outputUrlPrefix?: string;
  /** Metadata common to all Datastore Admin operations. */
  common?: GoogleDatastoreAdminV1beta1CommonMetadata;
  /** An estimate of the number of entities processed. */
  progressEntities?: GoogleDatastoreAdminV1beta1Progress;
}

export const GoogleDatastoreAdminV1beta1ExportEntitiesMetadata: Schema.Schema<GoogleDatastoreAdminV1beta1ExportEntitiesMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    progressBytes: Schema.optional(GoogleDatastoreAdminV1beta1Progress),
    entityFilter: Schema.optional(GoogleDatastoreAdminV1beta1EntityFilter),
    outputUrlPrefix: Schema.optional(Schema.String),
    common: Schema.optional(GoogleDatastoreAdminV1beta1CommonMetadata),
    progressEntities: Schema.optional(GoogleDatastoreAdminV1beta1Progress),
  }).annotate({
    identifier: "GoogleDatastoreAdminV1beta1ExportEntitiesMetadata",
  });

export interface MutationResult {
  /** The automatically allocated key. Set only when the mutation allocated a key. */
  key?: Key;
  /** The update time of the entity on the server after processing the mutation. If the mutation doesn't change anything on the server, then the timestamp will be the update timestamp of the current entity. This field will not be set after a 'delete'. */
  updateTime?: string;
  /** Whether a conflict was detected for this mutation. Always false when a conflict detection strategy field is not set in the mutation. */
  conflictDetected?: boolean;
  /** The results of applying each PropertyTransform, in the same order of the request. */
  transformResults?: ReadonlyArray<Value>;
  /** The version of the entity on the server after processing the mutation. If the mutation doesn't change anything on the server, then the version will be the version of the current entity or, if no entity is present, a version that is strictly greater than the version of any previous entity and less than the version of any possible future entity. */
  version?: string;
  /** The create time of the entity. This field will not be set after a 'delete'. */
  createTime?: string;
}

export const MutationResult: Schema.Schema<MutationResult> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    key: Schema.optional(Key),
    updateTime: Schema.optional(Schema.String),
    conflictDetected: Schema.optional(Schema.Boolean),
    transformResults: Schema.optional(Schema.Array(Value)),
    version: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "MutationResult" });

export interface GoogleDatastoreAdminV1beta1ExportEntitiesResponse {
  /** Location of the output metadata file. This can be used to begin an import into Cloud Datastore (this project or another project). See google.datastore.admin.v1beta1.ImportEntitiesRequest.input_url. Only present if the operation completed successfully. */
  outputUrl?: string;
}

export const GoogleDatastoreAdminV1beta1ExportEntitiesResponse: Schema.Schema<GoogleDatastoreAdminV1beta1ExportEntitiesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    outputUrl: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleDatastoreAdminV1beta1ExportEntitiesResponse",
  });

export interface GoogleDatastoreAdminV1ExportEntitiesMetadata {
  /** Description of which entities are being exported. */
  entityFilter?: GoogleDatastoreAdminV1EntityFilter;
  /** An estimate of the number of bytes processed. */
  progressBytes?: GoogleDatastoreAdminV1Progress;
  /** Metadata common to all Datastore Admin operations. */
  common?: GoogleDatastoreAdminV1CommonMetadata;
  /** An estimate of the number of entities processed. */
  progressEntities?: GoogleDatastoreAdminV1Progress;
  /** Location for the export metadata and data files. This will be the same value as the google.datastore.admin.v1.ExportEntitiesRequest.output_url_prefix field. The final output location is provided in google.datastore.admin.v1.ExportEntitiesResponse.output_url. */
  outputUrlPrefix?: string;
}

export const GoogleDatastoreAdminV1ExportEntitiesMetadata: Schema.Schema<GoogleDatastoreAdminV1ExportEntitiesMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entityFilter: Schema.optional(GoogleDatastoreAdminV1EntityFilter),
    progressBytes: Schema.optional(GoogleDatastoreAdminV1Progress),
    common: Schema.optional(GoogleDatastoreAdminV1CommonMetadata),
    progressEntities: Schema.optional(GoogleDatastoreAdminV1Progress),
    outputUrlPrefix: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleDatastoreAdminV1ExportEntitiesMetadata" });

export interface LookupResponse {
  /** Entities found as `ResultType.FULL` entities. The order of results in this field is undefined and has no relation to the order of the keys in the input. */
  found?: ReadonlyArray<EntityResult>;
  /** Entities not found as `ResultType.KEY_ONLY` entities. The order of results in this field is undefined and has no relation to the order of the keys in the input. */
  missing?: ReadonlyArray<EntityResult>;
  /** A list of keys that were not looked up due to resource constraints. The order of results in this field is undefined and has no relation to the order of the keys in the input. */
  deferred?: ReadonlyArray<Key>;
  /** The time at which these entities were read or found missing. */
  readTime?: string;
}

export const LookupResponse: Schema.Schema<LookupResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    found: Schema.optional(Schema.Array(EntityResult)),
    missing: Schema.optional(Schema.Array(EntityResult)),
    deferred: Schema.optional(Schema.Array(Key)),
    readTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "LookupResponse" });

export interface RollbackResponse {}

export const RollbackResponse: Schema.Schema<RollbackResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "RollbackResponse",
  });

export interface CommitResponse {
  /** The result of performing the mutations. The i-th mutation result corresponds to the i-th mutation in the request. */
  mutationResults?: ReadonlyArray<MutationResult>;
  /** The number of index entries updated during the commit, or zero if none were updated. */
  indexUpdates?: number;
  /** The transaction commit timestamp. Not set for non-transactional commits. */
  commitTime?: string;
}

export const CommitResponse: Schema.Schema<CommitResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mutationResults: Schema.optional(Schema.Array(MutationResult)),
    indexUpdates: Schema.optional(Schema.Number),
    commitTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "CommitResponse" });

export interface AllocateIdsResponse {
  /** The keys specified in the request (in the same order), each with its key path completed with a newly allocated ID. */
  keys?: ReadonlyArray<Key>;
}

export const AllocateIdsResponse: Schema.Schema<AllocateIdsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    keys: Schema.optional(Schema.Array(Key)),
  }).annotate({ identifier: "AllocateIdsResponse" });

export interface RollbackRequest {
  /** Required. The transaction identifier, returned by a call to Datastore.BeginTransaction. */
  transaction?: string;
}

export const RollbackRequest: Schema.Schema<RollbackRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    transaction: Schema.optional(Schema.String),
  }).annotate({ identifier: "RollbackRequest" });

export interface GoogleDatastoreAdminV1ExportEntitiesResponse {
  /** Location of the output metadata file. This can be used to begin an import into Cloud Datastore (this project or another project). See google.datastore.admin.v1.ImportEntitiesRequest.input_url. Only present if the operation completed successfully. */
  outputUrl?: string;
}

export const GoogleDatastoreAdminV1ExportEntitiesResponse: Schema.Schema<GoogleDatastoreAdminV1ExportEntitiesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    outputUrl: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleDatastoreAdminV1ExportEntitiesResponse" });

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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    body: Schema.optional(BeginTransactionRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta3/projects/{projectId}:beginTransaction",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<BeginTransactionProjectsRequest>;

export type BeginTransactionProjectsResponse = BeginTransactionResponse;
export const BeginTransactionProjectsResponse =
  /*@__PURE__*/ /*#__PURE__*/ BeginTransactionResponse;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BeginTransactionProjectsRequest,
  output: BeginTransactionProjectsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface RunQueryProjectsRequest {
  /** Required. The ID of the project against which to make the request. */
  projectId: string;
  /** Request body */
  body?: RunQueryRequest;
}

export const RunQueryProjectsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    body: Schema.optional(RunQueryRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta3/projects/{projectId}:runQuery",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<RunQueryProjectsRequest>;

export type RunQueryProjectsResponse = RunQueryResponse;
export const RunQueryProjectsResponse =
  /*@__PURE__*/ /*#__PURE__*/ RunQueryResponse;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RunQueryProjectsRequest,
  output: RunQueryProjectsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface AllocateIdsProjectsRequest {
  /** Required. The ID of the project against which to make the request. */
  projectId: string;
  /** Request body */
  body?: AllocateIdsRequest;
}

export const AllocateIdsProjectsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    body: Schema.optional(AllocateIdsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta3/projects/{projectId}:allocateIds",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<AllocateIdsProjectsRequest>;

export type AllocateIdsProjectsResponse = AllocateIdsResponse;
export const AllocateIdsProjectsResponse =
  /*@__PURE__*/ /*#__PURE__*/ AllocateIdsResponse;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: AllocateIdsProjectsRequest,
  output: AllocateIdsProjectsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface LookupProjectsRequest {
  /** Required. The ID of the project against which to make the request. */
  projectId: string;
  /** Request body */
  body?: LookupRequest;
}

export const LookupProjectsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  projectId: Schema.String.pipe(T.HttpPath("projectId")),
  body: Schema.optional(LookupRequest).pipe(T.HttpBody()),
}).pipe(
  T.Http({
    method: "POST",
    path: "v1beta3/projects/{projectId}:lookup",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<LookupProjectsRequest>;

export type LookupProjectsResponse = LookupResponse;
export const LookupProjectsResponse =
  /*@__PURE__*/ /*#__PURE__*/ LookupResponse;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: LookupProjectsRequest,
  output: LookupProjectsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CommitProjectsRequest {
  /** Required. The ID of the project against which to make the request. */
  projectId: string;
  /** Request body */
  body?: CommitRequest;
}

export const CommitProjectsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  projectId: Schema.String.pipe(T.HttpPath("projectId")),
  body: Schema.optional(CommitRequest).pipe(T.HttpBody()),
}).pipe(
  T.Http({
    method: "POST",
    path: "v1beta3/projects/{projectId}:commit",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Schema<CommitProjectsRequest>;

export type CommitProjectsResponse = CommitResponse;
export const CommitProjectsResponse =
  /*@__PURE__*/ /*#__PURE__*/ CommitResponse;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CommitProjectsRequest,
  output: CommitProjectsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ReserveIdsProjectsRequest {
  /** Required. The ID of the project against which to make the request. */
  projectId: string;
  /** Request body */
  body?: ReserveIdsRequest;
}

export const ReserveIdsProjectsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    body: Schema.optional(ReserveIdsRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta3/projects/{projectId}:reserveIds",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ReserveIdsProjectsRequest>;

export type ReserveIdsProjectsResponse = ReserveIdsResponse;
export const ReserveIdsProjectsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ReserveIdsResponse;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ReserveIdsProjectsRequest,
  output: ReserveIdsProjectsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface RunAggregationQueryProjectsRequest {
  /** Required. The ID of the project against which to make the request. */
  projectId: string;
  /** Request body */
  body?: RunAggregationQueryRequest;
}

export const RunAggregationQueryProjectsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    body: Schema.optional(RunAggregationQueryRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta3/projects/{projectId}:runAggregationQuery",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<RunAggregationQueryProjectsRequest>;

export type RunAggregationQueryProjectsResponse = RunAggregationQueryResponse;
export const RunAggregationQueryProjectsResponse =
  /*@__PURE__*/ /*#__PURE__*/ RunAggregationQueryResponse;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RunAggregationQueryProjectsRequest,
  output: RunAggregationQueryProjectsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface RollbackProjectsRequest {
  /** Required. The ID of the project against which to make the request. */
  projectId: string;
  /** Request body */
  body?: RollbackRequest;
}

export const RollbackProjectsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    projectId: Schema.String.pipe(T.HttpPath("projectId")),
    body: Schema.optional(RollbackRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1beta3/projects/{projectId}:rollback",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<RollbackProjectsRequest>;

export type RollbackProjectsResponse = RollbackResponse;
export const RollbackProjectsResponse =
  /*@__PURE__*/ /*#__PURE__*/ RollbackResponse;

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
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: RollbackProjectsRequest,
  output: RollbackProjectsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));
