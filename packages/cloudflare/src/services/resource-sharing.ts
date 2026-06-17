/**
 * Cloudflare RESOURCE-SHARING API
 *
 * Generated from Cloudflare TypeScript SDK.
 * DO NOT EDIT - regenerate with: bun scripts/generate.ts --service resource-sharing
 */

import * as Schema from "effect/Schema";
import type * as HttpClient from "effect/unstable/http/HttpClient";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import type { Credentials } from "../credentials.ts";
import { type DefaultErrors } from "../errors.ts";

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

export class ShareNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<ShareNotFound>()("ShareNotFound", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 1004 }, { status: 404 }],
) {}

export class ShareRecipientNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<ShareRecipientNotFound>()("ShareRecipientNotFound", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 1004 }, { status: 404 }],
) {}

export class ShareResourceNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<ShareResourceNotFound>()("ShareResourceNotFound", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 1004 }, { status: 404 }],
) {}

// =============================================================================
// Recipient
// =============================================================================

export interface GetRecipientRequest {
  shareId: string;
  recipientId: string;
  /** Path param: Account identifier. */
  accountId: string;
  /** Query param: Include resources in the response. */
  includeResources?: boolean;
}

export const GetRecipientRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      shareId: Schema.String.pipe(T.HttpPath("shareId")),
      recipientId: Schema.String.pipe(T.HttpPath("recipientId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      includeResources: Schema.optional(Schema.Boolean).pipe(
        T.HttpQuery("include_resources"),
      ),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/shares/{shareId}/recipients/{recipientId}",
      }),
    ),
) as unknown as Schema.Schema<GetRecipientRequest>;

export interface GetRecipientResponse {
  /** Share Recipient identifier tag. */
  id: string;
  /** Account identifier. */
  accountId: string;
  /** Share Recipient association status. */
  associationStatus:
    | "associating"
    | "associated"
    | "disassociating"
    | "disassociated"
    | (string & {});
  /** When the share was created. */
  created: string;
  /** When the share was modified. */
  modified: string;
  resources?:
    | {
        error: string;
        resourceId: string;
        resourceVersion: number;
        terminal: boolean;
      }[]
    | null;
}

export const GetRecipientResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      id: Schema.String,
      accountId: Schema.String,
      associationStatus: Schema.Union([
        Schema.Literals([
          "associating",
          "associated",
          "disassociating",
          "disassociated",
        ]),
        Schema.String,
      ]),
      created: Schema.String,
      modified: Schema.String,
      resources: Schema.optional(
        Schema.Union([
          Schema.Array(
            Schema.Struct({
              error: Schema.String,
              resourceId: Schema.String,
              resourceVersion: Schema.Number,
              terminal: Schema.Boolean,
            }).pipe(
              Schema.encodeKeys({
                error: "error",
                resourceId: "resource_id",
                resourceVersion: "resource_version",
                terminal: "terminal",
              }),
            ),
          ),
          Schema.Null,
        ]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          accountId: "account_id",
          associationStatus: "association_status",
          created: "created",
          modified: "modified",
          resources: "resources",
        }),
      )
      .pipe(T.ResponsePath("result")),
) as unknown as Schema.Schema<GetRecipientResponse>;

export type GetRecipientError =
  | DefaultErrors
  | ShareRecipientNotFound
  | Forbidden;

export const getRecipient: API.OperationMethod<
  GetRecipientRequest,
  GetRecipientResponse,
  GetRecipientError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetRecipientRequest,
  output: GetRecipientResponse,
  errors: [ShareRecipientNotFound, Forbidden],
}));

export interface ListRecipientsRequest {
  shareId: string;
  /** Path param: Account identifier. */
  accountId: string;
  page?: number;
  perPage?: number;
  /** Query param: Include resources in the response. */
  includeResources?: boolean;
}

export const ListRecipientsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      shareId: Schema.String.pipe(T.HttpPath("shareId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      page: Schema.optional(Schema.Number).pipe(T.HttpQuery("page")),
      perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
      includeResources: Schema.optional(Schema.Boolean).pipe(
        T.HttpQuery("include_resources"),
      ),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/shares/{shareId}/recipients",
      }),
    ),
) as unknown as Schema.Schema<ListRecipientsRequest>;

export interface ListRecipientsResponse {
  result: {
    id: string;
    accountId: string;
    associationStatus:
      | "associating"
      | "associated"
      | "disassociating"
      | "disassociated"
      | (string & {});
    created: string;
    modified: string;
    resources?:
      | {
          error: string;
          resourceId: string;
          resourceVersion: number;
          terminal: boolean;
        }[]
      | null;
  }[];
  resultInfo?: {
    count?: number | null;
    page?: number | null;
    perPage?: number | null;
    totalCount?: number | null;
  } | null;
}

export const ListRecipientsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(
        Schema.Struct({
          id: Schema.String,
          accountId: Schema.String,
          associationStatus: Schema.Union([
            Schema.Literals([
              "associating",
              "associated",
              "disassociating",
              "disassociated",
            ]),
            Schema.String,
          ]),
          created: Schema.String,
          modified: Schema.String,
          resources: Schema.optional(
            Schema.Union([
              Schema.Array(
                Schema.Struct({
                  error: Schema.String,
                  resourceId: Schema.String,
                  resourceVersion: Schema.Number,
                  terminal: Schema.Boolean,
                }).pipe(
                  Schema.encodeKeys({
                    error: "error",
                    resourceId: "resource_id",
                    resourceVersion: "resource_version",
                    terminal: "terminal",
                  }),
                ),
              ),
              Schema.Null,
            ]),
          ),
        }).pipe(
          Schema.encodeKeys({
            id: "id",
            accountId: "account_id",
            associationStatus: "association_status",
            created: "created",
            modified: "modified",
            resources: "resources",
          }),
        ),
      ),
      resultInfo: Schema.optional(
        Schema.Union([
          Schema.Struct({
            count: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
            page: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
            perPage: Schema.optional(
              Schema.Union([Schema.Number, Schema.Null]),
            ),
            totalCount: Schema.optional(
              Schema.Union([Schema.Number, Schema.Null]),
            ),
          }).pipe(
            Schema.encodeKeys({
              count: "count",
              page: "page",
              perPage: "per_page",
              totalCount: "total_count",
            }),
          ),
          Schema.Null,
        ]),
      ),
    }).pipe(Schema.encodeKeys({ result: "result", resultInfo: "result_info" })),
  ) as unknown as Schema.Schema<ListRecipientsResponse>;

export type ListRecipientsError = DefaultErrors | ShareNotFound | Forbidden;

export const listRecipients: API.PaginatedOperationMethod<
  ListRecipientsRequest,
  ListRecipientsResponse,
  ListRecipientsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListRecipientsRequest,
  output: ListRecipientsResponse,
  errors: [ShareNotFound, Forbidden],
  pagination: {
    mode: "page",
    inputToken: "page",
    outputToken: "resultInfo.page",
    items: "result",
    pageSize: "perPage",
  } as const,
}));

export interface CreateRecipientRequest {
  shareId: string;
  /** Path param: Account identifier. */
  pathAccountId: string;
  /** @deprecated This field has been renamed to `recipient_account_id`. Both names are accepted during the deprecation period. */
  bodyAccountId?: string;
  /** Body param: Organization identifier. */
  organizationId?: string;
  /** Body param: The account that will receive the share. */
  recipientAccountId?: string;
}

