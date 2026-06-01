/**
 * Cloudflare VECTORIZE API
 *
 * Generated from Cloudflare TypeScript SDK.
 * DO NOT EDIT - regenerate with: bun scripts/generate.ts --service vectorize
 */

import * as Schema from "effect/Schema";
import type * as HttpClient from "effect/unstable/http/HttpClient";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import type { Credentials } from "../credentials.ts";
import { type DefaultErrors } from "../errors.ts";
import { UploadableSchema } from "../schemas.ts";

// =============================================================================
// Errors
// =============================================================================

export class Gone extends Schema.TaggedErrorClass<Gone>()("Gone", {
  code: Schema.Number,
  message: Schema.String,
}) {}
T.applyErrorMatchers(Gone, [{ code: 3005 }]);

export class IndexAlreadyExists extends Schema.TaggedErrorClass<IndexAlreadyExists>()(
  "IndexAlreadyExists",
  { code: Schema.Number, message: Schema.String },
) {}
T.applyErrorMatchers(IndexAlreadyExists, [{ code: 3002 }]);

export class IndexInvalidConfig extends Schema.TaggedErrorClass<IndexInvalidConfig>()(
  "IndexInvalidConfig",
  { code: Schema.Number, message: Schema.String },
) {}
T.applyErrorMatchers(IndexInvalidConfig, [{ code: 3003 }]);

export class IndexInvalidName extends Schema.TaggedErrorClass<IndexInvalidName>()(
  "IndexInvalidName",
  { code: Schema.Number, message: Schema.String },
) {}
T.applyErrorMatchers(IndexInvalidName, [{ code: 3001 }]);

export class MetadataIndexAlreadyExists extends Schema.TaggedErrorClass<MetadataIndexAlreadyExists>()(
  "MetadataIndexAlreadyExists",
  { code: Schema.Number, message: Schema.String },
) {}
T.applyErrorMatchers(MetadataIndexAlreadyExists, [{ code: 40004 }]);

export class MetadataIndexInvalidType extends Schema.TaggedErrorClass<MetadataIndexInvalidType>()(
  "MetadataIndexInvalidType",
  { code: Schema.Number, message: Schema.String },
) {}
T.applyErrorMatchers(MetadataIndexInvalidType, [{ code: 40026 }]);

export class MetadataIndexNotFound extends Schema.TaggedErrorClass<MetadataIndexNotFound>()(
  "MetadataIndexNotFound",
  { code: Schema.Number, message: Schema.String },
) {}
T.applyErrorMatchers(MetadataIndexNotFound, [{ code: 40005 }]);

export class NotFound extends Schema.TaggedErrorClass<NotFound>()("NotFound", {
  code: Schema.Number,
  message: Schema.String,
}) {}
T.applyErrorMatchers(NotFound, [{ code: 3000 }]);

// =============================================================================
// ByIdsIndex
// =============================================================================

export interface GetByIdsIndexRequest {
  indexName: string;
  /** Path param: Identifier */
  accountId: string;
  /** Body param: A list of vector identifiers to retrieve from the index indicated by the path. */
  ids?: string[];
}

export const GetByIdsIndexRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  indexName: Schema.String.pipe(T.HttpPath("indexName")),
  accountId: Schema.String.pipe(T.HttpPath("account_id")),
  ids: Schema.optional(Schema.Array(Schema.String)),
}).pipe(
  T.Http({
    method: "POST",
    path: "/accounts/{account_id}/vectorize/v2/indexes/{indexName}/get_by_ids",
  }),
) as unknown as Schema.Schema<GetByIdsIndexRequest>;

export type GetByIdsIndexResponse = unknown;

export const GetByIdsIndexResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown.pipe(
    T.ResponsePath("result"),
  ) as unknown as Schema.Schema<GetByIdsIndexResponse>;

export type GetByIdsIndexError = DefaultErrors;

