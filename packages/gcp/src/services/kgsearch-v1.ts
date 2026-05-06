// ==========================================================================
// Knowledge Graph Search API (kgsearch v1)
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
  name: "kgsearch",
  version: "v1",
  rootUrl: "https://kgsearch.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface SearchResponse {
  /** The schema type of top-level JSON-LD object, e.g. ItemList. */
  "@type"?: unknown;
  /** The item list of search results. */
  itemListElement?: ReadonlyArray<unknown>;
  /** The local context applicable for the response. See more details at http://www.w3.org/TR/json-ld/#context-definitions. */
  "@context"?: unknown;
}

export const SearchResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  "@type": Schema.optional(Schema.Unknown),
  itemListElement: Schema.optional(Schema.Array(Schema.Unknown)),
  "@context": Schema.optional(Schema.Unknown),
}).annotate({ identifier: "SearchResponse" });

// ==========================================================================
// Operations
// ==========================================================================

export interface SearchEntitiesRequest {
  /** The list of entity id to be used for search instead of query string. To specify multiple ids in the HTTP request, repeat the parameter in the URL as in ...?ids=A&ids=B */
  ids?: string[];
  /** Restricts returned entities with these types, e.g. Person (as defined in http://schema.org/Person). If multiple types are specified, returned entities will contain one or more of these types. */
  types?: string[];
  /** The literal query string for search. */
  query?: string;
  /** Limits the number of entities to be returned. */
  limit?: number;
  /** Enables indenting of json results. */
  indent?: boolean;
  /** Enables prefix match against names and aliases of entities */
  prefix?: boolean;
  /** The list of language codes (defined in ISO 693) to run the query with, e.g. 'en'. */
  languages?: string[];
}

export const SearchEntitiesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  ids: Schema.optional(Schema.Array(Schema.String)).pipe(T.HttpQuery("ids")),
  types: Schema.optional(Schema.Array(Schema.String)).pipe(
    T.HttpQuery("types"),
  ),
  query: Schema.optional(Schema.String).pipe(T.HttpQuery("query")),
  limit: Schema.optional(Schema.Number).pipe(T.HttpQuery("limit")),
  indent: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("indent")),
  prefix: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("prefix")),
  languages: Schema.optional(Schema.Array(Schema.String)).pipe(
    T.HttpQuery("languages"),
  ),
}).pipe(
  T.Http({ method: "GET", path: "v1/entities:search" }),
  svc,
) as unknown as Schema.Schema<SearchEntitiesRequest>;

export type SearchEntitiesResponse = SearchResponse;
export const SearchEntitiesResponse =
  /*@__PURE__*/ /*#__PURE__*/ SearchResponse;

export type SearchEntitiesError = DefaultErrors;

/** Searches Knowledge Graph for entities that match the constraints. A list of matched entities will be returned in response, which will be in JSON-LD format and compatible with http://schema.org */
export const searchEntities: API.OperationMethod<
  SearchEntitiesRequest,
  SearchEntitiesResponse,
  SearchEntitiesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SearchEntitiesRequest,
  output: SearchEntitiesResponse,
  errors: [],
}));