export const CreateRecipientRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      shareId: Schema.String.pipe(T.HttpPath("shareId")),
      pathAccountId: Schema.String.pipe(T.HttpPath("path_account_id")),
      bodyAccountId: Schema.optional(Schema.String),
      organizationId: Schema.optional(Schema.String),
      recipientAccountId: Schema.optional(Schema.String),
    }).pipe(
      Schema.encodeKeys({
        bodyAccountId: "body_account_id",
        organizationId: "organization_id",
        recipientAccountId: "recipient_account_id",
      }),
      T.Http({
        method: "POST",
        path: "/accounts/{path_account_id}/shares/{shareId}/recipients",
      }),
    ),
  ) as unknown as Schema.Schema<CreateRecipientRequest>;

export interface CreateRecipientResponse {
  /** Share Recipient identifier tag. */
  id: string;
  /** Account identifier. */
  accountId: string;
  /** Share Recipient association status. */
  associationStatus:
    | "associating"
    | "associated"
    | "disassociating"
    | "disassociated"
    | (string & {});
  /** When the share was created. */
  created: string;
  /** When the share was modified. */
  modified: string;
  resources?:
    | {
        error: string;
        resourceId: string;
        resourceVersion: number;
        terminal: boolean;
      }[]
    | null;
}

export const CreateRecipientResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      accountId: Schema.String,
      associationStatus: Schema.Union([
        Schema.Literals([
          "associating",
          "associated",
          "disassociating",
          "disassociated",
        ]),
        Schema.String,
      ]),
      created: Schema.String,
      modified: Schema.String,
      resources: Schema.optional(
        Schema.Union([
          Schema.Array(
            Schema.Struct({
              error: Schema.String,
              resourceId: Schema.String,
              resourceVersion: Schema.Number,
              terminal: Schema.Boolean,
            }).pipe(
              Schema.encodeKeys({
                error: "error",
                resourceId: "resource_id",
                resourceVersion: "resource_version",
                terminal: "terminal",
              }),
            ),
          ),
          Schema.Null,
        ]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          accountId: "account_id",
          associationStatus: "association_status",
          created: "created",
          modified: "modified",
          resources: "resources",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<CreateRecipientResponse>;

export type CreateRecipientError = DefaultErrors | ShareNotFound | Forbidden;

export const createRecipient: API.OperationMethod<
  CreateRecipientRequest,
  CreateRecipientResponse,
  CreateRecipientError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateRecipientRequest,
  output: CreateRecipientResponse,
  errors: [ShareNotFound, Forbidden],
}));

export interface DeleteRecipientRequest {
  shareId: string;
  recipientId: string;
  /** Account identifier. */
  accountId: string;
}

export const DeleteRecipientRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      shareId: Schema.String.pipe(T.HttpPath("shareId")),
      recipientId: Schema.String.pipe(T.HttpPath("recipientId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/accounts/{account_id}/shares/{shareId}/recipients/{recipientId}",
      }),
    ),
  ) as unknown as Schema.Schema<DeleteRecipientRequest>;

export interface DeleteRecipientResponse {
  /** Share Recipient identifier tag. */
  id: string;
  /** Account identifier. */
  accountId: string;
  /** Share Recipient association status. */
  associationStatus:
    | "associating"
    | "associated"
    | "disassociating"
    | "disassociated"
    | (string & {});
  /** When the share was created. */
  created: string;
  /** When the share was modified. */
  modified: string;
  resources?:
    | {
        error: string;
        resourceId: string;
        resourceVersion: number;
        terminal: boolean;
      }[]
    | null;
}

export const DeleteRecipientResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      accountId: Schema.String,
      associationStatus: Schema.Union([
        Schema.Literals([
          "associating",
          "associated",
          "disassociating",
          "disassociated",
        ]),
        Schema.String,
      ]),
      created: Schema.String,
      modified: Schema.String,
      resources: Schema.optional(
        Schema.Union([
          Schema.Array(
            Schema.Struct({
              error: Schema.String,
              resourceId: Schema.String,
              resourceVersion: Schema.Number,
              terminal: Schema.Boolean,
            }).pipe(
              Schema.encodeKeys({
                error: "error",
                resourceId: "resource_id",
                resourceVersion: "resource_version",
                terminal: "terminal",
              }),
            ),
          ),
          Schema.Null,
        ]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          accountId: "account_id",
          associationStatus: "association_status",
          created: "created",
          modified: "modified",
          resources: "resources",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<DeleteRecipientResponse>;

export type DeleteRecipientError =
  | DefaultErrors
  | ShareRecipientNotFound
  | Forbidden;

export const deleteRecipient: API.OperationMethod<
  DeleteRecipientRequest,
  DeleteRecipientResponse,
  DeleteRecipientError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteRecipientRequest,
  output: DeleteRecipientResponse,
  errors: [ShareRecipientNotFound, Forbidden],
}));

// =============================================================================
// Resource
// =============================================================================

export interface GetResourceRequest {
  shareId: string;
  shareResourceId: string;
  /** Account identifier. */
  accountId: string;
}

export const GetResourceRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      shareId: Schema.String.pipe(T.HttpPath("shareId")),
      shareResourceId: Schema.String.pipe(T.HttpPath("shareResourceId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/shares/{shareId}/resources/{shareResourceId}",
      }),
    ),
) as unknown as Schema.Schema<GetResourceRequest>;

export interface GetResourceResponse {
  /** Share Resource identifier. */
  id: string;
  /** When the share was created. */
  created: string;
  /** Resource Metadata. */
  meta: unknown;
  /** When the share was modified. */
  modified: string;
  /** Account identifier. */
  resourceAccountId: string;
  /** Share Resource identifier. */
  resourceId: string;
  /** Resource Type. */
  resourceType:
    | "custom-ruleset"
    | "gateway-policy"
    | "gateway-destination-ip"
    | "gateway-block-page-settings"
    | "gateway-extended-email-matching"
    | "idp-federation-grant"
    | (string & {});
  /** Resource Version. */
  resourceVersion: number;
  /** Resource Status. */
  status: "active" | "deleting" | "deleted" | (string & {});
}

export const GetResourceResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      id: Schema.String,
      created: Schema.String,
      meta: Schema.Unknown,
      modified: Schema.String,
      resourceAccountId: Schema.String,
      resourceId: Schema.String,
      resourceType: Schema.Union([
        Schema.Literals([
          "custom-ruleset",
          "gateway-policy",
          "gateway-destination-ip",
          "gateway-block-page-settings",
          "gateway-extended-email-matching",
          "idp-federation-grant",
        ]),
        Schema.String,
      ]),
      resourceVersion: Schema.Number,
      status: Schema.Union([
        Schema.Literals(["active", "deleting", "deleted"]),
        Schema.String,
      ]),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          created: "created",
          meta: "meta",
          modified: "modified",
          resourceAccountId: "resource_account_id",
          resourceId: "resource_id",
          resourceType: "resource_type",
          resourceVersion: "resource_version",
          status: "status",
        }),
      )
      .pipe(T.ResponsePath("result")),
) as unknown as Schema.Schema<GetResourceResponse>;

export type GetResourceError =
  | DefaultErrors
  | ShareResourceNotFound
  | Forbidden;