export const getByIdsIndex: API.OperationMethod<
  GetByIdsIndexRequest,
  GetByIdsIndexResponse,
  GetByIdsIndexError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetByIdsIndexRequest,
  output: GetByIdsIndexResponse,
  errors: [],
}));

export interface DeleteByIdsIndexRequest {
  indexName: string;
  /** Path param: Identifier */
  accountId: string;
  /** Body param: A list of vector identifiers to delete from the index indicated by the path. */
  ids?: string[];
}

export const DeleteByIdsIndexRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    indexName: Schema.String.pipe(T.HttpPath("indexName")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    ids: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/accounts/{account_id}/vectorize/v2/indexes/{indexName}/delete_by_ids",
    }),
  ) as unknown as Schema.Schema<DeleteByIdsIndexRequest>;

export interface DeleteByIdsIndexResponse {
  /** The unique identifier for the async mutation operation containing the changeset. */
  mutationId?: string | null;
}

export const DeleteByIdsIndexResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mutationId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    T.ResponsePath("result"),
  ) as unknown as Schema.Schema<DeleteByIdsIndexResponse>;

export type DeleteByIdsIndexError = DefaultErrors;

export const deleteByIdsIndex: API.OperationMethod<
  DeleteByIdsIndexRequest,
  DeleteByIdsIndexResponse,
  DeleteByIdsIndexError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteByIdsIndexRequest,
  output: DeleteByIdsIndexResponse,
  errors: [],
}));

// =============================================================================
// Index
// =============================================================================

export interface GetIndexRequest {
  indexName: string;
  /** Identifier */
  accountId: string;
}

export const GetIndexRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  indexName: Schema.String.pipe(T.HttpPath("indexName")),
  accountId: Schema.String.pipe(T.HttpPath("account_id")),
}).pipe(
  T.Http({
    method: "GET",
    path: "/accounts/{account_id}/vectorize/v2/indexes/{indexName}",
  }),
) as unknown as Schema.Schema<GetIndexRequest>;

export interface GetIndexResponse {
  config?: {
    dimensions: number;
    metric: "cosine" | "euclidean" | "dot-product" | (string & {});
  } | null;
  /** Specifies the timestamp the resource was created as an ISO8601 string. */
  createdOn?: string | null;
  /** Specifies the description of the index. */
  description?: string | null;
  /** Specifies the timestamp the resource was modified as an ISO8601 string. */
  modifiedOn?: string | null;
  name?: string | null;
}

export const GetIndexResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  config: Schema.optional(
    Schema.Union([
      Schema.Struct({
        dimensions: Schema.Number,
        metric: Schema.Union([
          Schema.Literals(["cosine", "euclidean", "dot-product"]),
          Schema.String,
        ]),
      }),
      Schema.Null,
    ]),
  ),
  createdOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
})
  .pipe(
    Schema.encodeKeys({
      config: "config",
      createdOn: "created_on",
      description: "description",
      modifiedOn: "modified_on",
      name: "name",
    }),
  )
  .pipe(T.ResponsePath("result")) as unknown as Schema.Schema<GetIndexResponse>;

export type GetIndexError = DefaultErrors | NotFound | Gone;

export const getIndex: API.OperationMethod<
  GetIndexRequest,
  GetIndexResponse,
  GetIndexError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetIndexRequest,
  output: GetIndexResponse,
  errors: [NotFound, Gone],
}));

export interface ListIndexesRequest {
  /** Identifier */
  accountId: string;
}

export const ListIndexesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  accountId: Schema.String.pipe(T.HttpPath("account_id")),
}).pipe(
  T.Http({
    method: "GET",
    path: "/accounts/{account_id}/vectorize/v2/indexes",
  }),
) as unknown as Schema.Schema<ListIndexesRequest>;

export interface ListIndexesResponse {
  result: {
    config?: {
      dimensions: number;
      metric: "cosine" | "euclidean" | "dot-product" | (string & {});
    } | null;
    createdOn?: string | null;
    description?: string | null;
    modifiedOn?: string | null;
    name?: string | null;
  }[];
}

