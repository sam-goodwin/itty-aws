// ==========================================================================
// Developer Knowledge API (developerknowledge v1)
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
  name: "developerknowledge",
  version: "v1",
  rootUrl: "https://developerknowledge.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface Document {
  /** Identifier. Contains the resource name of the document. Format: `documents/{uri_without_scheme}` Example: `documents/docs.cloud.google.com/storage/docs/creating-buckets` */
  name?: string;
  /** Output only. Provides the URI of the content, such as `docs.cloud.google.com/storage/docs/creating-buckets`. */
  uri?: string;
  /** Output only. Represents the timestamp when the content or metadata of the document was last updated. */
  updateTime?: string;
  /** Output only. Provides a description of the document. */
  description?: string;
  /** Output only. Specifies the DocumentView of the document. */
  view?:
    | "DOCUMENT_VIEW_UNSPECIFIED"
    | "DOCUMENT_VIEW_BASIC"
    | "DOCUMENT_VIEW_FULL"
    | "DOCUMENT_VIEW_CONTENT"
    | (string & {});
  /** Output only. Contains the full content of the document in Markdown format. */
  content?: string;
  /** Output only. Provides the title of the document. */
  title?: string;
  /** Output only. Specifies the data source of the document. Example data source: `firebase.google.com` */
  dataSource?: string;
}

export const Document: Schema.Schema<Document> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    uri: Schema.optional(Schema.String),
    updateTime: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    view: Schema.optional(Schema.String),
    content: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
    dataSource: Schema.optional(Schema.String),
  }).annotate({ identifier: "Document" });

export interface BatchGetDocumentsResponse {
  /** Contains the documents requested. */
  documents?: ReadonlyArray<Document>;
}

export const BatchGetDocumentsResponse: Schema.Schema<BatchGetDocumentsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    documents: Schema.optional(Schema.Array(Document)),
  }).annotate({ identifier: "BatchGetDocumentsResponse" });

export interface DocumentChunk {
  /** Output only. Contains the content of the document chunk. */
  content?: string;
  /** Output only. Specifies the ID of this chunk within the document. The chunk ID is unique within a document, but not globally unique across documents. The chunk ID is not stable and may change over time. */
  id?: string;
  /** Output only. Represents metadata about the Document this chunk is from. The DocumentView of this Document message will be set to `DOCUMENT_VIEW_BASIC`. It is included here for convenience so that clients do not need to call DeveloperKnowledge.GetDocument or DeveloperKnowledge.BatchGetDocuments if they only need the metadata fields. Otherwise, clients should use DeveloperKnowledge.GetDocument or DeveloperKnowledge.BatchGetDocuments to fetch the full document content. */
  document?: Document;
  /** Output only. Contains the resource name of the document this chunk is from. Format: `documents/{uri_without_scheme}` Example: `documents/docs.cloud.google.com/storage/docs/creating-buckets` */
  parent?: string;
}

export const DocumentChunk: Schema.Schema<DocumentChunk> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    content: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    document: Schema.optional(Document),
    parent: Schema.optional(Schema.String),
  }).annotate({ identifier: "DocumentChunk" });

export interface SearchDocumentChunksResponse {
  /** Contains the search results for the given query. Each DocumentChunk in this list contains a snippet of content relevant to the search query. Use the DocumentChunk.parent field of each result with DeveloperKnowledge.GetDocument or DeveloperKnowledge.BatchGetDocuments to retrieve the full document content. */
  results?: ReadonlyArray<DocumentChunk>;
  /** Optional. Provides a token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const SearchDocumentChunksResponse: Schema.Schema<SearchDocumentChunksResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    results: Schema.optional(Schema.Array(DocumentChunk)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "SearchDocumentChunksResponse" });

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

// ==========================================================================
// Operations
// ==========================================================================

export interface BatchGetDocumentsRequest {
  /** Required. Specifies the names of the documents to retrieve. A maximum of 20 documents can be retrieved in a batch. The documents are returned in the same order as the `names` in the request. Format: `documents/{uri_without_scheme}` Example: `documents/docs.cloud.google.com/storage/docs/creating-buckets` */
  names?: string[];
  /** Optional. Specifies the DocumentView of the document. If unspecified, DeveloperKnowledge.BatchGetDocuments defaults to `DOCUMENT_VIEW_CONTENT`. */
  view?:
    | "DOCUMENT_VIEW_UNSPECIFIED"
    | "DOCUMENT_VIEW_BASIC"
    | "DOCUMENT_VIEW_FULL"
    | "DOCUMENT_VIEW_CONTENT"
    | (string & {});
}

export const BatchGetDocumentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    names: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("names"),
    ),
    view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/documents:batchGet" }),
    svc,
  ) as unknown as Schema.Schema<BatchGetDocumentsRequest>;

export type BatchGetDocumentsResponse_Op = BatchGetDocumentsResponse;
export const BatchGetDocumentsResponse_Op =
  /*@__PURE__*/ /*#__PURE__*/ BatchGetDocumentsResponse;

export type BatchGetDocumentsError = DefaultErrors | NotFound | Forbidden;