export const getResource: API.OperationMethod<
  GetResourceRequest,
  GetResourceResponse,
  GetResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetResourceRequest,
  output: GetResourceResponse,
  errors: [ShareResourceNotFound, Forbidden],
}));

export interface ListResourcesRequest {
  shareId: string;
  /** Path param: Account identifier. */
  accountId: string;
  page?: number;
  perPage?: number;
  /** Query param: Filter share resources by resource_type. */
  resourceType?:
    | "custom-ruleset"
    | "gateway-policy"
    | "gateway-destination-ip"
    | "gateway-block-page-settings"
    | "gateway-extended-email-matching"
    | "idp-federation-grant"
    | (string & {});
  /** Query param: Filter share resources by status. */
  status?: "active" | "deleting" | "deleted" | (string & {});
}

export const ListResourcesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      shareId: Schema.String.pipe(T.HttpPath("shareId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      page: Schema.optional(Schema.Number).pipe(T.HttpQuery("page")),
      perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
      resourceType: Schema.optional(
        Schema.Union([
          Schema.Literals([
            "custom-ruleset",
            "gateway-policy",
            "gateway-destination-ip",
            "gateway-block-page-settings",
            "gateway-extended-email-matching",
            "idp-federation-grant",
          ]),
          Schema.String,
        ]),
      ).pipe(T.HttpQuery("resource_type")),
      status: Schema.optional(
        Schema.Union([
          Schema.Literals(["active", "deleting", "deleted"]),
          Schema.String,
        ]),
      ).pipe(T.HttpQuery("status")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/shares/{shareId}/resources",
      }),
    ),
) as unknown as Schema.Schema<ListResourcesRequest>;

export interface ListResourcesResponse {
  result: {
    id: string;
    created: string;
    meta: unknown;
    modified: string;
    resourceAccountId: string;
    resourceId: string;
    resourceType:
      | "custom-ruleset"
      | "gateway-policy"
      | "gateway-destination-ip"
      | "gateway-block-page-settings"
      | "gateway-extended-email-matching"
      | "idp-federation-grant"
      | (string & {});
    resourceVersion: number;
    status: "active" | "deleting" | "deleted" | (string & {});
  }[];
  resultInfo?: {
    count?: number | null;
    page?: number | null;
    perPage?: number | null;
    totalCount?: number | null;
  } | null;
}

export const ListResourcesResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      result: Schema.Array(
        Schema.Struct({
          id: Schema.String,
          created: Schema.String,
          meta: Schema.Unknown,
          modified: Schema.String,
          resourceAccountId: Schema.String,
          resourceId: Schema.String,
          resourceType: Schema.Union([
            Schema.Literals([
              "custom-ruleset",
              "gateway-policy",
              "gateway-destination-ip",
              "gateway-block-page-settings",
              "gateway-extended-email-matching",
              "idp-federation-grant",
            ]),
            Schema.String,
          ]),
          resourceVersion: Schema.Number,
          status: Schema.Union([
            Schema.Literals(["active", "deleting", "deleted"]),
            Schema.String,
          ]),
        }).pipe(
          Schema.encodeKeys({
            id: "id",
            created: "created",
            meta: "meta",
            modified: "modified",
            resourceAccountId: "resource_account_id",
            resourceId: "resource_id",
            resourceType: "resource_type",
            resourceVersion: "resource_version",
            status: "status",
          }),
        ),
      ),
      resultInfo: Schema.optional(
        Schema.Union([
          Schema.Struct({
            count: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
            page: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
            perPage: Schema.optional(
              Schema.Union([Schema.Number, Schema.Null]),
            ),
            totalCount: Schema.optional(
              Schema.Union([Schema.Number, Schema.Null]),
            ),
          }).pipe(
            Schema.encodeKeys({
              count: "count",
              page: "page",
              perPage: "per_page",
              totalCount: "total_count",
            }),
          ),
          Schema.Null,
        ]),
      ),
    }).pipe(Schema.encodeKeys({ result: "result", resultInfo: "result_info" })),
) as unknown as Schema.Schema<ListResourcesResponse>;

export type ListResourcesError = DefaultErrors | ShareNotFound | Forbidden;

export const listResources: API.PaginatedOperationMethod<
  ListResourcesRequest,
  ListResourcesResponse,
  ListResourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListResourcesRequest,
  output: ListResourcesResponse,
  errors: [ShareNotFound, Forbidden],
  pagination: {
    mode: "page",
    inputToken: "page",
    outputToken: "resultInfo.page",
    items: "result",
    pageSize: "perPage",
  } as const,
}));

export interface CreateResourceRequest {
  shareId: string;
  /** Path param: Account identifier. */
  accountId: string;
  /** Body param: Resource Metadata. */
  meta: unknown;
  /** Body param: Account identifier. */
  resourceAccountId: string;
  /** Body param: Share Resource identifier. */
  resourceId: string;
  /** Body param: Resource Type. */
  resourceType:
    | "custom-ruleset"
    | "gateway-policy"
    | "gateway-destination-ip"
    | "gateway-block-page-settings"
    | "gateway-extended-email-matching"
    | "idp-federation-grant"
    | (string & {});
}

export const CreateResourceRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      shareId: Schema.String.pipe(T.HttpPath("shareId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      meta: Schema.Unknown,
      resourceAccountId: Schema.String,
      resourceId: Schema.String,
      resourceType: Schema.Union([
        Schema.Literals([
          "custom-ruleset",
          "gateway-policy",
          "gateway-destination-ip",
          "gateway-block-page-settings",
          "gateway-extended-email-matching",
          "idp-federation-grant",
        ]),
        Schema.String,
      ]),
    }).pipe(
      Schema.encodeKeys({
        meta: "meta",
        resourceAccountId: "resource_account_id",
        resourceId: "resource_id",
        resourceType: "resource_type",
      }),
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/shares/{shareId}/resources",
      }),
    ),
) as unknown as Schema.Schema<CreateResourceRequest>;

export interface CreateResourceResponse {
  /** Share Resource identifier. */
  id: string;
  /** When the share was created. */
  created: string;
  /** Resource Metadata. */
  meta: unknown;
  /** When the share was modified. */
  modified: string;
  /** Account identifier. */
  resourceAccountId: string;
  /** Share Resource identifier. */
  resourceId: string;
  /** Resource Type. */
  resourceType:
    | "custom-ruleset"
    | "gateway-policy"
    | "gateway-destination-ip"
    | "gateway-block-page-settings"
    | "gateway-extended-email-matching"
    | "idp-federation-grant"
    | (string & {});
  /** Resource Version. */
  resourceVersion: number;
  /** Resource Status. */
  status: "active" | "deleting" | "deleted" | (string & {});
}

export const CreateResourceResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      created: Schema.String,
      meta: Schema.Unknown,
      modified: Schema.String,
      resourceAccountId: Schema.String,
      resourceId: Schema.String,
      resourceType: Schema.Union([
        Schema.Literals([
          "custom-ruleset",
          "gateway-policy",
          "gateway-destination-ip",
          "gateway-block-page-settings",
          "gateway-extended-email-matching",
          "idp-federation-grant",
        ]),
        Schema.String,
      ]),
      resourceVersion: Schema.Number,
      status: Schema.Union([
        Schema.Literals(["active", "deleting", "deleted"]),
        Schema.String,
      ]),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          created: "created",
          meta: "meta",
          modified: "modified",
          resourceAccountId: "resource_account_id",
          resourceId: "resource_id",
          resourceType: "resource_type",
          resourceVersion: "resource_version",
          status: "status",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<CreateResourceResponse>;

