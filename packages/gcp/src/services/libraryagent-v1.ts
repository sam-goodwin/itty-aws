// ==========================================================================
// Library Agent API (libraryagent v1)
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
  name: "libraryagent",
  version: "v1",
  rootUrl: "https://libraryagent.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface GoogleExampleLibraryagentV1Shelf {
  /** Output only. The resource name of the shelf. Shelf names have the form `shelves/{shelf_id}`. The name is ignored when creating a shelf. */
  name?: string;
  /** The theme of the shelf */
  theme?: string;
}

export const GoogleExampleLibraryagentV1Shelf: Schema.Schema<GoogleExampleLibraryagentV1Shelf> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    theme: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleExampleLibraryagentV1Shelf" });

export interface GoogleExampleLibraryagentV1ListShelvesResponse {
  /** A token to retrieve next page of results. Pass this value in the ListShelvesRequest.page_token field in the subsequent call to `ListShelves` method to retrieve the next page of results. */
  nextPageToken?: string;
  /** The list of shelves. */
  shelves?: ReadonlyArray<GoogleExampleLibraryagentV1Shelf>;
}

export const GoogleExampleLibraryagentV1ListShelvesResponse: Schema.Schema<GoogleExampleLibraryagentV1ListShelvesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    shelves: Schema.optional(Schema.Array(GoogleExampleLibraryagentV1Shelf)),
  }).annotate({ identifier: "GoogleExampleLibraryagentV1ListShelvesResponse" });

export interface GoogleExampleLibraryagentV1Book {
  /** The name of the book author. */
  author?: string;
  /** The title of the book. */
  title?: string;
  /** Value indicating whether the book has been read. */
  read?: boolean;
  /** The resource name of the book. Book names have the form `shelves/{shelf_id}/books/{book_id}`. The name is ignored when creating a book. */
  name?: string;
}

export const GoogleExampleLibraryagentV1Book: Schema.Schema<GoogleExampleLibraryagentV1Book> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    author: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
    read: Schema.optional(Schema.Boolean),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleExampleLibraryagentV1Book" });

export interface GoogleExampleLibraryagentV1ListBooksResponse {
  /** The list of books. */
  books?: ReadonlyArray<GoogleExampleLibraryagentV1Book>;
  /** A token to retrieve next page of results. Pass this value in the ListBooksRequest.page_token field in the subsequent call to `ListBooks` method to retrieve the next page of results. */
  nextPageToken?: string;
}

export const GoogleExampleLibraryagentV1ListBooksResponse: Schema.Schema<GoogleExampleLibraryagentV1ListBooksResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    books: Schema.optional(Schema.Array(GoogleExampleLibraryagentV1Book)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleExampleLibraryagentV1ListBooksResponse" });

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

export interface ListShelvesRequest {
  /** Requested page size. Server may return fewer shelves than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
  /** A token identifying a page of results the server should return. Typically, this is the value of ListShelvesResponse.next_page_token returned from the previous call to `ListShelves` method. */
  pageToken?: string;
}

export const ListShelvesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
}).pipe(
  T.Http({ method: "GET", path: "v1/shelves" }),
  svc,
) as unknown as Schema.Schema<ListShelvesRequest>;

export type ListShelvesResponse =
  GoogleExampleLibraryagentV1ListShelvesResponse;
export const ListShelvesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleExampleLibraryagentV1ListShelvesResponse;

export type ListShelvesError = DefaultErrors | NotFound | Forbidden;

/** Lists shelves. The order is unspecified but deterministic. Newly created shelves will not necessarily be added to the end of this list. */
export const listShelves: API.PaginatedOperationMethod<
  ListShelvesRequest,
  ListShelvesResponse,
  ListShelvesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListShelvesRequest,
  output: ListShelvesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetShelvesRequest {
  /** Required. The name of the shelf to retrieve. */
  name: string;
}

export const GetShelvesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.String.pipe(T.HttpPath("name")),
}).pipe(
  T.Http({ method: "GET", path: "v1/{+name}" }),
  svc,
) as unknown as Schema.Schema<GetShelvesRequest>;

export type GetShelvesResponse = GoogleExampleLibraryagentV1Shelf;
export const GetShelvesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleExampleLibraryagentV1Shelf;