export const ListIndexesResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  result: Schema.Array(
    Schema.Struct({
      config: Schema.optional(
        Schema.Union([
          Schema.Struct({
            dimensions: Schema.Number,
            metric: Schema.Union([
              Schema.Literals(["cosine", "euclidean", "dot-product"]),
              Schema.String,
            ]),
          }),
          Schema.Null,
        ]),
      ),
      createdOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        config: "config",
        createdOn: "created_on",
        description: "description",
        modifiedOn: "modified_on",
        name: "name",
      }),
    ),
  ),
}) as unknown as Schema.Schema<ListIndexesResponse>;

export type ListIndexesError = DefaultErrors;

export const listIndexes: API.PaginatedOperationMethod<
  ListIndexesRequest,
  ListIndexesResponse,
  ListIndexesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListIndexesRequest,
  output: ListIndexesResponse,
  errors: [],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

export interface CreateIndexRequest {
  /** Path param: Identifier */
  accountId: string;
  /** Body param: Specifies the type of configuration to use for the index. */
  config:
    | {
        dimensions: number;
        metric: "cosine" | "euclidean" | "dot-product" | (string & {});
      }
    | {
        preset:
          | "@cf/baai/bge-small-en-v1.5"
          | "@cf/baai/bge-base-en-v1.5"
          | "@cf/baai/bge-large-en-v1.5"
          | "openai/text-embedding-ada-002"
          | "cohere/embed-multilingual-v2.0"
          | (string & {});
      };
  /** Body param */
  name: string;
  /** Body param: Specifies the description of the index. */
  description?: string;
}

export const CreateIndexRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  accountId: Schema.String.pipe(T.HttpPath("account_id")),
  config: Schema.Union([
    Schema.Struct({
      dimensions: Schema.Number,
      metric: Schema.Union([
        Schema.Literals(["cosine", "euclidean", "dot-product"]),
        Schema.String,
      ]),
    }),
    Schema.Struct({
      preset: Schema.Union([
        Schema.Literals([
          "@cf/baai/bge-small-en-v1.5",
          "@cf/baai/bge-base-en-v1.5",
          "@cf/baai/bge-large-en-v1.5",
          "openai/text-embedding-ada-002",
          "cohere/embed-multilingual-v2.0",
        ]),
        Schema.String,
      ]),
    }),
  ]),
  name: Schema.String,
  description: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "POST",
    path: "/accounts/{account_id}/vectorize/v2/indexes",
  }),
) as unknown as Schema.Schema<CreateIndexRequest>;

export interface CreateIndexResponse {
  config?: {
    dimensions: number;
    metric: "cosine" | "euclidean" | "dot-product" | (string & {});
  } | null;
  /** Specifies the timestamp the resource was created as an ISO8601 string. */
  createdOn?: string | null;
  /** Specifies the description of the index. */
  description?: string | null;
  /** Specifies the timestamp the resource was modified as an ISO8601 string. */
  modifiedOn?: string | null;
  name?: string | null;
}

export const CreateIndexResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  config: Schema.optional(
    Schema.Union([
      Schema.Struct({
        dimensions: Schema.Number,
        metric: Schema.Union([
          Schema.Literals(["cosine", "euclidean", "dot-product"]),
          Schema.String,
        ]),
      }),
      Schema.Null,
    ]),
  ),
  createdOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
})
  .pipe(
    Schema.encodeKeys({
      config: "config",
      createdOn: "created_on",
      description: "description",
      modifiedOn: "modified_on",
      name: "name",
    }),
  )
  .pipe(
    T.ResponsePath("result"),
  ) as unknown as Schema.Schema<CreateIndexResponse>;

export type CreateIndexError =
  | DefaultErrors
  | IndexAlreadyExists
  | IndexInvalidName
  | IndexInvalidConfig;