export type CreateResourceError = DefaultErrors | ShareNotFound | Forbidden;

export const createResource: API.OperationMethod<
  CreateResourceRequest,
  CreateResourceResponse,
  CreateResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateResourceRequest,
  output: CreateResourceResponse,
  errors: [ShareNotFound, Forbidden],
}));

export interface UpdateResourceRequest {
  shareId: string;
  shareResourceId: string;
  /** Path param: Account identifier. */
  accountId: string;
  /** Body param: Resource Metadata. */
  meta: unknown;
}

export const UpdateResourceRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      shareId: Schema.String.pipe(T.HttpPath("shareId")),
      shareResourceId: Schema.String.pipe(T.HttpPath("shareResourceId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      meta: Schema.Unknown,
    }).pipe(
      T.Http({
        method: "PUT",
        path: "/accounts/{account_id}/shares/{shareId}/resources/{shareResourceId}",
      }),
    ),
) as unknown as Schema.Schema<UpdateResourceRequest>;

export interface UpdateResourceResponse {
  /** Share Resource identifier. */
  id: string;
  /** When the share was created. */
  created: string;
  /** Resource Metadata. */
  meta: unknown;
  /** When the share was modified. */
  modified: string;
  /** Account identifier. */
  resourceAccountId: string;
  /** Share Resource identifier. */
  resourceId: string;
  /** Resource Type. */
  resourceType:
    | "custom-ruleset"
    | "gateway-policy"
    | "gateway-destination-ip"
    | "gateway-block-page-settings"
    | "gateway-extended-email-matching"
    | "idp-federation-grant"
    | (string & {});
  /** Resource Version. */
  resourceVersion: number;
  /** Resource Status. */
  status: "active" | "deleting" | "deleted" | (string & {});
}

export const UpdateResourceResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      created: Schema.String,
      meta: Schema.Unknown,
      modified: Schema.String,
      resourceAccountId: Schema.String,
      resourceId: Schema.String,
      resourceType: Schema.Union([
        Schema.Literals([
          "custom-ruleset",
          "gateway-policy",
          "gateway-destination-ip",
          "gateway-block-page-settings",
          "gateway-extended-email-matching",
          "idp-federation-grant",
        ]),
        Schema.String,
      ]),
      resourceVersion: Schema.Number,
      status: Schema.Union([
        Schema.Literals(["active", "deleting", "deleted"]),
        Schema.String,
      ]),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          created: "created",
          meta: "meta",
          modified: "modified",
          resourceAccountId: "resource_account_id",
          resourceId: "resource_id",
          resourceType: "resource_type",
          resourceVersion: "resource_version",
          status: "status",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<UpdateResourceResponse>;

export type UpdateResourceError =
  | DefaultErrors
  | ShareResourceNotFound
  | Forbidden;

export const updateResource: API.OperationMethod<
  UpdateResourceRequest,
  UpdateResourceResponse,
  UpdateResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateResourceRequest,
  output: UpdateResourceResponse,
  errors: [ShareResourceNotFound, Forbidden],
}));

export interface DeleteResourceRequest {
  shareId: string;
  shareResourceId: string;
  /** Account identifier. */
  accountId: string;
}

export const DeleteResourceRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      shareId: Schema.String.pipe(T.HttpPath("shareId")),
      shareResourceId: Schema.String.pipe(T.HttpPath("shareResourceId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/accounts/{account_id}/shares/{shareId}/resources/{shareResourceId}",
      }),
    ),
) as unknown as Schema.Schema<DeleteResourceRequest>;

export interface DeleteResourceResponse {
  /** Share Resource identifier. */
  id: string;
  /** When the share was created. */
  created: string;
  /** Resource Metadata. */
  meta: unknown;
  /** When the share was modified. */
  modified: string;
  /** Account identifier. */
  resourceAccountId: string;
  /** Share Resource identifier. */
  resourceId: string;
  /** Resource Type. */
  resourceType:
    | "custom-ruleset"
    | "gateway-policy"
    | "gateway-destination-ip"
    | "gateway-block-page-settings"
    | "gateway-extended-email-matching"
    | "idp-federation-grant"
    | (string & {});
  /** Resource Version. */
  resourceVersion: number;
  /** Resource Status. */
  status: "active" | "deleting" | "deleted" | (string & {});
}

export const DeleteResourceResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      created: Schema.String,
      meta: Schema.Unknown,
      modified: Schema.String,
      resourceAccountId: Schema.String,
      resourceId: Schema.String,
      resourceType: Schema.Union([
        Schema.Literals([
          "custom-ruleset",
          "gateway-policy",
          "gateway-destination-ip",
          "gateway-block-page-settings",
          "gateway-extended-email-matching",
          "idp-federation-grant",
        ]),
        Schema.String,
      ]),
      resourceVersion: Schema.Number,
      status: Schema.Union([
        Schema.Literals(["active", "deleting", "deleted"]),
        Schema.String,
      ]),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          created: "created",
          meta: "meta",
          modified: "modified",
          resourceAccountId: "resource_account_id",
          resourceId: "resource_id",
          resourceType: "resource_type",
          resourceVersion: "resource_version",
          status: "status",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<DeleteResourceResponse>;

export type DeleteResourceError =
  | DefaultErrors
  | ShareResourceNotFound
  | Forbidden;

export const deleteResource: API.OperationMethod<
  DeleteResourceRequest,
  DeleteResourceResponse,
  DeleteResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteResourceRequest,
  output: DeleteResourceResponse,
  errors: [ShareResourceNotFound, Forbidden],
}));

// =============================================================================
// ResourceSharing
// =============================================================================

export interface GetResourceSharingRequest {
  shareId: string;
  /** Path param: Account identifier. */
  accountId: string;
  /** Query param: Include recipient counts in the response. */
  includeRecipientCounts?: boolean;
  /** Query param: Include resources in the response. */
  includeResources?: boolean;
}

export const GetResourceSharingRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      shareId: Schema.String.pipe(T.HttpPath("shareId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      includeRecipientCounts: Schema.optional(Schema.Boolean).pipe(
        T.HttpQuery("include_recipient_counts"),
      ),
      includeResources: Schema.optional(Schema.Boolean).pipe(
        T.HttpQuery("include_resources"),
      ),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/accounts/{account_id}/shares/{shareId}",
      }),
    ),
  ) as unknown as Schema.Schema<GetResourceSharingRequest>;