/** Retrieves multiple documents, each with its full Markdown content. */
export const batchGetDocuments: API.OperationMethod<
  BatchGetDocumentsRequest,
  BatchGetDocumentsResponse_Op,
  BatchGetDocumentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BatchGetDocumentsRequest,
  output: BatchGetDocumentsResponse_Op,
  errors: [NotFound, Forbidden],
}));

export interface SearchDocumentChunksDocumentsRequest {
  /** Optional. Specifies the maximum number of results to return. The service may return fewer than this value. If unspecified, at most 5 results will be returned. The maximum value is 20; values above 20 will result in an INVALID_ARGUMENT error. */
  pageSize?: number;
  /** Optional. Applies a strict filter to the search results. The expression supports a subset of the syntax described at https://google.aip.dev/160. While `SearchDocumentChunks` returns DocumentChunks, the filter is applied to `DocumentChunk.document` fields. Supported fields for filtering: * `data_source` (STRING): The source of the document, e.g. `docs.cloud.google.com`. See https://developers.google.com/knowledge/reference/corpus-reference for the complete list of data sources in the corpus. * `update_time` (TIMESTAMP): The timestamp of when the document was last meaningfully updated. A meaningful update is one that changes document's markdown content or metadata. * `uri` (STRING): The document URI, e.g. `https://docs.cloud.google.com/bigquery/docs/tables`. STRING fields support `=` (equals) and `!=` (not equals) operators for **exact match** on the whole string. Partial match, prefix match, and regexp match are not supported. TIMESTAMP fields support `=`, `<`, `<=`, `>`, and `>=` operators. Timestamps must be in RFC-3339 format, e.g., `"2025-01-01T00:00:00Z"`. You can combine expressions using `AND`, `OR`, and `NOT` (or `-`) logical operators. `OR` has higher precedence than `AND`. Use parentheses for explicit precedence grouping. Examples: * `data_source = "docs.cloud.google.com" OR data_source = "firebase.google.com"` * `data_source != "firebase.google.com"` * `update_time < "2024-01-01T00:00:00Z"` * `update_time >= "2025-01-22T00:00:00Z" AND (data_source = "developer.chrome.com" OR data_source = "web.dev")` * `uri = "https://docs.cloud.google.com/release-notes"` The `filter` string must not exceed 500 characters; values longer than 500 characters will result in an `INVALID_ARGUMENT` error. */
  filter?: string;
  /** Required. Provides the raw query string provided by the user, such as "How to create a Cloud Storage bucket?". */
  query?: string;
  /** Optional. Contains a page token, received from a previous `SearchDocumentChunks` call. Provide this to retrieve the subsequent page. */
  pageToken?: string;
}

export const SearchDocumentChunksDocumentsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    query: Schema.optional(Schema.String).pipe(T.HttpQuery("query")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/documents:searchDocumentChunks" }),
    svc,
  ) as unknown as Schema.Schema<SearchDocumentChunksDocumentsRequest>;

export type SearchDocumentChunksDocumentsResponse =
  SearchDocumentChunksResponse;
export const SearchDocumentChunksDocumentsResponse =
  /*@__PURE__*/ /*#__PURE__*/ SearchDocumentChunksResponse;

export type SearchDocumentChunksDocumentsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Searches for developer knowledge across Google's developer documentation. Returns DocumentChunks based on the user's query. There may be many chunks from the same Document. To retrieve full documents, use DeveloperKnowledge.GetDocument or DeveloperKnowledge.BatchGetDocuments with the DocumentChunk.parent returned in the SearchDocumentChunksResponse.results. */
export const searchDocumentChunksDocuments: API.PaginatedOperationMethod<
  SearchDocumentChunksDocumentsRequest,
  SearchDocumentChunksDocumentsResponse,
  SearchDocumentChunksDocumentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: SearchDocumentChunksDocumentsRequest,
  output: SearchDocumentChunksDocumentsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetDocumentsRequest {
  /** Required. Specifies the name of the document to retrieve. Format: `documents/{uri_without_scheme}` Example: `documents/docs.cloud.google.com/storage/docs/creating-buckets` */
  name: string;
  /** Optional. Specifies the DocumentView of the document. If unspecified, DeveloperKnowledge.GetDocument defaults to `DOCUMENT_VIEW_CONTENT`. */
  view?:
    | "DOCUMENT_VIEW_UNSPECIFIED"
    | "DOCUMENT_VIEW_BASIC"
    | "DOCUMENT_VIEW_FULL"
    | "DOCUMENT_VIEW_CONTENT"
    | (string & {});
}

export const GetDocumentsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.String.pipe(T.HttpPath("name")),
  view: Schema.optional(Schema.String).pipe(T.HttpQuery("view")),
}).pipe(
  T.Http({ method: "GET", path: "v1/{+name}" }),
  svc,
) as unknown as Schema.Schema<GetDocumentsRequest>;

export type GetDocumentsResponse = Document;
export const GetDocumentsResponse = /*@__PURE__*/ /*#__PURE__*/ Document;

export type GetDocumentsError = DefaultErrors | NotFound | Forbidden;

/** Retrieves a single document with its full Markdown content. */
export const getDocuments: API.OperationMethod<
  GetDocumentsRequest,
  GetDocumentsResponse,
  GetDocumentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetDocumentsRequest,
  output: GetDocumentsResponse,
  errors: [NotFound, Forbidden],
}));