export const createIndex: API.OperationMethod<
  CreateIndexRequest,
  CreateIndexResponse,
  CreateIndexError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateIndexRequest,
  output: CreateIndexResponse,
  errors: [IndexAlreadyExists, IndexInvalidName, IndexInvalidConfig],
}));

export interface DeleteIndexRequest {
  indexName: string;
  /** Identifier */
  accountId: string;
}

export const DeleteIndexRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  indexName: Schema.String.pipe(T.HttpPath("indexName")),
  accountId: Schema.String.pipe(T.HttpPath("account_id")),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/accounts/{account_id}/vectorize/v2/indexes/{indexName}",
  }),
) as unknown as Schema.Schema<DeleteIndexRequest>;

export type DeleteIndexResponse = unknown;

export const DeleteIndexResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown.pipe(
    T.ResponsePath("result"),
  ) as unknown as Schema.Schema<DeleteIndexResponse>;

export type DeleteIndexError = DefaultErrors | NotFound | Gone;

export const deleteIndex: API.OperationMethod<
  DeleteIndexRequest,
  DeleteIndexResponse,
  DeleteIndexError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteIndexRequest,
  output: DeleteIndexResponse,
  errors: [NotFound, Gone],
}));

export interface InfoIndexRequest {
  indexName: string;
  /** Identifier */
  accountId: string;
}

export const InfoIndexRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  indexName: Schema.String.pipe(T.HttpPath("indexName")),
  accountId: Schema.String.pipe(T.HttpPath("account_id")),
}).pipe(
  T.Http({
    method: "GET",
    path: "/accounts/{account_id}/vectorize/v2/indexes/{indexName}/info",
  }),
) as unknown as Schema.Schema<InfoIndexRequest>;

export interface InfoIndexResponse {
  /** Specifies the number of dimensions for the index */
  dimensions?: number | null;
  /** Specifies the timestamp the last mutation batch was processed as an ISO8601 string. */
  processedUpToDatetime?: string | null;
  /** The unique identifier for the async mutation operation containing the changeset. */
  processedUpToMutation?: string | null;
  /** Specifies the number of vectors present in the index */
  vectorCount?: number | null;
}

export const InfoIndexResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  dimensions: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
  processedUpToDatetime: Schema.optional(
    Schema.Union([Schema.String, Schema.Null]),
  ),
  processedUpToMutation: Schema.optional(
    Schema.Union([Schema.String, Schema.Null]),
  ),
  vectorCount: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
}).pipe(
  T.ResponsePath("result"),
) as unknown as Schema.Schema<InfoIndexResponse>;

export type InfoIndexError = DefaultErrors;

export const infoIndex: API.OperationMethod<
  InfoIndexRequest,
  InfoIndexResponse,
  InfoIndexError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InfoIndexRequest,
  output: InfoIndexResponse,
  errors: [],
}));

export interface InsertIndexRequest {
  indexName: string;
  /** Path param: Identifier */
  accountId: string;
  /** Query param: Behavior for ndjson parse failures. */
  unparsableBehavior?: "error" | "discard" | (string & {});
  /** Body param: ndjson file containing vectors to insert. */
  body: File | Blob;
}

export const InsertIndexRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  indexName: Schema.String.pipe(T.HttpPath("indexName")),
  accountId: Schema.String.pipe(T.HttpPath("account_id")),
  unparsableBehavior: Schema.optional(
    Schema.Union([Schema.Literals(["error", "discard"]), Schema.String]),
  ).pipe(T.HttpQuery("unparsable-behavior")),
  body: UploadableSchema.pipe(T.HttpFormDataFile()).pipe(T.HttpBody()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/accounts/{account_id}/vectorize/v2/indexes/{indexName}/insert",
    contentType: "multipart",
  }),
) as unknown as Schema.Schema<InsertIndexRequest>;

export interface InsertIndexResponse {
  /** The unique identifier for the async mutation operation containing the changeset. */
  mutationId?: string | null;
}