export interface GetResourceSharingResponse {
  /** Share identifier tag. */
  id: string;
  /** Account identifier. */
  accountId: string;
  /** The display name of an account. */
  accountName: string;
  /** When the share was created. */
  created: string;
  /** When the share was modified. */
  modified: string;
  /** The name of the share. */
  name: string;
  /** Organization identifier. */
  organizationId: string;
  status: "active" | "deleting" | "deleted" | (string & {});
  targetType: "account" | "organization" | (string & {});
  /** The number of recipients in the 'associated' state. This field is only included when requested via the 'include_recipient_counts' parameter. */
  associatedRecipientCount?: number | null;
  /** The number of recipients in the 'associating' state. This field is only included when requested via the 'include_recipient_counts' parameter. */
  associatingRecipientCount?: number | null;
  /** The number of recipients in the 'disassociated' state. This field is only included when requested via the 'include_recipient_counts' parameter. */
  disassociatedRecipientCount?: number | null;
  /** The number of recipients in the 'disassociating' state. This field is only included when requested via the 'include_recipient_counts' parameter. */
  disassociatingRecipientCount?: number | null;
  kind?: "sent" | "received" | (string & {}) | null;
  /** A list of resources that are part of the share. This field is only included when requested via the 'include_resources' parameter. */
  resources?:
    | {
        id: string;
        created: string;
        meta: unknown;
        modified: string;
        resourceAccountId: string;
        resourceId: string;
        resourceType:
          | "custom-ruleset"
          | "gateway-policy"
          | "gateway-destination-ip"
          | "gateway-block-page-settings"
          | "gateway-extended-email-matching"
          | "idp-federation-grant"
          | (string & {});
        resourceVersion: number;
        status: "active" | "deleting" | "deleted" | (string & {});
      }[]
    | null;
}

export const GetResourceSharingResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      accountId: Schema.String,
      accountName: Schema.String,
      created: Schema.String,
      modified: Schema.String,
      name: Schema.String,
      organizationId: Schema.String,
      status: Schema.Union([
        Schema.Literals(["active", "deleting", "deleted"]),
        Schema.String,
      ]),
      targetType: Schema.Union([
        Schema.Literals(["account", "organization"]),
        Schema.String,
      ]),
      associatedRecipientCount: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      associatingRecipientCount: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      disassociatedRecipientCount: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      disassociatingRecipientCount: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      kind: Schema.optional(
        Schema.Union([
          Schema.Union([Schema.Literals(["sent", "received"]), Schema.String]),
          Schema.Null,
        ]),
      ),
      resources: Schema.optional(
        Schema.Union([
          Schema.Array(
            Schema.Struct({
              id: Schema.String,
              created: Schema.String,
              meta: Schema.Unknown,
              modified: Schema.String,
              resourceAccountId: Schema.String,
              resourceId: Schema.String,
              resourceType: Schema.Union([
                Schema.Literals([
                  "custom-ruleset",
                  "gateway-policy",
                  "gateway-destination-ip",
                  "gateway-block-page-settings",
                  "gateway-extended-email-matching",
                  "idp-federation-grant",
                ]),
                Schema.String,
              ]),
              resourceVersion: Schema.Number,
              status: Schema.Union([
                Schema.Literals(["active", "deleting", "deleted"]),
                Schema.String,
              ]),
            }).pipe(
              Schema.encodeKeys({
                id: "id",
                created: "created",
                meta: "meta",
                modified: "modified",
                resourceAccountId: "resource_account_id",
                resourceId: "resource_id",
                resourceType: "resource_type",
                resourceVersion: "resource_version",
                status: "status",
              }),
            ),
          ),
          Schema.Null,
        ]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          accountId: "account_id",
          accountName: "account_name",
          created: "created",
          modified: "modified",
          name: "name",
          organizationId: "organization_id",
          status: "status",
          targetType: "target_type",
          associatedRecipientCount: "associated_recipient_count",
          associatingRecipientCount: "associating_recipient_count",
          disassociatedRecipientCount: "disassociated_recipient_count",
          disassociatingRecipientCount: "disassociating_recipient_count",
          kind: "kind",
          resources: "resources",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<GetResourceSharingResponse>;

export type GetResourceSharingError = DefaultErrors | ShareNotFound | Forbidden;

export const getResourceSharing: API.OperationMethod<
  GetResourceSharingRequest,
  GetResourceSharingResponse,
  GetResourceSharingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetResourceSharingRequest,
  output: GetResourceSharingResponse,
  errors: [ShareNotFound, Forbidden],
}));

export interface ListResourceSharingsRequest {
  /** Path param: Account identifier. */
  accountId: string;
  page?: number;
  perPage?: number;
  /** Query param: Direction to sort objects. */
  direction?: "asc" | "desc" | (string & {});
  /** Query param: Include recipient counts in the response. */
  includeRecipientCounts?: boolean;
  /** Query param: Include resources in the response. */
  includeResources?: boolean;
  /** Query param: Filter shares by kind. */
  kind?: "sent" | "received" | (string & {});
  /** Query param: Order shares by values in the given field. */
  order?: "name" | "created" | (string & {});
  /** Query param: Filter share resources by resource_types. */
  resourceTypes?: (
    | "custom-ruleset"
    | "gateway-policy"
    | "gateway-destination-ip"
    | "gateway-block-page-settings"
    | "gateway-extended-email-matching"
    | "idp-federation-grant"
    | (string & {})
  )[];
  /** Query param: Filter shares by status. */
  status?: "active" | "deleting" | "deleted" | (string & {});
  /** Query param: Filter shares by tag. Each value is either `key=value` (matches shares whose tags contain that key/value pair) or `key` alone (matches shares that have any value for that key). May be rep */
  tag?: string[];
  /** Query param: Filter shares by target_type. */
  targetType?: "account" | "organization" | (string & {});
}

export const ListResourceSharingsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      page: Schema.optional(Schema.Number).pipe(T.HttpQuery("page")),
      perPage: Schema.optional(Schema.Number).pipe(T.HttpQuery("per_page")),
      direction: Schema.optional(
        Schema.Union([Schema.Literals(["asc", "desc"]), Schema.String]),
      ).pipe(T.HttpQuery("direction")),
      includeRecipientCounts: Schema.optional(Schema.Boolean).pipe(
        T.HttpQuery("include_recipient_counts"),
      ),
      includeResources: Schema.optional(Schema.Boolean).pipe(
        T.HttpQuery("include_resources"),
      ),
      kind: Schema.optional(
        Schema.Union([Schema.Literals(["sent", "received"]), Schema.String]),
      ).pipe(T.HttpQuery("kind")),
      order: Schema.optional(
        Schema.Union([Schema.Literals(["name", "created"]), Schema.String]),
      ).pipe(T.HttpQuery("order")),
      resourceTypes: Schema.optional(
        Schema.Array(
          Schema.Union([
            Schema.Literals([
              "custom-ruleset",
              "gateway-policy",
              "gateway-destination-ip",
              "gateway-block-page-settings",
              "gateway-extended-email-matching",
              "idp-federation-grant",
            ]),
            Schema.String,
          ]),
        ),
      ).pipe(T.HttpQuery("resource_types")),
      status: Schema.optional(
        Schema.Union([
          Schema.Literals(["active", "deleting", "deleted"]),
          Schema.String,
        ]),
      ).pipe(T.HttpQuery("status")),
      tag: Schema.optional(Schema.Array(Schema.String)).pipe(
        T.HttpQuery("tag"),
      ),
      targetType: Schema.optional(
        Schema.Union([
          Schema.Literals(["account", "organization"]),
          Schema.String,
        ]),
      ).pipe(T.HttpQuery("target_type")),
    }).pipe(T.Http({ method: "GET", path: "/accounts/{account_id}/shares" })),
  ) as unknown as Schema.Schema<ListResourceSharingsRequest>;

