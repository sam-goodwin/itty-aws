// ==========================================================================
// My Business Q&A API (mybusinessqanda v1)
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
  name: "mybusinessqanda",
  version: "v1",
  rootUrl: "https://mybusinessqanda.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface Author {
  /** The type of user the author is. */
  type?:
    | "AUTHOR_TYPE_UNSPECIFIED"
    | "REGULAR_USER"
    | "LOCAL_GUIDE"
    | "MERCHANT"
    | (string & {});
  /** The profile photo URI of the user. */
  profilePhotoUri?: string;
  /** The display name of the user */
  displayName?: string;
}

export const Author = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  type: Schema.optional(Schema.String),
  profilePhotoUri: Schema.optional(Schema.String),
  displayName: Schema.optional(Schema.String),
}).annotate({ identifier: "Author" });

export interface Answer {
  /** Output only. The number of upvotes for the answer. */
  upvoteCount?: number;
  /** Required. The text of the answer. It should contain at least one non-whitespace character. The maximum length is 4096 characters. */
  text?: string;
  /** Output only. The timestamp for when the answer was last modified. */
  updateTime?: string;
  /** Output only. The timestamp for when the answer was written. Only retrieved during ListResponse fetching. */
  createTime?: string;
  /** Output only. The unique name for the answer locations/* /questions/* /answers/* */
  name?: string;
  /** Output only. The author of the answer. Will only be set during list operations. */
  author?: Author;
}

export const Answer = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  upvoteCount: Schema.optional(Schema.Number),
  text: Schema.optional(Schema.String),
  updateTime: Schema.optional(Schema.String),
  createTime: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  author: Schema.optional(Author),
}).annotate({ identifier: "Answer" });

export interface Question {
  /** Output only. The total number of answers posted for this question. */
  totalAnswerCount?: number;
  /** Output only. The timestamp for when the question was last modified. */
  updateTime?: string;
  /** Output only. A list of answers to the question, sorted by upvotes. This may not be a complete list of answers depending on the request parameters (answers_per_question) */
  topAnswers?: ReadonlyArray<Answer>;
  /** Output only. The number of upvotes for the question. */
  upvoteCount?: number;
  /** Required. The text of the question. It should contain at least three words and the total length should be greater than or equal to 10 characters. The maximum length is 4096 characters. */
  text?: string;
  /** Immutable. The unique name for the question. locations/* /questions/* This field will be ignored if set during question creation. */
  name?: string;
  /** Output only. The author of the question. */
  author?: Author;
  /** Output only. The timestamp for when the question was written. */
  createTime?: string;
}

export const Question = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  totalAnswerCount: Schema.optional(Schema.Number),
  updateTime: Schema.optional(Schema.String),
  topAnswers: Schema.optional(Schema.Array(Answer)),
  upvoteCount: Schema.optional(Schema.Number),
  text: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  author: Schema.optional(Author),
  createTime: Schema.optional(Schema.String),
}).annotate({ identifier: "Question" });

export interface ListQuestionsResponse {
  /** The total number of questions posted for this location across all pages. */
  totalSize?: number;
  /** The requested questions, */
  questions?: ReadonlyArray<Question>;
  /** If the number of questions exceeds the requested max page size, this field is populated with a token to fetch the next page of questions on a subsequent call. If there are no more questions, this field is not present in the response. */
  nextPageToken?: string;
}

export const ListQuestionsResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  totalSize: Schema.optional(Schema.Number),
  questions: Schema.optional(Schema.Array(Question)),
  nextPageToken: Schema.optional(Schema.String),
}).annotate({ identifier: "ListQuestionsResponse" });

export interface Empty {}

export const Empty = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
  identifier: "Empty",
});

export interface ListAnswersResponse {
  /** The total number of answers posted for this question across all pages. */
  totalSize?: number;
  /** The requested answers. */
  answers?: ReadonlyArray<Answer>;
  /** If the number of answers exceeds the requested max page size, this field is populated with a token to fetch the next page of answers on a subsequent call. If there are no more answers, this field is not present in the response. */
  nextPageToken?: string;
}