export const InsertIndexResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  mutationId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
}).pipe(
  T.ResponsePath("result"),
) as unknown as Schema.Schema<InsertIndexResponse>;

export type InsertIndexError = DefaultErrors;

export const insertIndex: API.OperationMethod<
  InsertIndexRequest,
  InsertIndexResponse,
  InsertIndexError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: InsertIndexRequest,
  output: InsertIndexResponse,
  errors: [],
}));

export interface QueryIndexRequest {
  indexName: string;
  /** Path param: Identifier */
  accountId: string;
  /** Body param: The search vector that will be used to find the nearest neighbors. */
  vector: number[];
  /** Body param: A metadata filter expression used to limit nearest neighbor results. */
  filter?: unknown;
  /** Body param: Whether to return no metadata, indexed metadata or all metadata associated with the closest vectors. */
  returnMetadata?: "none" | "indexed" | "all" | (string & {});
  /** Body param: Whether to return the values associated with the closest vectors. */
  returnValues?: boolean;
  /** Body param: The number of nearest neighbors to find. */
  topK?: number;
}

export const QueryIndexRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  indexName: Schema.String.pipe(T.HttpPath("indexName")),
  accountId: Schema.String.pipe(T.HttpPath("account_id")),
  vector: Schema.Array(Schema.Number),
  filter: Schema.optional(Schema.Unknown),
  returnMetadata: Schema.optional(
    Schema.Union([Schema.Literals(["none", "indexed", "all"]), Schema.String]),
  ),
  returnValues: Schema.optional(Schema.Boolean),
  topK: Schema.optional(Schema.Number),
}).pipe(
  T.Http({
    method: "POST",
    path: "/accounts/{account_id}/vectorize/v2/indexes/{indexName}/query",
  }),
) as unknown as Schema.Schema<QueryIndexRequest>;

export interface QueryIndexResponse {
  /** Specifies the count of vectors returned by the search */
  count?: number | null;
  /** Array of vectors matched by the search */
  matches?:
    | {
        id?: string | null;
        metadata?: unknown | null;
        namespace?: string | null;
        score?: number | null;
        values?: number[] | null;
      }[]
    | null;
}

export const QueryIndexResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  count: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
  matches: Schema.optional(
    Schema.Union([
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
          metadata: Schema.optional(
            Schema.Union([Schema.Unknown, Schema.Null]),
          ),
          namespace: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          score: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
          values: Schema.optional(
            Schema.Union([Schema.Array(Schema.Number), Schema.Null]),
          ),
        }),
      ),
      Schema.Null,
    ]),
  ),
}).pipe(
  T.ResponsePath("result"),
) as unknown as Schema.Schema<QueryIndexResponse>;

export type QueryIndexError = DefaultErrors;

export const queryIndex: API.OperationMethod<
  QueryIndexRequest,
  QueryIndexResponse,
  QueryIndexError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: QueryIndexRequest,
  output: QueryIndexResponse,
  errors: [],
}));

export interface UpsertIndexRequest {
  indexName: string;
  /** Path param: Identifier */
  accountId: string;
  /** Query param: Behavior for ndjson parse failures. */
  unparsableBehavior?: "error" | "discard" | (string & {});
  /** Body param: ndjson file containing vectors to upsert. */
  body: File | Blob;
}

export const UpsertIndexRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  indexName: Schema.String.pipe(T.HttpPath("indexName")),
  accountId: Schema.String.pipe(T.HttpPath("account_id")),
  unparsableBehavior: Schema.optional(
    Schema.Union([Schema.Literals(["error", "discard"]), Schema.String]),
  ).pipe(T.HttpQuery("unparsable-behavior")),
  body: UploadableSchema.pipe(T.HttpFormDataFile()).pipe(T.HttpBody()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/accounts/{account_id}/vectorize/v2/indexes/{indexName}/upsert",
    contentType: "multipart",
  }),
) as unknown as Schema.Schema<UpsertIndexRequest>;