export interface ListResourceSharingsResponse {
  result: {
    id: string;
    accountId: string;
    accountName: string;
    created: string;
    modified: string;
    name: string;
    organizationId: string;
    status: "active" | "deleting" | "deleted" | (string & {});
    targetType: "account" | "organization" | (string & {});
    associatedRecipientCount?: number | null;
    associatingRecipientCount?: number | null;
    disassociatedRecipientCount?: number | null;
    disassociatingRecipientCount?: number | null;
    kind?: "sent" | "received" | (string & {}) | null;
    resources?:
      | {
          id: string;
          created: string;
          meta: unknown;
          modified: string;
          resourceAccountId: string;
          resourceId: string;
          resourceType:
            | "custom-ruleset"
            | "gateway-policy"
            | "gateway-destination-ip"
            | "gateway-block-page-settings"
            | "gateway-extended-email-matching"
            | "idp-federation-grant"
            | (string & {});
          resourceVersion: number;
          status: "active" | "deleting" | "deleted" | (string & {});
        }[]
      | null;
  }[];
  resultInfo?: {
    count?: number | null;
    page?: number | null;
    perPage?: number | null;
    totalCount?: number | null;
  } | null;
}

export const ListResourceSharingsResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(
        Schema.Struct({
          id: Schema.String,
          accountId: Schema.String,
          accountName: Schema.String,
          created: Schema.String,
          modified: Schema.String,
          name: Schema.String,
          organizationId: Schema.String,
          status: Schema.Union([
            Schema.Literals(["active", "deleting", "deleted"]),
            Schema.String,
          ]),
          targetType: Schema.Union([
            Schema.Literals(["account", "organization"]),
            Schema.String,
          ]),
          associatedRecipientCount: Schema.optional(
            Schema.Union([Schema.Number, Schema.Null]),
          ),
          associatingRecipientCount: Schema.optional(
            Schema.Union([Schema.Number, Schema.Null]),
          ),
          disassociatedRecipientCount: Schema.optional(
            Schema.Union([Schema.Number, Schema.Null]),
          ),
          disassociatingRecipientCount: Schema.optional(
            Schema.Union([Schema.Number, Schema.Null]),
          ),
          kind: Schema.optional(
            Schema.Union([
              Schema.Union([
                Schema.Literals(["sent", "received"]),
                Schema.String,
              ]),
              Schema.Null,
            ]),
          ),
          resources: Schema.optional(
            Schema.Union([
              Schema.Array(
                Schema.Struct({
                  id: Schema.String,
                  created: Schema.String,
                  meta: Schema.Unknown,
                  modified: Schema.String,
                  resourceAccountId: Schema.String,
                  resourceId: Schema.String,
                  resourceType: Schema.Union([
                    Schema.Literals([
                      "custom-ruleset",
                      "gateway-policy",
                      "gateway-destination-ip",
                      "gateway-block-page-settings",
                      "gateway-extended-email-matching",
                      "idp-federation-grant",
                    ]),
                    Schema.String,
                  ]),
                  resourceVersion: Schema.Number,
                  status: Schema.Union([
                    Schema.Literals(["active", "deleting", "deleted"]),
                    Schema.String,
                  ]),
                }).pipe(
                  Schema.encodeKeys({
                    id: "id",
                    created: "created",
                    meta: "meta",
                    modified: "modified",
                    resourceAccountId: "resource_account_id",
                    resourceId: "resource_id",
                    resourceType: "resource_type",
                    resourceVersion: "resource_version",
                    status: "status",
                  }),
                ),
              ),
              Schema.Null,
            ]),
          ),
        }).pipe(
          Schema.encodeKeys({
            id: "id",
            accountId: "account_id",
            accountName: "account_name",
            created: "created",
            modified: "modified",
            name: "name",
            organizationId: "organization_id",
            status: "status",
            targetType: "target_type",
            associatedRecipientCount: "associated_recipient_count",
            associatingRecipientCount: "associating_recipient_count",
            disassociatedRecipientCount: "disassociated_recipient_count",
            disassociatingRecipientCount: "disassociating_recipient_count",
            kind: "kind",
            resources: "resources",
          }),
        ),
      ),
      resultInfo: Schema.optional(
        Schema.Union([
          Schema.Struct({
            count: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
            page: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
            perPage: Schema.optional(
              Schema.Union([Schema.Number, Schema.Null]),
            ),
            totalCount: Schema.optional(
              Schema.Union([Schema.Number, Schema.Null]),
            ),
          }).pipe(
            Schema.encodeKeys({
              count: "count",
              page: "page",
              perPage: "per_page",
              totalCount: "total_count",
            }),
          ),
          Schema.Null,
        ]),
      ),
    }).pipe(Schema.encodeKeys({ result: "result", resultInfo: "result_info" })),
  ) as unknown as Schema.Schema<ListResourceSharingsResponse>;

export type ListResourceSharingsError = DefaultErrors | Forbidden;

export const listResourceSharings: API.PaginatedOperationMethod<
  ListResourceSharingsRequest,
  ListResourceSharingsResponse,
  ListResourceSharingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListResourceSharingsRequest,
  output: ListResourceSharingsResponse,
  errors: [Forbidden],
  pagination: {
    mode: "page",
    inputToken: "page",
    outputToken: "resultInfo.page",
    items: "result",
    pageSize: "perPage",
  } as const,
}));

export interface CreateResourceSharingRequest {
  /** Path param: Account identifier. */
  accountId: string;
  /** Body param: The name of the share. */
  name: string;
  /** Body param */
  recipients: {
    accountId?: string;
    organizationId?: string;
    recipientAccountId?: string;
  }[];
  /** Body param */
  resources: {
    meta: unknown;
    resourceAccountId: string;
    resourceId: string;
    resourceType:
      | "custom-ruleset"
      | "gateway-policy"
      | "gateway-destination-ip"
      | "gateway-block-page-settings"
      | "gateway-extended-email-matching"
      | "idp-federation-grant"
      | (string & {});
  }[];
}

export const CreateResourceSharingRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      name: Schema.String,
      recipients: Schema.Array(
        Schema.Struct({
          accountId: Schema.optional(Schema.String),
          organizationId: Schema.optional(Schema.String),
          recipientAccountId: Schema.optional(Schema.String),
        }).pipe(
          Schema.encodeKeys({
            accountId: "account_id",
            organizationId: "organization_id",
            recipientAccountId: "recipient_account_id",
          }),
        ),
      ),
      resources: Schema.Array(
        Schema.Struct({
          meta: Schema.Unknown,
          resourceAccountId: Schema.String,
          resourceId: Schema.String,
          resourceType: Schema.Union([
            Schema.Literals([
              "custom-ruleset",
              "gateway-policy",
              "gateway-destination-ip",
              "gateway-block-page-settings",
              "gateway-extended-email-matching",
              "idp-federation-grant",
            ]),
            Schema.String,
          ]),
        }).pipe(
          Schema.encodeKeys({
            meta: "meta",
            resourceAccountId: "resource_account_id",
            resourceId: "resource_id",
            resourceType: "resource_type",
          }),
        ),
      ),
    }).pipe(T.Http({ method: "POST", path: "/accounts/{account_id}/shares" })),
  ) as unknown as Schema.Schema<CreateResourceSharingRequest>;

