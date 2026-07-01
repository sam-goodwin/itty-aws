/**
 * Cloudflare SNIPPETS API
 *
 * Generated from Cloudflare TypeScript SDK.
 * DO NOT EDIT - regenerate with: bun scripts/generate.ts --service snippets
 */

import * as Schema from "@distilled.cloud/core/schema";
import type * as HttpClient from "effect/unstable/http/HttpClient";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import type { Credentials } from "../credentials.ts";
import { type DefaultErrors } from "../errors.ts";
import { UploadableSchema } from "../schemas.ts";

// =============================================================================
// Errors
// =============================================================================

export class Forbidden extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<Forbidden>()("Forbidden", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ status: 403 }],
) {}

export class SnippetInUse extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<SnippetInUse>()("SnippetInUse", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [
    { status: 400, message: { includes: "still used" } },
    { status: 409, message: { includes: "still used" } },
  ],
) {}

export class SnippetNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<SnippetNotFound>()("SnippetNotFound", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [
    { status: 400, message: { includes: "snippet not found" } },
    { status: 404 },
  ],
) {}

export class SnippetRulesNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<SnippetRulesNotFound>()("SnippetRulesNotFound", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ status: 404 }],
) {}

// =============================================================================
// Shared nested schemas (hoisted, module-private)
// =============================================================================

interface Rule {
  /** Define the expression that determines which traffic matches the rule. */
  expression: string;
  /** Identify the snippet. */
  snippetName: string;
  /** Provide an informative description of the rule. */
  description?: string | null;
  /** Indicate whether to execute the rule. */
  enabled?: boolean | null;
}
const Rule = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    expression: Schema.String,
    snippetName: Schema.String,
    description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    enabled: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      expression: "expression",
      snippetName: "snippet_name",
      description: "description",
      enabled: "enabled",
    }),
  ),
) as unknown as Schema.Codec<Rule>;

interface ListSnippetsResponseResult {
  /** Indicates when the snippet was created. */
  createdOn: string;
  /** Identify the snippet. */
  snippetName: string;
  /** Indicates when the snippet was last modified. */
  modifiedOn?: string | null;
}
const ListSnippetsResponseResult = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      createdOn: Schema.String,
      snippetName: Schema.String,
      modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    }).pipe(
      Schema.encodeKeys({
        createdOn: "created_on",
        snippetName: "snippet_name",
        modifiedOn: "modified_on",
      }),
    ),
) as unknown as Schema.Codec<ListSnippetsResponseResult>;

interface ListSnippetsResponseResultInfo {
  count?: number | null;
  page?: number | null;
  perPage?: number | null;
  totalCount?: number | null;
}
const ListSnippetsResponseResultInfo =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
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
  ) as unknown as Schema.Codec<ListSnippetsResponseResultInfo>;

interface Metadata {
  /** Specify the name of the file that contains the main module of the snippet. */
  mainModule: string;
}
const Metadata = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    mainModule: Schema.String,
  }).pipe(Schema.encodeKeys({ mainModule: "main_module" })),
) as unknown as Schema.Codec<Metadata>;

// =============================================================================
// Content
// =============================================================================

export interface GetContentRequest {
  snippetName: string;
  /** Use this field to specify the unique ID of the zone. */
  zoneId: string;
}

export const GetContentRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      snippetName: Schema.String.pipe(T.HttpPath("snippetName")),
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/zones/{zone_id}/snippets/{snippetName}/content",
      }),
    ),
) as unknown as Schema.Codec<GetContentRequest>;

export type GetContentResponse = unknown;

export const GetContentResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () => Schema.Unknown,
) as unknown as Schema.Codec<GetContentResponse>;

export type GetContentError = DefaultErrors;

export const getContent: API.OperationMethod<
  GetContentRequest,
  GetContentResponse,
  GetContentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetContentRequest,
  output: GetContentResponse,
  errors: [],
}));

// =============================================================================
// Rule
// =============================================================================

export interface GetRuleRequest {
  /** Use this field to specify the unique ID of the zone. */
  zoneId: string;
}

export const GetRuleRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
  }).pipe(
    T.Http({ method: "GET", path: "/zones/{zone_id}/snippets/snippet_rules" }),
  ),
) as unknown as Schema.Codec<GetRuleRequest>;