export interface UpsertIndexResponse {
  /** The unique identifier for the async mutation operation containing the changeset. */
  mutationId?: string | null;
}

export const UpsertIndexResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  mutationId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
}).pipe(
  T.ResponsePath("result"),
) as unknown as Schema.Schema<UpsertIndexResponse>;

export type UpsertIndexError = DefaultErrors;

export const upsertIndex: API.OperationMethod<
  UpsertIndexRequest,
  UpsertIndexResponse,
  UpsertIndexError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpsertIndexRequest,
  output: UpsertIndexResponse,
  errors: [],
}));

// =============================================================================
// IndexMetadataIndex
// =============================================================================

export interface ListIndexMetadataIndexesRequest {
  indexName: string;
  /** Identifier */
  accountId: string;
}

export const ListIndexMetadataIndexesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    indexName: Schema.String.pipe(T.HttpPath("indexName")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/accounts/{account_id}/vectorize/v2/indexes/{indexName}/metadata_index/list",
    }),
  ) as unknown as Schema.Schema<ListIndexMetadataIndexesRequest>;

export interface ListIndexMetadataIndexesResponse {
  /** Array of indexed metadata properties. */
  metadataIndexes?:
    | {
        indexType?:
          | "string"
          | "number"
          | "boolean"
          | "String"
          | "Number"
          | "Boolean"
          | (string & {})
          | null;
        propertyName?: string | null;
      }[]
    | null;
}

export const ListIndexMetadataIndexesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metadataIndexes: Schema.optional(
      Schema.Union([
        Schema.Array(
          Schema.Struct({
            indexType: Schema.optional(
              Schema.Union([
                Schema.Union([
                  Schema.Literals([
                    "string",
                    "number",
                    "boolean",
                    "String",
                    "Number",
                    "Boolean",
                  ]),
                  Schema.String,
                ]),
                Schema.Null,
              ]),
            ),
            propertyName: Schema.optional(
              Schema.Union([Schema.String, Schema.Null]),
            ),
          }),
        ),
        Schema.Null,
      ]),
    ),
  }).pipe(
    T.ResponsePath("result"),
  ) as unknown as Schema.Schema<ListIndexMetadataIndexesResponse>;

export type ListIndexMetadataIndexesError = DefaultErrors | NotFound | Gone;

export const listIndexMetadataIndexes: API.OperationMethod<
  ListIndexMetadataIndexesRequest,
  ListIndexMetadataIndexesResponse,
  ListIndexMetadataIndexesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListIndexMetadataIndexesRequest,
  output: ListIndexMetadataIndexesResponse,
  errors: [NotFound, Gone],
}));

export interface CreateIndexMetadataIndexRequest {
  indexName: string;
  /** Path param: Identifier */
  accountId: string;
  /** Body param: Specifies the type of metadata property to index. */
  indexType: "string" | "number" | "boolean" | (string & {});
  /** Body param: Specifies the metadata property to index. */
  propertyName: string;
}

export const CreateIndexMetadataIndexRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    indexName: Schema.String.pipe(T.HttpPath("indexName")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    indexType: Schema.Union([
      Schema.Literals(["string", "number", "boolean"]),
      Schema.String,
    ]),
    propertyName: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/accounts/{account_id}/vectorize/v2/indexes/{indexName}/metadata_index/create",
    }),
  ) as unknown as Schema.Schema<CreateIndexMetadataIndexRequest>;

export interface CreateIndexMetadataIndexResponse {
  /** The unique identifier for the async mutation operation containing the changeset. */
  mutationId?: string | null;
}

export const CreateIndexMetadataIndexResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mutationId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    T.ResponsePath("result"),
  ) as unknown as Schema.Schema<CreateIndexMetadataIndexResponse>;

export type CreateIndexMetadataIndexError =
  | DefaultErrors
  | NotFound
  | MetadataIndexAlreadyExists
  | MetadataIndexInvalidType;