export interface CreateResourceSharingResponse {
  /** Share identifier tag. */
  id: string;
  /** Account identifier. */
  accountId: string;
  /** The display name of an account. */
  accountName: string;
  /** When the share was created. */
  created: string;
  /** When the share was modified. */
  modified: string;
  /** The name of the share. */
  name: string;
  /** Organization identifier. */
  organizationId: string;
  status: "active" | "deleting" | "deleted" | (string & {});
  targetType: "account" | "organization" | (string & {});
  /** The number of recipients in the 'associated' state. This field is only included when requested via the 'include_recipient_counts' parameter. */
  associatedRecipientCount?: number | null;
  /** The number of recipients in the 'associating' state. This field is only included when requested via the 'include_recipient_counts' parameter. */
  associatingRecipientCount?: number | null;
  /** The number of recipients in the 'disassociated' state. This field is only included when requested via the 'include_recipient_counts' parameter. */
  disassociatedRecipientCount?: number | null;
  /** The number of recipients in the 'disassociating' state. This field is only included when requested via the 'include_recipient_counts' parameter. */
  disassociatingRecipientCount?: number | null;
  kind?: "sent" | "received" | (string & {}) | null;
  /** A list of resources that are part of the share. This field is only included when requested via the 'include_resources' parameter. */
  resources?:
    | {
        id: string;
        created: string;
        meta: unknown;
        modified: string;
        resourceAccountId: string;
        resourceId: string;
        resourceType:
          | "custom-ruleset"
          | "gateway-policy"
          | "gateway-destination-ip"
          | "gateway-block-page-settings"
          | "gateway-extended-email-matching"
          | "idp-federation-grant"
          | (string & {});
        resourceVersion: number;
        status: "active" | "deleting" | "deleted" | (string & {});
      }[]
    | null;
}

export const CreateResourceSharingResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      accountId: Schema.String,
      accountName: Schema.String,
      created: Schema.String,
      modified: Schema.String,
      name: Schema.String,
      organizationId: Schema.String,
      status: Schema.Union([
        Schema.Literals(["active", "deleting", "deleted"]),
        Schema.String,
      ]),
      targetType: Schema.Union([
        Schema.Literals(["account", "organization"]),
        Schema.String,
      ]),
      associatedRecipientCount: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      associatingRecipientCount: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      disassociatedRecipientCount: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      disassociatingRecipientCount: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      kind: Schema.optional(
        Schema.Union([
          Schema.Union([Schema.Literals(["sent", "received"]), Schema.String]),
          Schema.Null,
        ]),
      ),
      resources: Schema.optional(
        Schema.Union([
          Schema.Array(
            Schema.Struct({
              id: Schema.String,
              created: Schema.String,
              meta: Schema.Unknown,
              modified: Schema.String,
              resourceAccountId: Schema.String,
              resourceId: Schema.String,
              resourceType: Schema.Union([
                Schema.Literals([
                  "custom-ruleset",
                  "gateway-policy",
                  "gateway-destination-ip",
                  "gateway-block-page-settings",
                  "gateway-extended-email-matching",
                  "idp-federation-grant",
                ]),
                Schema.String,
              ]),
              resourceVersion: Schema.Number,
              status: Schema.Union([
                Schema.Literals(["active", "deleting", "deleted"]),
                Schema.String,
              ]),
            }).pipe(
              Schema.encodeKeys({
                id: "id",
                created: "created",
                meta: "meta",
                modified: "modified",
                resourceAccountId: "resource_account_id",
                resourceId: "resource_id",
                resourceType: "resource_type",
                resourceVersion: "resource_version",
                status: "status",
              }),
            ),
          ),
          Schema.Null,
        ]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          accountId: "account_id",
          accountName: "account_name",
          created: "created",
          modified: "modified",
          name: "name",
          organizationId: "organization_id",
          status: "status",
          targetType: "target_type",
          associatedRecipientCount: "associated_recipient_count",
          associatingRecipientCount: "associating_recipient_count",
          disassociatedRecipientCount: "disassociated_recipient_count",
          disassociatingRecipientCount: "disassociating_recipient_count",
          kind: "kind",
          resources: "resources",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<CreateResourceSharingResponse>;

export type CreateResourceSharingError = DefaultErrors | Forbidden;

export const createResourceSharing: API.OperationMethod<
  CreateResourceSharingRequest,
  CreateResourceSharingResponse,
  CreateResourceSharingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateResourceSharingRequest,
  output: CreateResourceSharingResponse,
  errors: [Forbidden],
}));

export interface UpdateResourceSharingRequest {
  shareId: string;
  /** Path param: Account identifier. */
  accountId: string;
  /** Body param: The name of the share. */
  name: string;
}

export const UpdateResourceSharingRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      shareId: Schema.String.pipe(T.HttpPath("shareId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      name: Schema.String,
    }).pipe(
      T.Http({
        method: "PUT",
        path: "/accounts/{account_id}/shares/{shareId}",
      }),
    ),
  ) as unknown as Schema.Schema<UpdateResourceSharingRequest>;

export interface UpdateResourceSharingResponse {
  /** Share identifier tag. */
  id: string;
  /** Account identifier. */
  accountId: string;
  /** The display name of an account. */
  accountName: string;
  /** When the share was created. */
  created: string;
  /** When the share was modified. */
  modified: string;
  /** The name of the share. */
  name: string;
  /** Organization identifier. */
  organizationId: string;
  status: "active" | "deleting" | "deleted" | (string & {});
  targetType: "account" | "organization" | (string & {});
  /** The number of recipients in the 'associated' state. This field is only included when requested via the 'include_recipient_counts' parameter. */
  associatedRecipientCount?: number | null;
  /** The number of recipients in the 'associating' state. This field is only included when requested via the 'include_recipient_counts' parameter. */
  associatingRecipientCount?: number | null;
  /** The number of recipients in the 'disassociated' state. This field is only included when requested via the 'include_recipient_counts' parameter. */
  disassociatedRecipientCount?: number | null;
  /** The number of recipients in the 'disassociating' state. This field is only included when requested via the 'include_recipient_counts' parameter. */
  disassociatingRecipientCount?: number | null;
  kind?: "sent" | "received" | (string & {}) | null;
  /** A list of resources that are part of the share. This field is only included when requested via the 'include_resources' parameter. */
  resources?:
    | {
        id: string;
        created: string;
        meta: unknown;
        modified: string;
        resourceAccountId: string;
        resourceId: string;
        resourceType:
          | "custom-ruleset"
          | "gateway-policy"
          | "gateway-destination-ip"
          | "gateway-block-page-settings"
          | "gateway-extended-email-matching"
          | "idp-federation-grant"
          | (string & {});
        resourceVersion: number;
        status: "active" | "deleting" | "deleted" | (string & {});
      }[]
    | null;
}