export type GetRuleResponse = unknown;

export const GetRuleResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Unknown.pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<GetRuleResponse>;

export type GetRuleError = DefaultErrors;

export const getRule: API.OperationMethod<
  GetRuleRequest,
  GetRuleResponse,
  GetRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetRuleRequest,
  output: GetRuleResponse,
  errors: [],
}));

export interface ListRulesRequest {
  /** Use this field to specify the unique ID of the zone. */
  zoneId: string;
}

export const ListRulesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
  }).pipe(
    T.Http({ method: "GET", path: "/zones/{zone_id}/snippets/snippet_rules" }),
  ),
) as unknown as Schema.Codec<ListRulesRequest>;

export type ListRulesResponse = unknown;

export const ListRulesResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () => Schema.Unknown.pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<ListRulesResponse>;

export type ListRulesError = DefaultErrors | SnippetRulesNotFound | Forbidden;

export const listRules: API.OperationMethod<
  ListRulesRequest,
  ListRulesResponse,
  ListRulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListRulesRequest,
  output: ListRulesResponse,
  errors: [SnippetRulesNotFound, Forbidden],
}));

export interface PutRuleRequest {
  /** Path param: Use this field to specify the unique ID of the zone. */
  zoneId: string;
  /** Body param: Lists snippet rules. */
  rules: {
    expression: string;
    snippetName: string;
    description?: string;
    enabled?: boolean;
  }[];
}

export const PutRuleRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    rules: Schema.Array(Rule),
  }).pipe(
    T.Http({ method: "PUT", path: "/zones/{zone_id}/snippets/snippet_rules" }),
  ),
) as unknown as Schema.Codec<PutRuleRequest>;

export type PutRuleResponse = unknown;

export const PutRuleResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Unknown.pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<PutRuleResponse>;

export type PutRuleError = DefaultErrors;

export const putRule: API.OperationMethod<
  PutRuleRequest,
  PutRuleResponse,
  PutRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PutRuleRequest,
  output: PutRuleResponse,
  errors: [],
}));

export interface DeleteRuleRequest {
  /** Use this field to specify the unique ID of the zone. */
  zoneId: string;
}

export const DeleteRuleRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/zones/{zone_id}/snippets/snippet_rules",
      }),
    ),
) as unknown as Schema.Codec<DeleteRuleRequest>;

export type DeleteRuleResponse = unknown;

export const DeleteRuleResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () => Schema.Unknown.pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<DeleteRuleResponse>;

export type DeleteRuleError = DefaultErrors | SnippetRulesNotFound | Forbidden;

export const deleteRule: API.OperationMethod<
  DeleteRuleRequest,
  DeleteRuleResponse,
  DeleteRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteRuleRequest,
  output: DeleteRuleResponse,
  errors: [SnippetRulesNotFound, Forbidden],
}));

// =============================================================================
// Snippet
// =============================================================================

export interface GetSnippetRequest {
  snippetName: string;
  /** Use this field to specify the unique ID of the zone. */
  zoneId: string;
}

export const GetSnippetRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      snippetName: Schema.String.pipe(T.HttpPath("snippetName")),
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/zones/{zone_id}/snippets/{snippetName}",
      }),
    ),
) as unknown as Schema.Codec<GetSnippetRequest>;

export interface GetSnippetResponse {
  /** Indicates when the snippet was created. */
  createdOn: string;
  /** Identify the snippet. */
  snippetName: string;
  /** Indicates when the snippet was last modified. */
  modifiedOn?: string | null;
}

export const GetSnippetResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      createdOn: Schema.String,
      snippetName: Schema.String,
      modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          createdOn: "created_on",
          snippetName: "snippet_name",
          modifiedOn: "modified_on",
        }),
      )
      .pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<GetSnippetResponse>;

export type GetSnippetError = DefaultErrors | SnippetNotFound;

export const getSnippet: API.OperationMethod<
  GetSnippetRequest,
  GetSnippetResponse,
  GetSnippetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetSnippetRequest,
  output: GetSnippetResponse,
  errors: [SnippetNotFound],
}));