export type GetShelvesError = DefaultErrors | NotFound | Forbidden;

/** Gets a shelf. Returns NOT_FOUND if the shelf does not exist. */
export const getShelves: API.OperationMethod<
  GetShelvesRequest,
  GetShelvesResponse,
  GetShelvesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetShelvesRequest,
  output: GetShelvesResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetShelvesBooksRequest {
  /** Required. The name of the book to retrieve. */
  name: string;
}

export const GetShelvesBooksRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    name: Schema.String.pipe(T.HttpPath("name")),
  },
).pipe(
  T.Http({ method: "GET", path: "v1/{+name}" }),
  svc,
) as unknown as Schema.Schema<GetShelvesBooksRequest>;

export type GetShelvesBooksResponse = GoogleExampleLibraryagentV1Book;
export const GetShelvesBooksResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleExampleLibraryagentV1Book;

export type GetShelvesBooksError = DefaultErrors | NotFound | Forbidden;

/** Gets a book. Returns NOT_FOUND if the book does not exist. */
export const getShelvesBooks: API.OperationMethod<
  GetShelvesBooksRequest,
  GetShelvesBooksResponse,
  GetShelvesBooksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetShelvesBooksRequest,
  output: GetShelvesBooksResponse,
  errors: [NotFound, Forbidden],
}));

export interface ReturnShelvesBooksRequest {
  /** Required. The name of the book to return. */
  name: string;
}

export const ReturnShelvesBooksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:return", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<ReturnShelvesBooksRequest>;

export type ReturnShelvesBooksResponse = GoogleExampleLibraryagentV1Book;
export const ReturnShelvesBooksResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleExampleLibraryagentV1Book;

export type ReturnShelvesBooksError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Return a book to the library. Returns the book if it is returned to the library successfully. Returns error if the book does not belong to the library or the users didn't borrow before. */
export const returnShelvesBooks: API.OperationMethod<
  ReturnShelvesBooksRequest,
  ReturnShelvesBooksResponse,
  ReturnShelvesBooksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ReturnShelvesBooksRequest,
  output: ReturnShelvesBooksResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface BorrowShelvesBooksRequest {
  /** Required. The name of the book to borrow. */
  name: string;
}

export const BorrowShelvesBooksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:borrow", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<BorrowShelvesBooksRequest>;

export type BorrowShelvesBooksResponse = GoogleExampleLibraryagentV1Book;
export const BorrowShelvesBooksResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleExampleLibraryagentV1Book;

export type BorrowShelvesBooksError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Borrow a book from the library. Returns the book if it is borrowed successfully. Returns NOT_FOUND if the book does not exist in the library. Returns quota exceeded error if the amount of books borrowed exceeds allocation quota in any dimensions. */
export const borrowShelvesBooks: API.OperationMethod<
  BorrowShelvesBooksRequest,
  BorrowShelvesBooksResponse,
  BorrowShelvesBooksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BorrowShelvesBooksRequest,
  output: BorrowShelvesBooksResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListShelvesBooksRequest {
  /** Requested page size. Server may return fewer books than requested. If unspecified, server will pick an appropriate default. */
  pageSize?: number;
  /** A token identifying a page of results the server should return. Typically, this is the value of ListBooksResponse.next_page_token. returned from the previous call to `ListBooks` method. */
  pageToken?: string;
  /** Required. The name of the shelf whose books we'd like to list. */
  parent: string;
}

export const ListShelvesBooksRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/books" }),
    svc,
  ) as unknown as Schema.Schema<ListShelvesBooksRequest>;

export type ListShelvesBooksResponse =
  GoogleExampleLibraryagentV1ListBooksResponse;
export const ListShelvesBooksResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleExampleLibraryagentV1ListBooksResponse;

export type ListShelvesBooksError = DefaultErrors | NotFound | Forbidden;

/** Lists books in a shelf. The order is unspecified but deterministic. Newly created books will not necessarily be added to the end of this list. Returns NOT_FOUND if the shelf does not exist. */
export const listShelvesBooks: API.PaginatedOperationMethod<
  ListShelvesBooksRequest,
  ListShelvesBooksResponse,
  ListShelvesBooksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListShelvesBooksRequest,
  output: ListShelvesBooksResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));