export const UpdateResourceSharingResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      accountId: Schema.String,
      accountName: Schema.String,
      created: Schema.String,
      modified: Schema.String,
      name: Schema.String,
      organizationId: Schema.String,
      status: Schema.Union([
        Schema.Literals(["active", "deleting", "deleted"]),
        Schema.String,
      ]),
      targetType: Schema.Union([
        Schema.Literals(["account", "organization"]),
        Schema.String,
      ]),
      associatedRecipientCount: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      associatingRecipientCount: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      disassociatedRecipientCount: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      disassociatingRecipientCount: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      kind: Schema.optional(
        Schema.Union([
          Schema.Union([Schema.Literals(["sent", "received"]), Schema.String]),
          Schema.Null,
        ]),
      ),
      resources: Schema.optional(
        Schema.Union([
          Schema.Array(
            Schema.Struct({
              id: Schema.String,
              created: Schema.String,
              meta: Schema.Unknown,
              modified: Schema.String,
              resourceAccountId: Schema.String,
              resourceId: Schema.String,
              resourceType: Schema.Union([
                Schema.Literals([
                  "custom-ruleset",
                  "gateway-policy",
                  "gateway-destination-ip",
                  "gateway-block-page-settings",
                  "gateway-extended-email-matching",
                  "idp-federation-grant",
                ]),
                Schema.String,
              ]),
              resourceVersion: Schema.Number,
              status: Schema.Union([
                Schema.Literals(["active", "deleting", "deleted"]),
                Schema.String,
              ]),
            }).pipe(
              Schema.encodeKeys({
                id: "id",
                created: "created",
                meta: "meta",
                modified: "modified",
                resourceAccountId: "resource_account_id",
                resourceId: "resource_id",
                resourceType: "resource_type",
                resourceVersion: "resource_version",
                status: "status",
              }),
            ),
          ),
          Schema.Null,
        ]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          accountId: "account_id",
          accountName: "account_name",
          created: "created",
          modified: "modified",
          name: "name",
          organizationId: "organization_id",
          status: "status",
          targetType: "target_type",
          associatedRecipientCount: "associated_recipient_count",
          associatingRecipientCount: "associating_recipient_count",
          disassociatedRecipientCount: "disassociated_recipient_count",
          disassociatingRecipientCount: "disassociating_recipient_count",
          kind: "kind",
          resources: "resources",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<UpdateResourceSharingResponse>;

export type UpdateResourceSharingError =
  | DefaultErrors
  | ShareNotFound
  | Forbidden;

export const updateResourceSharing: API.OperationMethod<
  UpdateResourceSharingRequest,
  UpdateResourceSharingResponse,
  UpdateResourceSharingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateResourceSharingRequest,
  output: UpdateResourceSharingResponse,
  errors: [ShareNotFound, Forbidden],
}));

export interface DeleteResourceSharingRequest {
  shareId: string;
  /** Account identifier. */
  accountId: string;
}

export const DeleteResourceSharingRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      shareId: Schema.String.pipe(T.HttpPath("shareId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/accounts/{account_id}/shares/{shareId}",
      }),
    ),
  ) as unknown as Schema.Schema<DeleteResourceSharingRequest>;

export interface DeleteResourceSharingResponse {
  /** Share identifier tag. */
  id: string;
  /** Account identifier. */
  accountId: string;
  /** The display name of an account. */
  accountName: string;
  /** When the share was created. */
  created: string;
  /** When the share was modified. */
  modified: string;
  /** The name of the share. */
  name: string;
  /** Organization identifier. */
  organizationId: string;
  status: "active" | "deleting" | "deleted" | (string & {});
  targetType: "account" | "organization" | (string & {});
  /** The number of recipients in the 'associated' state. This field is only included when requested via the 'include_recipient_counts' parameter. */
  associatedRecipientCount?: number | null;
  /** The number of recipients in the 'associating' state. This field is only included when requested via the 'include_recipient_counts' parameter. */
  associatingRecipientCount?: number | null;
  /** The number of recipients in the 'disassociated' state. This field is only included when requested via the 'include_recipient_counts' parameter. */
  disassociatedRecipientCount?: number | null;
  /** The number of recipients in the 'disassociating' state. This field is only included when requested via the 'include_recipient_counts' parameter. */
  disassociatingRecipientCount?: number | null;
  kind?: "sent" | "received" | (string & {}) | null;
  /** A list of resources that are part of the share. This field is only included when requested via the 'include_resources' parameter. */
  resources?:
    | {
        id: string;
        created: string;
        meta: unknown;
        modified: string;
        resourceAccountId: string;
        resourceId: string;
        resourceType:
          | "custom-ruleset"
          | "gateway-policy"
          | "gateway-destination-ip"
          | "gateway-block-page-settings"
          | "gateway-extended-email-matching"
          | "idp-federation-grant"
          | (string & {});
        resourceVersion: number;
        status: "active" | "deleting" | "deleted" | (string & {});
      }[]
    | null;
}

export const DeleteResourceSharingResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
      accountId: Schema.String,
      accountName: Schema.String,
      created: Schema.String,
      modified: Schema.String,
      name: Schema.String,
      organizationId: Schema.String,
      status: Schema.Union([
        Schema.Literals(["active", "deleting", "deleted"]),
        Schema.String,
      ]),
      targetType: Schema.Union([
        Schema.Literals(["account", "organization"]),
        Schema.String,
      ]),
      associatedRecipientCount: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      associatingRecipientCount: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      disassociatedRecipientCount: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      disassociatingRecipientCount: Schema.optional(
        Schema.Union([Schema.Number, Schema.Null]),
      ),
      kind: Schema.optional(
        Schema.Union([
          Schema.Union([Schema.Literals(["sent", "received"]), Schema.String]),
          Schema.Null,
        ]),
      ),
      resources: Schema.optional(
        Schema.Union([
          Schema.Array(
            Schema.Struct({
              id: Schema.String,
              created: Schema.String,
              meta: Schema.Unknown,
              modified: Schema.String,
              resourceAccountId: Schema.String,
              resourceId: Schema.String,
              resourceType: Schema.Union([
                Schema.Literals([
                  "custom-ruleset",
                  "gateway-policy",
                  "gateway-destination-ip",
                  "gateway-block-page-settings",
                  "gateway-extended-email-matching",
                  "idp-federation-grant",
                ]),
                Schema.String,
              ]),
              resourceVersion: Schema.Number,
              status: Schema.Union([
                Schema.Literals(["active", "deleting", "deleted"]),
                Schema.String,
              ]),
            }).pipe(
              Schema.encodeKeys({
                id: "id",
                created: "created",
                meta: "meta",
                modified: "modified",
                resourceAccountId: "resource_account_id",
                resourceId: "resource_id",
                resourceType: "resource_type",
                resourceVersion: "resource_version",
                status: "status",
              }),
            ),
          ),
          Schema.Null,
        ]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          accountId: "account_id",
          accountName: "account_name",
          created: "created",
          modified: "modified",
          name: "name",
          organizationId: "organization_id",
          status: "status",
          targetType: "target_type",
          associatedRecipientCount: "associated_recipient_count",
          associatingRecipientCount: "associating_recipient_count",
          disassociatedRecipientCount: "disassociated_recipient_count",
          disassociatingRecipientCount: "disassociating_recipient_count",
          kind: "kind",
          resources: "resources",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<DeleteResourceSharingResponse>;

export type DeleteResourceSharingError =
  | DefaultErrors
  | ShareNotFound
  | Forbidden;

export const deleteResourceSharing: API.OperationMethod<
  DeleteResourceSharingRequest,
  DeleteResourceSharingResponse,
  DeleteResourceSharingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteResourceSharingRequest,
  output: DeleteResourceSharingResponse,
  errors: [ShareNotFound, Forbidden],
}));