export interface ListSnippetsRequest {
  /** Path param: Use this field to specify the unique ID of the zone. */
  zoneId: string;
  page?: number;
  perPage?: number;
}

export const ListSnippetsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      page: Schema.optional(Schema.Number).pipe(T.HttpQuery("page")),
      perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
    }).pipe(T.Http({ method: "GET", path: "/zones/{zone_id}/snippets" })),
) as unknown as Schema.Codec<ListSnippetsRequest>;

export interface ListSnippetsResponse {
  result:
    | { createdOn: string; snippetName: string; modifiedOn?: string | null }[]
    | null;
  resultInfo?: {
    count?: number | null;
    page?: number | null;
    perPage?: number | null;
    totalCount?: number | null;
  } | null;
}

export const ListSnippetsResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      result: Schema.Union([
        Schema.Array(ListSnippetsResponseResult),
        Schema.Null,
      ]),
      resultInfo: Schema.optional(
        Schema.Union([ListSnippetsResponseResultInfo, Schema.Null]),
      ),
    }).pipe(Schema.encodeKeys({ result: "result", resultInfo: "result_info" })),
) as unknown as Schema.Codec<ListSnippetsResponse>;

export type ListSnippetsError = DefaultErrors | Forbidden;

export const listSnippets: API.PaginatedOperationMethod<
  ListSnippetsRequest,
  ListSnippetsResponse,
  ListSnippetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListSnippetsRequest,
  output: ListSnippetsResponse,
  errors: [Forbidden],
  pagination: {
    mode: "page",
    inputToken: "page",
    outputToken: "resultInfo.page",
    items: "result",
    pageSize: "perPage",
  } as const,
}));

export interface PutSnippetRequest {
  snippetName: string;
  /** Path param: Use this field to specify the unique ID of the zone. */
  zoneId: string;
  /** Body param: Provide metadata about the snippet. */
  metadata: { mainModule: string };
  files?: File | Blob;
}

export const PutSnippetRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      snippetName: Schema.String.pipe(T.HttpPath("snippetName")),
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      metadata: Metadata,
      files: Schema.optional(UploadableSchema.pipe(T.HttpFormDataFile())),
    }).pipe(
      T.Http({
        method: "PUT",
        path: "/zones/{zone_id}/snippets/{snippetName}",
        contentType: "multipart",
      }),
    ),
) as unknown as Schema.Codec<PutSnippetRequest>;

export interface PutSnippetResponse {
  /** Indicates when the snippet was created. */
  createdOn: string;
  /** Identify the snippet. */
  snippetName: string;
  /** Indicates when the snippet was last modified. */
  modifiedOn?: string | null;
}

export const PutSnippetResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      createdOn: Schema.String,
      snippetName: Schema.String,
      modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          createdOn: "created_on",
          snippetName: "snippet_name",
          modifiedOn: "modified_on",
        }),
      )
      .pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<PutSnippetResponse>;

export type PutSnippetError = DefaultErrors;

export const putSnippet: API.OperationMethod<
  PutSnippetRequest,
  PutSnippetResponse,
  PutSnippetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PutSnippetRequest,
  output: PutSnippetResponse,
  errors: [],
}));

export interface DeleteSnippetRequest {
  snippetName: string;
  /** Use this field to specify the unique ID of the zone. */
  zoneId: string;
}

export const DeleteSnippetRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      snippetName: Schema.String.pipe(T.HttpPath("snippetName")),
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/zones/{zone_id}/snippets/{snippetName}",
      }),
    ),
) as unknown as Schema.Codec<DeleteSnippetRequest>;

export type DeleteSnippetResponse = unknown;

export const DeleteSnippetResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () => Schema.Unknown.pipe(T.ResponsePath("result")),
) as unknown as Schema.Codec<DeleteSnippetResponse>;

export type DeleteSnippetError = DefaultErrors | SnippetNotFound | SnippetInUse;

export const deleteSnippet: API.OperationMethod<
  DeleteSnippetRequest,
  DeleteSnippetResponse,
  DeleteSnippetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteSnippetRequest,
  output: DeleteSnippetResponse,
  errors: [SnippetNotFound, SnippetInUse],
}));