export const ListAnswersResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  totalSize: Schema.optional(Schema.Number),
  answers: Schema.optional(Schema.Array(Answer)),
  nextPageToken: Schema.optional(Schema.String),
}).annotate({ identifier: "ListAnswersResponse" });

export interface UpsertAnswerRequest {
  /** Required. The new answer. */
  answer?: Answer;
}

export const UpsertAnswerRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  answer: Schema.optional(Answer),
}).annotate({ identifier: "UpsertAnswerRequest" });

// ==========================================================================
// Operations
// ==========================================================================

export interface ListLocationsQuestionsRequest {
  /** Optional. A filter constraining the questions to return. The only filter currently supported is "ignore_answered=true" */
  filter?: string;
  /** Optional. If specified, the next page of questions is retrieved. */
  pageToken?: string;
  /** Optional. How many questions to fetch per page. The default and maximum `page_size` values are 10. */
  pageSize?: number;
  /** Optional. How many answers to fetch per question. The default and maximum `answers_per_question` values are 10. */
  answersPerQuestion?: number;
  /** Optional. The order to return the questions. Valid options include 'update_time desc' and 'upvote_count desc', which will return the questions sorted descendingly by the requested field. The default sort order is 'update_time desc'. */
  orderBy?: string;
  /** Required. The name of the location to fetch questions for. */
  parent: string;
}

export const ListLocationsQuestionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    answersPerQuestion: Schema.optional(Schema.Number).pipe(
      T.HttpQuery("answersPerQuestion"),
    ),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{parent}" }),
    svc,
  ) as unknown as Schema.Schema<ListLocationsQuestionsRequest>;

export type ListLocationsQuestionsResponse = ListQuestionsResponse;
export const ListLocationsQuestionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListQuestionsResponse;

export type ListLocationsQuestionsError = DefaultErrors;

/** Returns the paginated list of questions and some of its answers for a specified location. This operation is only valid if the specified location is verified. */
export const listLocationsQuestions: API.PaginatedOperationMethod<
  ListLocationsQuestionsRequest,
  ListLocationsQuestionsResponse,
  ListLocationsQuestionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListLocationsQuestionsRequest,
  output: ListLocationsQuestionsResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateLocationsQuestionsRequest {
  /** Required. The name of the location to write a question for. */
  parent: string;
  /** Request body */
  body?: Question;
}

export const CreateLocationsQuestionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(Question).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{parent}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateLocationsQuestionsRequest>;

export type CreateLocationsQuestionsResponse = Question;
export const CreateLocationsQuestionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Question;

export type CreateLocationsQuestionsError = DefaultErrors;

/** Adds a question for the specified location. */
export const createLocationsQuestions: API.OperationMethod<
  CreateLocationsQuestionsRequest,
  CreateLocationsQuestionsResponse,
  CreateLocationsQuestionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateLocationsQuestionsRequest,
  output: CreateLocationsQuestionsResponse,
  errors: [],
}));

export interface PatchLocationsQuestionsRequest {
  /** Immutable. The unique name for the question. locations/* /questions/* This field will be ignored if set during question creation. */
  name: string;
  /** Required. The specific fields to update. Only question text can be updated. */
  updateMask?: string;
  /** Request body */
  body?: Question;
}

export const PatchLocationsQuestionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(Question).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchLocationsQuestionsRequest>;

export type PatchLocationsQuestionsResponse = Question;
export const PatchLocationsQuestionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Question;

export type PatchLocationsQuestionsError = DefaultErrors;

/** Updates a specific question written by the current user. */
export const patchLocationsQuestions: API.OperationMethod<
  PatchLocationsQuestionsRequest,
  PatchLocationsQuestionsResponse,
  PatchLocationsQuestionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchLocationsQuestionsRequest,
  output: PatchLocationsQuestionsResponse,
  errors: [],
}));

export interface DeleteLocationsQuestionsRequest {
  /** Required. The name of the question to delete. */
  name: string;
}

export const DeleteLocationsQuestionsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteLocationsQuestionsRequest>;

