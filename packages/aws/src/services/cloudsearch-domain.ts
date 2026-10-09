import * as API from "@distilled.cloud/core/api";
import * as __L from "@distilled.cloud/core/chunks";
import * as S from "@distilled.cloud/core/schema";
import * as HttpClient from "effect/http/HttpClient";
import type { Credentials } from "../credentials.ts";
import type { CommonErrors } from "../errors.ts";
import { AwsProtocol } from "../protocol.ts";
import { Retry } from "../retry.ts";
import * as T from "../traits.ts";
// Schema table, filled on first reach (see __S at the end).
const __s: any[] = [];
const ns = /*@__PURE__*/ T.XmlNamespace("http://cloudsearch.amazonaws.com/doc/2013-01-01/");
const svc = /*@__PURE__*/ T.AwsApiService({
  sdkId: "CloudSearch Domain",
  serviceShapeName: "AmazonCloudSearch2013",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "cloudsearch" });
const ver = /*@__PURE__*/ T.ServiceVersion("2013-01-01");
const proto = /*@__PURE__*/ T.AwsProtocolsRestJson1();
const rules = /*@__PURE__*/ T.EndpointResolver((p, _) => {
  const { Region, UseDualStack = false, UseFIPS = false, Endpoint } = p;
  const e = (u: unknown, p = {}, h = {}): T.EndpointResolverResult => ({
    type: "endpoint" as const,
    endpoint: { url: u as string, properties: p, headers: h },
  });
  const err = (m: unknown): T.EndpointResolverResult => ({
    type: "error" as const,
    message: m as string,
  });
  if (Endpoint != null) {
    if (UseFIPS === true) {
      return err("Invalid Configuration: FIPS and custom endpoint are not supported");
    }
    if (UseDualStack === true) {
      return err("Invalid Configuration: Dualstack and custom endpoint are not supported");
    }
    return e(Endpoint);
  }
  if (Region != null) {
    {
      const PartitionResult = _.partition(Region);
      if (PartitionResult != null && PartitionResult !== false) {
        if (UseFIPS === true && UseDualStack === true) {
          if (
            true === _.getAttr(PartitionResult, "supportsFIPS") &&
            true === _.getAttr(PartitionResult, "supportsDualStack")
          ) {
            return e(
              `https://cloudsearchdomain-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(
              `https://cloudsearchdomain-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
            );
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://cloudsearchdomain.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://cloudsearchdomain.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class DocumentServiceException
  extends /*@__PURE__*/ S.TaggedError<DocumentServiceException>()("DocumentServiceException", {
    status: /*@__PURE__*/ S.optional(S.String),
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class SearchException
  extends /*@__PURE__*/ S.TaggedError<SearchException>()("SearchException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export type Cursor = string;
export type Expr = string;
export type Facet = string;
export type FilterQuery = string;
export type Highlight = string;
export type Partial = boolean;
export type Query = string;
export type QueryOptions = string;
export type QueryParser = "simple" | "structured" | "lucene" | "dismax" | (string & {});
export type Return = string;
export type Size = number;
export type Sort = string;
export type Start = number;
export type Stat = string;
export interface SearchRequest {
  cursor?: string;
  expr?: string;
  facet?: string;
  filterQuery?: string;
  highlight?: string;
  partial?: boolean;
  query: string;
  queryOptions?: string;
  queryParser?: QueryParser;
  return?: string;
  size?: number;
  sort?: string;
  start?: number;
  stats?: string;
}
export interface SearchStatus {
  timems?: number;
  rid?: string;
}
export type FieldValue = string[];
export type Fields = { [key: string]: string[] | undefined };
export type Exprs = { [key: string]: string | undefined };
export type Highlights = { [key: string]: string | undefined };
export interface Hit {
  id?: string;
  fields?: { [key: string]: string[] | undefined };
  exprs?: { [key: string]: string | undefined };
  highlights?: { [key: string]: string | undefined };
}
export type HitList = Hit[];
export interface Hits {
  found?: number;
  start?: number;
  cursor?: string;
  hit?: Hit[];
}
export interface Bucket {
  value?: string;
  count?: number;
}
export type BucketList = Bucket[];
export interface BucketInfo {
  buckets?: Bucket[];
}
export type Facets = { [key: string]: BucketInfo | undefined };
export interface FieldStats {
  min?: string;
  max?: string;
  count?: number;
  missing?: number;
  sum?: number;
  sumOfSquares?: number;
  mean?: string;
  stddev?: number;
}
export type Stats = { [key: string]: FieldStats | undefined };
export interface SearchResponse {
  status?: SearchStatus;
  hits?: Hits;
  facets?: { [key: string]: BucketInfo | undefined };
  stats?: { [key: string]: FieldStats | undefined };
}
export type Suggester = string;
export type SuggestionsSize = number;
export interface SuggestRequest {
  query: string;
  suggester: string;
  size?: number;
}
export interface SuggestStatus {
  timems?: number;
  rid?: string;
}
export interface SuggestionMatch {
  suggestion?: string;
  score?: number;
  id?: string;
}
export type Suggestions = SuggestionMatch[];
export interface SuggestModel {
  query?: string;
  found?: number;
  suggestions?: SuggestionMatch[];
}
export interface SuggestResponse {
  status?: SuggestStatus;
  suggest?: SuggestModel;
}
export type ContentType = "application/json" | "application/xml" | (string & {});
export interface UploadDocumentsRequest {
  documents: T.StreamingInputBody;
  contentType: ContentType;
}
export type Adds = number;
export type Deletes = number;
export interface DocumentServiceWarning {
  message?: string;
}
export type DocumentServiceWarnings = DocumentServiceWarning[];
export interface UploadDocumentsResponse {
  status?: string;
  adds?: number;
  deletes?: number;
  warnings?: DocumentServiceWarning[];
}
export type SearchError = SearchException | CommonErrors;
/**
 * Retrieves a list of documents that match the specified search criteria. How you specify the search criteria depends on which query parser you use. Amazon CloudSearch supports four query parsers:
 *
 * - `simple`: search all `text` and `text-array` fields for the specified string. Search for phrases, individual terms, and prefixes.
 *
 * - `structured`: search specific fields, construct compound queries using Boolean operators, and use advanced features such as term boosting and proximity searching.
 *
 * - `lucene`: specify search criteria using the Apache Lucene query parser syntax.
 *
 * - `dismax`: specify search criteria using the simplified subset of the Apache Lucene query parser syntax defined by the DisMax query parser.
 *
 * For more information, see Searching Your Data in the *Amazon CloudSearch Developer Guide*.
 *
 * The endpoint for submitting `Search` requests is domain-specific. You submit search requests to a domain's search endpoint. To get the search endpoint for your domain, use the Amazon CloudSearch configuration service `DescribeDomains` action. A domain's endpoints are also displayed on the domain dashboard in the Amazon CloudSearch console.
 */
export const search: API.OperationMethod<
  SearchRequest,
  SearchResponse,
  SearchError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(0, __c0, 0) as any as S.Schema<SearchRequest>,
  output: __S(14, __c1, 6) as any as S.Schema<SearchResponse>,
  errors: [SearchException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "Search",
}));

export type SuggestError = SearchException | CommonErrors;
/**
 * Retrieves autocomplete suggestions for a partial query string. You can use suggestions enable you to display likely matches before users finish typing. In Amazon CloudSearch, suggestions are based on the contents of a particular text field. When you request suggestions, Amazon CloudSearch finds all of the documents whose values in the suggester field start with the specified query string. The beginning of the field must match the query string to be considered a match.
 *
 * For more information about configuring suggesters and retrieving suggestions, see Getting Suggestions in the *Amazon CloudSearch Developer Guide*.
 *
 * The endpoint for submitting `Suggest` requests is domain-specific. You submit suggest requests to a domain's search endpoint. To get the search endpoint for your domain, use the Amazon CloudSearch configuration service `DescribeDomains` action. A domain's endpoints are also displayed on the domain dashboard in the Amazon CloudSearch console.
 */
export const suggest: API.OperationMethod<
  SuggestRequest,
  SuggestResponse,
  SuggestError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(15, __c1, 7) as any as S.Schema<SuggestRequest>,
  output: __S(19, __c2, 3) as any as S.Schema<SuggestResponse>,
  errors: [SearchException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "Suggest",
}));

export type UploadDocumentsError = DocumentServiceException | CommonErrors;
/**
 * Posts a batch of documents to a search domain for indexing. A document batch is a collection of add and delete operations that represent the documents you want to add, update, or delete from your domain. Batches can be described in either JSON or XML. Each item that you want Amazon CloudSearch to return as a search result (such as a product) is represented as a document. Every document has a unique ID and one or more fields that contain the data that you want to search and return in results. Individual documents cannot contain more than 1 MB of data. The entire batch cannot exceed 5 MB. To get the best possible upload performance, group add and delete operations in batches that are close the 5 MB limit. Submitting a large volume of single-document batches can overload a domain's document service.
 *
 * The endpoint for submitting `UploadDocuments` requests is domain-specific. To get the document endpoint for your domain, use the Amazon CloudSearch configuration service `DescribeDomains` action. A domain's endpoints are also displayed on the domain dashboard in the Amazon CloudSearch console.
 *
 * For more information about formatting your data for Amazon CloudSearch, see Preparing Your Data in the *Amazon CloudSearch Developer Guide*.
 * For more information about uploading data for indexing, see Uploading Data in the *Amazon CloudSearch Developer Guide*.
 */
export const uploadDocuments: API.OperationMethod<
  UploadDocumentsRequest,
  UploadDocumentsResponse,
  UploadDocumentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(20, __c2, 4) as any as S.Schema<UploadDocumentsRequest>,
  output: __S(23, __c2, 7) as any as S.Schema<UploadDocumentsResponse>,
  errors: [DocumentServiceException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UploadDocuments",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          cursor: S.optional(S.String).pipe(T.HttpQuery("cursor")),
          expr: S.optional(S.String).pipe(T.HttpQuery("expr")),
          facet: S.optional(S.String).pipe(T.HttpQuery("facet")),
          filterQuery: S.optional(S.String).pipe(T.HttpQuery("fq")),
          highlight: S.optional(S.String).pipe(T.HttpQuery("highlight")),
          partial: S.optional(S.Boolean).pipe(T.HttpQuery("partial")),
          query: S.String.pipe(T.HttpQuery("q")),
          queryOptions: S.optional(S.String).pipe(T.HttpQuery("q.options")),
          queryParser: S.optional(S.String).pipe(T.HttpQuery("q.parser")),
          return: S.optional(S.String).pipe(T.HttpQuery("return")),
          size: S.optional(S.Number).pipe(T.HttpQuery("size")),
          sort: S.optional(S.String).pipe(T.HttpQuery("sort")),
          start: S.optional(S.Number).pipe(T.HttpQuery("start")),
          stats: S.optional(S.String).pipe(T.HttpQuery("stats")),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "GET", uri: "/2013-01-01/search?format=sdk&pretty=true" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "SearchRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({ timems: S.optional(S.Number), rid: S.optional(S.String) }),
      ).annotate({ identifier: "SearchStatus" });
    case 2:
      return S.Array(S.String);
    case 3:
      return S.Record(S.String, /*@__PURE__*/ __S(2, __c0, 2).pipe(S.optional));
    case 4:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 5:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          fields: S.optional(__S(3, __c0, 3)),
          exprs: S.optional(__S(4, __c0, 4)),
          highlights: S.optional(__S(4, __c0, 4)),
        }),
      ).annotate({ identifier: "Hit" });
    case 6:
      return S.Array(__S(5, __c0, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          found: S.optional(S.Number),
          start: S.optional(S.Number),
          cursor: S.optional(S.String),
          hit: S.optional(__S(6, __c0, 6)),
        }),
      ).annotate({ identifier: "Hits" });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ value: S.optional(S.String), count: S.optional(S.Number) }),
      ).annotate({ identifier: "Bucket" });
    case 1:
      return S.Array(__S(8, __c1, 0));
    case 2:
      return S.suspend(() => S.Struct({ buckets: S.optional(__S(9, __c1, 1)) })).annotate({
        identifier: "BucketInfo",
      });
    case 3:
      return S.Record(S.String, /*@__PURE__*/ __S(10, __c1, 2).pipe(S.optional));
    case 4:
      return S.suspend(() =>
        S.Struct({
          min: S.optional(S.String),
          max: S.optional(S.String),
          count: S.optional(S.Number),
          missing: S.optional(S.Number),
          sum: S.optional(S.Number),
          sumOfSquares: S.optional(S.Number),
          mean: S.optional(S.String),
          stddev: S.optional(S.Number),
        }),
      ).annotate({ identifier: "FieldStats" });
    case 5:
      return S.Record(S.String, /*@__PURE__*/ __S(12, __c1, 4).pipe(S.optional));
    case 6:
      return S.suspend(() =>
        S.Struct({
          status: S.optional(__S(1, __c0, 1)),
          hits: S.optional(__S(7, __c0, 7)),
          facets: S.optional(__S(11, __c1, 3)),
          stats: S.optional(__S(13, __c1, 5)),
        }).pipe(ns),
      ).annotate({ identifier: "SearchResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          query: S.String.pipe(T.HttpQuery("q")),
          suggester: S.String.pipe(T.HttpQuery("suggester")),
          size: S.optional(S.Number).pipe(T.HttpQuery("size")),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "GET", uri: "/2013-01-01/suggest?format=sdk&pretty=true" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "SuggestRequest" });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          suggestion: S.optional(S.String),
          score: S.optional(S.Number),
          id: S.optional(S.String),
        }),
      ).annotate({ identifier: "SuggestionMatch" });
    case 1:
      return S.Array(__S(16, __c2, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          query: S.optional(S.String),
          found: S.optional(S.Number),
          suggestions: S.optional(__S(17, __c2, 1)),
        }),
      ).annotate({ identifier: "SuggestModel" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          status: S.optional(__S(1, __c0, 1)),
          suggest: S.optional(__S(18, __c2, 2)),
        }).pipe(ns),
      ).annotate({ identifier: "SuggestResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          documents: T.StreamingInput.pipe(T.HttpPayload()),
          contentType: S.String.pipe(T.HttpHeader("Content-Type")),
        }).pipe(
          T.all(
            ns,
            T.Http({ method: "POST", uri: "/2013-01-01/documents/batch?format=sdk" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UploadDocumentsRequest" });
    case 5:
      return S.suspend(() => S.Struct({ message: S.optional(S.String) })).annotate({
        identifier: "DocumentServiceWarning",
      });
    case 6:
      return S.Array(__S(21, __c2, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          status: S.optional(S.String),
          adds: S.optional(S.Number),
          deletes: S.optional(S.Number),
          warnings: S.optional(__S(22, __c2, 6)),
        }).pipe(ns),
      ).annotate({ identifier: "UploadDocumentsResponse" });
  }
}

// Schema table: entry i is schema j of builder f, made on first reach.
function __S(i: number, f: (j: number) => unknown, j: number): any {
  return (__s[i] ??= __L.at(f, j));
}