export const createIndexMetadataIndex: API.OperationMethod<
  CreateIndexMetadataIndexRequest,
  CreateIndexMetadataIndexResponse,
  CreateIndexMetadataIndexError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateIndexMetadataIndexRequest,
  output: CreateIndexMetadataIndexResponse,
  errors: [NotFound, MetadataIndexAlreadyExists, MetadataIndexInvalidType],
}));

export interface DeleteIndexMetadataIndexRequest {
  indexName: string;
  /** Path param: Identifier */
  accountId: string;
  /** Body param: Specifies the metadata property for which the index must be deleted. */
  propertyName: string;
}

export const DeleteIndexMetadataIndexRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    indexName: Schema.String.pipe(T.HttpPath("indexName")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    propertyName: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/accounts/{account_id}/vectorize/v2/indexes/{indexName}/metadata_index/delete",
    }),
  ) as unknown as Schema.Schema<DeleteIndexMetadataIndexRequest>;

export interface DeleteIndexMetadataIndexResponse {
  /** The unique identifier for the async mutation operation containing the changeset. */
  mutationId?: string | null;
}

export const DeleteIndexMetadataIndexResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    mutationId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    T.ResponsePath("result"),
  ) as unknown as Schema.Schema<DeleteIndexMetadataIndexResponse>;

export type DeleteIndexMetadataIndexError =
  | DefaultErrors
  | NotFound
  | Gone
  | MetadataIndexNotFound;

export const deleteIndexMetadataIndex: API.OperationMethod<
  DeleteIndexMetadataIndexRequest,
  DeleteIndexMetadataIndexResponse,
  DeleteIndexMetadataIndexError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteIndexMetadataIndexRequest,
  output: DeleteIndexMetadataIndexResponse,
  errors: [NotFound, Gone, MetadataIndexNotFound],
}));

// =============================================================================
// VectorsIndex
// =============================================================================

export interface ListVectorsIndexRequest {
  indexName: string;
  /** Path param: Identifier */
  accountId: string;
  /** Query param: Maximum number of vectors to return */
  count?: number;
  /** Query param: Cursor for pagination to get the next page of results */
  cursor?: string;
}

export const ListVectorsIndexRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    indexName: Schema.String.pipe(T.HttpPath("indexName")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    count: Schema.optional(Schema.Number).pipe(T.HttpQuery("count")),
    cursor: Schema.optional(Schema.String).pipe(T.HttpQuery("cursor")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/accounts/{account_id}/vectorize/v2/indexes/{indexName}/list",
    }),
  ) as unknown as Schema.Schema<ListVectorsIndexRequest>;

export interface ListVectorsIndexResponse {
  /** Number of vectors returned in this response */
  count: number;
  /** Whether there are more vectors available beyond this response */
  isTruncated: boolean;
  /** Total number of vectors in the index */
  totalCount: number;
  /** Array of vector items */
  vectors: { id: string }[];
  /** When the cursor expires as an ISO8601 string */
  cursorExpirationTimestamp?: string | null;
  /** Cursor for the next page of results */
  nextCursor?: string | null;
}

export const ListVectorsIndexResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.Number,
    isTruncated: Schema.Boolean,
    totalCount: Schema.Number,
    vectors: Schema.Array(
      Schema.Struct({
        id: Schema.String,
      }),
    ),
    cursorExpirationTimestamp: Schema.optional(
      Schema.Union([Schema.String, Schema.Null]),
    ),
    nextCursor: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    T.ResponsePath("result"),
  ) as unknown as Schema.Schema<ListVectorsIndexResponse>;

export type ListVectorsIndexError = DefaultErrors;

export const listVectorsIndex: API.OperationMethod<
  ListVectorsIndexRequest,
  ListVectorsIndexResponse,
  ListVectorsIndexError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListVectorsIndexRequest,
  output: ListVectorsIndexResponse,
  errors: [],
}));