export type DeleteLocationsQuestionsResponse = Empty;
export const DeleteLocationsQuestionsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteLocationsQuestionsError = DefaultErrors;

/** Deletes a specific question written by the current user. */
export const deleteLocationsQuestions: API.OperationMethod<
  DeleteLocationsQuestionsRequest,
  DeleteLocationsQuestionsResponse,
  DeleteLocationsQuestionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteLocationsQuestionsRequest,
  output: DeleteLocationsQuestionsResponse,
  errors: [],
}));

export interface ListLocationsQuestionsAnswersRequest {
  /** Optional. How many answers to fetch per page. The default and maximum `page_size` values are 10. */
  pageSize?: number;
  /** Optional. The order to return the answers. Valid options include 'update_time desc' and 'upvote_count desc', which will return the answers sorted descendingly by the requested field. The default sort order is 'update_time desc'. */
  orderBy?: string;
  /** Required. The name of the question to fetch answers for. */
  parent: string;
  /** Optional. If specified, the next page of answers is retrieved. */
  pageToken?: string;
}

export const ListLocationsQuestionsAnswersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{parent}/answers" }),
    svc,
  ) as unknown as Schema.Schema<ListLocationsQuestionsAnswersRequest>;

export type ListLocationsQuestionsAnswersResponse = ListAnswersResponse;
export const ListLocationsQuestionsAnswersResponse =
  /*@__PURE__*/ /*#__PURE__*/ ListAnswersResponse;

export type ListLocationsQuestionsAnswersError = DefaultErrors;

/** Returns the paginated list of answers for a specified question. */
export const listLocationsQuestionsAnswers: API.PaginatedOperationMethod<
  ListLocationsQuestionsAnswersRequest,
  ListLocationsQuestionsAnswersResponse,
  ListLocationsQuestionsAnswersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListLocationsQuestionsAnswersRequest,
  output: ListLocationsQuestionsAnswersResponse,
  errors: [],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface UpsertLocationsQuestionsAnswersRequest {
  /** Required. The name of the question to write an answer for. */
  parent: string;
  /** Request body */
  body?: UpsertAnswerRequest;
}

export const UpsertLocationsQuestionsAnswersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(UpsertAnswerRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{parent}/answers:upsert",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<UpsertLocationsQuestionsAnswersRequest>;

export type UpsertLocationsQuestionsAnswersResponse = Answer;
export const UpsertLocationsQuestionsAnswersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Answer;

export type UpsertLocationsQuestionsAnswersError = DefaultErrors;

/** Creates an answer or updates the existing answer written by the user for the specified question. A user can only create one answer per question. */
export const upsertLocationsQuestionsAnswers: API.OperationMethod<
  UpsertLocationsQuestionsAnswersRequest,
  UpsertLocationsQuestionsAnswersResponse,
  UpsertLocationsQuestionsAnswersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpsertLocationsQuestionsAnswersRequest,
  output: UpsertLocationsQuestionsAnswersResponse,
  errors: [],
}));

export interface DeleteLocationsQuestionsAnswersRequest {
  /** Required. The name of the question to delete an answer for. */
  name: string;
}

export const DeleteLocationsQuestionsAnswersRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{name}/answers:delete" }),
    svc,
  ) as unknown as Schema.Schema<DeleteLocationsQuestionsAnswersRequest>;

export type DeleteLocationsQuestionsAnswersResponse = Empty;
export const DeleteLocationsQuestionsAnswersResponse =
  /*@__PURE__*/ /*#__PURE__*/ Empty;

export type DeleteLocationsQuestionsAnswersError = DefaultErrors;

/** Deletes the answer written by the current user to a question. */
export const deleteLocationsQuestionsAnswers: API.OperationMethod<
  DeleteLocationsQuestionsAnswersRequest,
  DeleteLocationsQuestionsAnswersResponse,
  DeleteLocationsQuestionsAnswersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteLocationsQuestionsAnswersRequest,
  output: DeleteLocationsQuestionsAnswersResponse,
  errors: [],
}));
