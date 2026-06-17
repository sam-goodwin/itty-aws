/**
 * Cloudflare WEB3 API
 *
 * Generated from Cloudflare TypeScript SDK.
 * DO NOT EDIT - regenerate with: bun scripts/generate.ts --service web3
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

export class InvalidWeb3HostnameTarget extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<InvalidWeb3HostnameTarget>()(
    "InvalidWeb3HostnameTarget",
    { code: Schema.Number, message: Schema.String },
  ),
  [{ code: 1006 }],
) {}

export class Web3HostnameNotEntitled extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<Web3HostnameNotEntitled>()(
    "Web3HostnameNotEntitled",
    { code: Schema.Number, message: Schema.String },
  ),
  [{ code: 1010, message: { includes: "not entitled" } }],
) {}

export class Web3HostnameNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<Web3HostnameNotFound>()("Web3HostnameNotFound", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ code: 1002 }],
) {}

// =============================================================================
// Hostname
// =============================================================================

export interface GetHostnameRequest {
  identifier: string;
  /** Specify the identifier of the hostname. */
  zoneId: string;
}

export const GetHostnameRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      identifier: Schema.String.pipe(T.HttpPath("identifier")),
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/zones/{zone_id}/web3/hostnames/{identifier}",
      }),
    ),
) as unknown as Schema.Schema<GetHostnameRequest>;

export interface GetHostnameResponse {
  /** Specify the identifier of the hostname. */
  id?: string | null;
  createdOn?: string | null;
  /** Specify an optional description of the hostname. */
  description?: string | null;
  /** Specify the DNSLink value used if the target is ipfs. */
  dnslink?: string | null;
  modifiedOn?: string | null;
  /** Specify the hostname that points to the target gateway via CNAME. */
  name?: string | null;
  /** Specifies the status of the hostname's activation. */
  status?: "active" | "pending" | "deleting" | "error" | (string & {}) | null;
  /** Specify the target gateway of the hostname. */
  target?: "ethereum" | "ipfs" | "ipfs_universal_path" | (string & {}) | null;
}

export const GetHostnameResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      createdOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      dnslink: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      status: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals(["active", "pending", "deleting", "error"]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
      target: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals(["ethereum", "ipfs", "ipfs_universal_path"]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          createdOn: "created_on",
          description: "description",
          dnslink: "dnslink",
          modifiedOn: "modified_on",
          name: "name",
          status: "status",
          target: "target",
        }),
      )
      .pipe(T.ResponsePath("result")),
) as unknown as Schema.Schema<GetHostnameResponse>;

export type GetHostnameError = DefaultErrors | Web3HostnameNotFound | Forbidden;

export const getHostname: API.OperationMethod<
  GetHostnameRequest,
  GetHostnameResponse,
  GetHostnameError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetHostnameRequest,
  output: GetHostnameResponse,
  errors: [Web3HostnameNotFound, Forbidden],
}));

export interface ListHostnamesRequest {
  /** Specify the identifier of the hostname. */
  zoneId: string;
}

export const ListHostnamesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    }).pipe(T.Http({ method: "GET", path: "/zones/{zone_id}/web3/hostnames" })),
) as unknown as Schema.Schema<ListHostnamesRequest>;

export interface ListHostnamesResponse {
  result: {
    id?: string | null;
    createdOn?: string | null;
    description?: string | null;
    dnslink?: string | null;
    modifiedOn?: string | null;
    name?: string | null;
    status?: "active" | "pending" | "deleting" | "error" | (string & {}) | null;
    target?: "ethereum" | "ipfs" | "ipfs_universal_path" | (string & {}) | null;
  }[];
}

export const ListHostnamesResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      result: Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
          createdOn: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          description: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          dnslink: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
          modifiedOn: Schema.optional(
            Schema.Union([Schema.String, Schema.Null]),
          ),
          name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
          status: Schema.optional(
            Schema.Union([
              Schema.Union([
                Schema.Literals(["active", "pending", "deleting", "error"]),
                Schema.String,
              ]),
              Schema.Null,
            ]),
          ),
          target: Schema.optional(
            Schema.Union([
              Schema.Union([
                Schema.Literals(["ethereum", "ipfs", "ipfs_universal_path"]),
                Schema.String,
              ]),
              Schema.Null,
            ]),
          ),
        }).pipe(
          Schema.encodeKeys({
            id: "id",
            createdOn: "created_on",
            description: "description",
            dnslink: "dnslink",
            modifiedOn: "modified_on",
            name: "name",
            status: "status",
            target: "target",
          }),
        ),
      ),
    }),
) as unknown as Schema.Schema<ListHostnamesResponse>;

export type ListHostnamesError = DefaultErrors | Forbidden;

export const listHostnames: API.PaginatedOperationMethod<
  ListHostnamesRequest,
  ListHostnamesResponse,
  ListHostnamesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListHostnamesRequest,
  output: ListHostnamesResponse,
  errors: [Forbidden],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

export interface CreateHostnameRequest {
  /** Path param: Specify the identifier of the hostname. */
  zoneId: string;
  /** Body param: Specify the hostname that points to the target gateway via CNAME. */
  name: string;
  /** Body param: Specify the target gateway of the hostname. */
  target: "ethereum" | "ipfs" | "ipfs_universal_path" | (string & {});
  /** Body param: Specify an optional description of the hostname. */
  description?: string;
  /** Body param: Specify the DNSLink value used if the target is ipfs. */
  dnslink?: string;
}

export const CreateHostnameRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      name: Schema.String,
      target: Schema.Union([
        Schema.Literals(["ethereum", "ipfs", "ipfs_universal_path"]),
        Schema.String,
      ]),
      description: Schema.optional(Schema.String),
      dnslink: Schema.optional(Schema.String),
    }).pipe(
      T.Http({ method: "POST", path: "/zones/{zone_id}/web3/hostnames" }),
    ),
) as unknown as Schema.Schema<CreateHostnameRequest>;

export interface CreateHostnameResponse {
  /** Specify the identifier of the hostname. */
  id?: string | null;
  createdOn?: string | null;
  /** Specify an optional description of the hostname. */
  description?: string | null;
  /** Specify the DNSLink value used if the target is ipfs. */
  dnslink?: string | null;
  modifiedOn?: string | null;
  /** Specify the hostname that points to the target gateway via CNAME. */
  name?: string | null;
  /** Specifies the status of the hostname's activation. */
  status?: "active" | "pending" | "deleting" | "error" | (string & {}) | null;
  /** Specify the target gateway of the hostname. */
  target?: "ethereum" | "ipfs" | "ipfs_universal_path" | (string & {}) | null;
}

export const CreateHostnameResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      createdOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      dnslink: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      status: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals(["active", "pending", "deleting", "error"]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
      target: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals(["ethereum", "ipfs", "ipfs_universal_path"]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          createdOn: "created_on",
          description: "description",
          dnslink: "dnslink",
          modifiedOn: "modified_on",
          name: "name",
          status: "status",
          target: "target",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<CreateHostnameResponse>;

export type CreateHostnameError =
  | DefaultErrors
  | Web3HostnameNotEntitled
  | Forbidden;

export const createHostname: API.OperationMethod<
  CreateHostnameRequest,
  CreateHostnameResponse,
  CreateHostnameError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateHostnameRequest,
  output: CreateHostnameResponse,
  errors: [Web3HostnameNotEntitled, Forbidden],
}));

export interface PatchHostnameRequest {
  identifier: string;
  /** Path param: Specify the identifier of the hostname. */
  zoneId: string;
  /** Body param: Specify an optional description of the hostname. */
  description?: string;
  /** Body param: Specify the DNSLink value used if the target is ipfs. */
  dnslink?: string;
}

export const PatchHostnameRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      identifier: Schema.String.pipe(T.HttpPath("identifier")),
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      description: Schema.optional(Schema.String),
      dnslink: Schema.optional(Schema.String),
    }).pipe(
      T.Http({
        method: "PATCH",
        path: "/zones/{zone_id}/web3/hostnames/{identifier}",
      }),
    ),
) as unknown as Schema.Schema<PatchHostnameRequest>;

export interface PatchHostnameResponse {
  /** Specify the identifier of the hostname. */
  id?: string | null;
  createdOn?: string | null;
  /** Specify an optional description of the hostname. */
  description?: string | null;
  /** Specify the DNSLink value used if the target is ipfs. */
  dnslink?: string | null;
  modifiedOn?: string | null;
  /** Specify the hostname that points to the target gateway via CNAME. */
  name?: string | null;
  /** Specifies the status of the hostname's activation. */
  status?: "active" | "pending" | "deleting" | "error" | (string & {}) | null;
  /** Specify the target gateway of the hostname. */
  target?: "ethereum" | "ipfs" | "ipfs_universal_path" | (string & {}) | null;
}

export const PatchHostnameResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      createdOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      dnslink: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      name: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      status: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals(["active", "pending", "deleting", "error"]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
      target: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals(["ethereum", "ipfs", "ipfs_universal_path"]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          createdOn: "created_on",
          description: "description",
          dnslink: "dnslink",
          modifiedOn: "modified_on",
          name: "name",
          status: "status",
          target: "target",
        }),
      )
      .pipe(T.ResponsePath("result")),
) as unknown as Schema.Schema<PatchHostnameResponse>;

export type PatchHostnameError =
  | DefaultErrors
  | Web3HostnameNotFound
  | Forbidden;

export const patchHostname: API.OperationMethod<
  PatchHostnameRequest,
  PatchHostnameResponse,
  PatchHostnameError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchHostnameRequest,
  output: PatchHostnameResponse,
  errors: [Web3HostnameNotFound, Forbidden],
}));

export interface DeleteHostnameRequest {
  identifier: string;
  /** Specify the identifier of the hostname. */
  zoneId: string;
}

export const DeleteHostnameRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(
  () =>
    Schema.Struct({
      identifier: Schema.String.pipe(T.HttpPath("identifier")),
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/zones/{zone_id}/web3/hostnames/{identifier}",
      }),
    ),
) as unknown as Schema.Schema<DeleteHostnameRequest>;

export interface DeleteHostnameResponse {
  /** Specify the identifier of the hostname. */
  id: string;
}

export const DeleteHostnameResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<DeleteHostnameResponse>;

export type DeleteHostnameError =
  | DefaultErrors
  | Web3HostnameNotFound
  | Forbidden;

export const deleteHostname: API.OperationMethod<
  DeleteHostnameRequest,
  DeleteHostnameResponse,
  DeleteHostnameError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteHostnameRequest,
  output: DeleteHostnameResponse,
  errors: [Web3HostnameNotFound, Forbidden],
}));

// =============================================================================
// HostnameIpfsUniversalPathContentList
// =============================================================================

export interface GetHostnameIpfsUniversalPathContentListRequest {
  identifier: string;
  /** Specify the identifier of the hostname. */
  zoneId: string;
}

export const GetHostnameIpfsUniversalPathContentListRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      identifier: Schema.String.pipe(T.HttpPath("identifier")),
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/zones/{zone_id}/web3/hostnames/{identifier}/ipfs_universal_path/content_list",
      }),
    ),
  ) as unknown as Schema.Schema<GetHostnameIpfsUniversalPathContentListRequest>;

export interface GetHostnameIpfsUniversalPathContentListResponse {
  /** Behavior of the content list. */
  action?: "block" | null;
}

export const GetHostnameIpfsUniversalPathContentListResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      action: Schema.optional(
        Schema.Union([Schema.Literal("block"), Schema.Null]),
      ),
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<GetHostnameIpfsUniversalPathContentListResponse>;

export type GetHostnameIpfsUniversalPathContentListError =
  | DefaultErrors
  | Web3HostnameNotFound
  | InvalidWeb3HostnameTarget
  | Forbidden;

export const getHostnameIpfsUniversalPathContentList: API.OperationMethod<
  GetHostnameIpfsUniversalPathContentListRequest,
  GetHostnameIpfsUniversalPathContentListResponse,
  GetHostnameIpfsUniversalPathContentListError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetHostnameIpfsUniversalPathContentListRequest,
  output: GetHostnameIpfsUniversalPathContentListResponse,
  errors: [Web3HostnameNotFound, InvalidWeb3HostnameTarget, Forbidden],
}));

export interface PutHostnameIpfsUniversalPathContentListRequest {
  identifier: string;
  /** Path param: Specify the identifier of the hostname. */
  zoneId: string;
  /** Body param: Behavior of the content list. */
  action: "block";
  /** Body param: Provides content list entries. */
  entries: {
    content?: string;
    description?: string;
    type?: "cid" | "content_path" | (string & {});
  }[];
}

export const PutHostnameIpfsUniversalPathContentListRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      identifier: Schema.String.pipe(T.HttpPath("identifier")),
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      action: Schema.Literal("block"),
      entries: Schema.Array(
        Schema.Struct({
          content: Schema.optional(Schema.String),
          description: Schema.optional(Schema.String),
          type: Schema.optional(
            Schema.Union([
              Schema.Literals(["cid", "content_path"]),
              Schema.String,
            ]),
          ),
        }),
      ),
    }).pipe(
      T.Http({
        method: "PUT",
        path: "/zones/{zone_id}/web3/hostnames/{identifier}/ipfs_universal_path/content_list",
      }),
    ),
  ) as unknown as Schema.Schema<PutHostnameIpfsUniversalPathContentListRequest>;

export interface PutHostnameIpfsUniversalPathContentListResponse {
  /** Behavior of the content list. */
  action?: "block" | null;
}

export const PutHostnameIpfsUniversalPathContentListResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      action: Schema.optional(
        Schema.Union([Schema.Literal("block"), Schema.Null]),
      ),
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<PutHostnameIpfsUniversalPathContentListResponse>;

export type PutHostnameIpfsUniversalPathContentListError =
  | DefaultErrors
  | Web3HostnameNotFound
  | InvalidWeb3HostnameTarget
  | Forbidden;

export const putHostnameIpfsUniversalPathContentList: API.OperationMethod<
  PutHostnameIpfsUniversalPathContentListRequest,
  PutHostnameIpfsUniversalPathContentListResponse,
  PutHostnameIpfsUniversalPathContentListError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PutHostnameIpfsUniversalPathContentListRequest,
  output: PutHostnameIpfsUniversalPathContentListResponse,
  errors: [Web3HostnameNotFound, InvalidWeb3HostnameTarget, Forbidden],
}));

// =============================================================================
// HostnameIpfsUniversalPathContentListEntry
// =============================================================================

export interface GetHostnameIpfsUniversalPathContentListEntryRequest {
  identifier: string;
  contentListEntryIdentifier: string;
  /** Specify the identifier of the hostname. */
  zoneId: string;
}

export const GetHostnameIpfsUniversalPathContentListEntryRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      identifier: Schema.String.pipe(T.HttpPath("identifier")),
      contentListEntryIdentifier: Schema.String.pipe(
        T.HttpPath("contentListEntryIdentifier"),
      ),
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/zones/{zone_id}/web3/hostnames/{identifier}/ipfs_universal_path/content_list/entries/{contentListEntryIdentifier}",
      }),
    ),
  ) as unknown as Schema.Schema<GetHostnameIpfsUniversalPathContentListEntryRequest>;

export interface GetHostnameIpfsUniversalPathContentListEntryResponse {
  /** Specify the identifier of the hostname. */
  id?: string | null;
  /** Specify the CID or content path of content to block. */
  content?: string | null;
  createdOn?: string | null;
  /** Specify an optional description of the content list entry. */
  description?: string | null;
  modifiedOn?: string | null;
  /** Specify the type of content list entry to block. */
  type?: "cid" | "content_path" | (string & {}) | null;
}

export const GetHostnameIpfsUniversalPathContentListEntryResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      content: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      createdOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      type: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals(["cid", "content_path"]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          content: "content",
          createdOn: "created_on",
          description: "description",
          modifiedOn: "modified_on",
          type: "type",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<GetHostnameIpfsUniversalPathContentListEntryResponse>;

export type GetHostnameIpfsUniversalPathContentListEntryError = DefaultErrors;

export const getHostnameIpfsUniversalPathContentListEntry: API.OperationMethod<
  GetHostnameIpfsUniversalPathContentListEntryRequest,
  GetHostnameIpfsUniversalPathContentListEntryResponse,
  GetHostnameIpfsUniversalPathContentListEntryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetHostnameIpfsUniversalPathContentListEntryRequest,
  output: GetHostnameIpfsUniversalPathContentListEntryResponse,
  errors: [],
}));

export interface ListHostnameIpfsUniversalPathContentListEntriesRequest {
  identifier: string;
  /** Specify the identifier of the hostname. */
  zoneId: string;
}

export const ListHostnameIpfsUniversalPathContentListEntriesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      identifier: Schema.String.pipe(T.HttpPath("identifier")),
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    }).pipe(
      T.Http({
        method: "GET",
        path: "/zones/{zone_id}/web3/hostnames/{identifier}/ipfs_universal_path/content_list/entries",
      }),
    ),
  ) as unknown as Schema.Schema<ListHostnameIpfsUniversalPathContentListEntriesRequest>;

export interface ListHostnameIpfsUniversalPathContentListEntriesResponse {
  /** Provides content list entries. */
  entries?:
    | {
        id?: string | null;
        content?: string | null;
        createdOn?: string | null;
        description?: string | null;
        modifiedOn?: string | null;
        type?: "cid" | "content_path" | (string & {}) | null;
      }[]
    | null;
}

export const ListHostnameIpfsUniversalPathContentListEntriesResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      entries: Schema.optional(
        Schema.Union([
          Schema.Array(
            Schema.Struct({
              id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
              content: Schema.optional(
                Schema.Union([Schema.String, Schema.Null]),
              ),
              createdOn: Schema.optional(
                Schema.Union([Schema.String, Schema.Null]),
              ),
              description: Schema.optional(
                Schema.Union([Schema.String, Schema.Null]),
              ),
              modifiedOn: Schema.optional(
                Schema.Union([Schema.String, Schema.Null]),
              ),
              type: Schema.optional(
                Schema.Union([
                  Schema.Union([
                    Schema.Literals(["cid", "content_path"]),
                    Schema.String,
                  ]),
                  Schema.Null,
                ]),
              ),
            }).pipe(
              Schema.encodeKeys({
                id: "id",
                content: "content",
                createdOn: "created_on",
                description: "description",
                modifiedOn: "modified_on",
                type: "type",
              }),
            ),
          ),
          Schema.Null,
        ]),
      ),
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<ListHostnameIpfsUniversalPathContentListEntriesResponse>;

export type ListHostnameIpfsUniversalPathContentListEntriesError =
  | DefaultErrors
  | Web3HostnameNotFound
  | InvalidWeb3HostnameTarget
  | Forbidden;

export const listHostnameIpfsUniversalPathContentListEntries: API.OperationMethod<
  ListHostnameIpfsUniversalPathContentListEntriesRequest,
  ListHostnameIpfsUniversalPathContentListEntriesResponse,
  ListHostnameIpfsUniversalPathContentListEntriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListHostnameIpfsUniversalPathContentListEntriesRequest,
  output: ListHostnameIpfsUniversalPathContentListEntriesResponse,
  errors: [Web3HostnameNotFound, InvalidWeb3HostnameTarget, Forbidden],
}));

export interface CreateHostnameIpfsUniversalPathContentListEntryRequest {
  identifier: string;
  /** Path param: Specify the identifier of the hostname. */
  zoneId: string;
  /** Body param: Specify the CID or content path of content to block. */
  content: string;
  /** Body param: Specify the type of content list entry to block. */
  type: "cid" | "content_path" | (string & {});
  /** Body param: Specify an optional description of the content list entry. */
  description?: string;
}

export const CreateHostnameIpfsUniversalPathContentListEntryRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      identifier: Schema.String.pipe(T.HttpPath("identifier")),
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      content: Schema.String,
      type: Schema.Union([
        Schema.Literals(["cid", "content_path"]),
        Schema.String,
      ]),
      description: Schema.optional(Schema.String),
    }).pipe(
      T.Http({
        method: "POST",
        path: "/zones/{zone_id}/web3/hostnames/{identifier}/ipfs_universal_path/content_list/entries",
      }),
    ),
  ) as unknown as Schema.Schema<CreateHostnameIpfsUniversalPathContentListEntryRequest>;

export interface CreateHostnameIpfsUniversalPathContentListEntryResponse {
  /** Specify the identifier of the hostname. */
  id?: string | null;
  /** Specify the CID or content path of content to block. */
  content?: string | null;
  createdOn?: string | null;
  /** Specify an optional description of the content list entry. */
  description?: string | null;
  modifiedOn?: string | null;
  /** Specify the type of content list entry to block. */
  type?: "cid" | "content_path" | (string & {}) | null;
}

export const CreateHostnameIpfsUniversalPathContentListEntryResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      content: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      createdOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      type: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals(["cid", "content_path"]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          content: "content",
          createdOn: "created_on",
          description: "description",
          modifiedOn: "modified_on",
          type: "type",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<CreateHostnameIpfsUniversalPathContentListEntryResponse>;

export type CreateHostnameIpfsUniversalPathContentListEntryError =
  DefaultErrors;

export const createHostnameIpfsUniversalPathContentListEntry: API.OperationMethod<
  CreateHostnameIpfsUniversalPathContentListEntryRequest,
  CreateHostnameIpfsUniversalPathContentListEntryResponse,
  CreateHostnameIpfsUniversalPathContentListEntryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateHostnameIpfsUniversalPathContentListEntryRequest,
  output: CreateHostnameIpfsUniversalPathContentListEntryResponse,
  errors: [],
}));

export interface UpdateHostnameIpfsUniversalPathContentListEntryRequest {
  identifier: string;
  contentListEntryIdentifier: string;
  /** Path param: Specify the identifier of the hostname. */
  zoneId: string;
  /** Body param: Specify the CID or content path of content to block. */
  content: string;
  /** Body param: Specify the type of content list entry to block. */
  type: "cid" | "content_path" | (string & {});
  /** Body param: Specify an optional description of the content list entry. */
  description?: string;
}

export const UpdateHostnameIpfsUniversalPathContentListEntryRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      identifier: Schema.String.pipe(T.HttpPath("identifier")),
      contentListEntryIdentifier: Schema.String.pipe(
        T.HttpPath("contentListEntryIdentifier"),
      ),
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
      content: Schema.String,
      type: Schema.Union([
        Schema.Literals(["cid", "content_path"]),
        Schema.String,
      ]),
      description: Schema.optional(Schema.String),
    }).pipe(
      T.Http({
        method: "PUT",
        path: "/zones/{zone_id}/web3/hostnames/{identifier}/ipfs_universal_path/content_list/entries/{contentListEntryIdentifier}",
      }),
    ),
  ) as unknown as Schema.Schema<UpdateHostnameIpfsUniversalPathContentListEntryRequest>;

export interface UpdateHostnameIpfsUniversalPathContentListEntryResponse {
  /** Specify the identifier of the hostname. */
  id?: string | null;
  /** Specify the CID or content path of content to block. */
  content?: string | null;
  createdOn?: string | null;
  /** Specify an optional description of the content list entry. */
  description?: string | null;
  modifiedOn?: string | null;
  /** Specify the type of content list entry to block. */
  type?: "cid" | "content_path" | (string & {}) | null;
}

export const UpdateHostnameIpfsUniversalPathContentListEntryResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      content: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      createdOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      description: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      modifiedOn: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      type: Schema.optional(
        Schema.Union([
          Schema.Union([
            Schema.Literals(["cid", "content_path"]),
            Schema.String,
          ]),
          Schema.Null,
        ]),
      ),
    })
      .pipe(
        Schema.encodeKeys({
          id: "id",
          content: "content",
          createdOn: "created_on",
          description: "description",
          modifiedOn: "modified_on",
          type: "type",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<UpdateHostnameIpfsUniversalPathContentListEntryResponse>;

export type UpdateHostnameIpfsUniversalPathContentListEntryError =
  DefaultErrors;

export const updateHostnameIpfsUniversalPathContentListEntry: API.OperationMethod<
  UpdateHostnameIpfsUniversalPathContentListEntryRequest,
  UpdateHostnameIpfsUniversalPathContentListEntryResponse,
  UpdateHostnameIpfsUniversalPathContentListEntryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: UpdateHostnameIpfsUniversalPathContentListEntryRequest,
  output: UpdateHostnameIpfsUniversalPathContentListEntryResponse,
  errors: [],
}));

export interface DeleteHostnameIpfsUniversalPathContentListEntryRequest {
  identifier: string;
  contentListEntryIdentifier: string;
  /** Specify the identifier of the hostname. */
  zoneId: string;
}

export const DeleteHostnameIpfsUniversalPathContentListEntryRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      identifier: Schema.String.pipe(T.HttpPath("identifier")),
      contentListEntryIdentifier: Schema.String.pipe(
        T.HttpPath("contentListEntryIdentifier"),
      ),
      zoneId: Schema.String.pipe(T.HttpPath("zone_id")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/zones/{zone_id}/web3/hostnames/{identifier}/ipfs_universal_path/content_list/entries/{contentListEntryIdentifier}",
      }),
    ),
  ) as unknown as Schema.Schema<DeleteHostnameIpfsUniversalPathContentListEntryRequest>;

export interface DeleteHostnameIpfsUniversalPathContentListEntryResponse {
  /** Specify the identifier of the hostname. */
  id: string;
}

export const DeleteHostnameIpfsUniversalPathContentListEntryResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.String,
    }).pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<DeleteHostnameIpfsUniversalPathContentListEntryResponse>;

export type DeleteHostnameIpfsUniversalPathContentListEntryError =
  DefaultErrors;

export const deleteHostnameIpfsUniversalPathContentListEntry: API.OperationMethod<
  DeleteHostnameIpfsUniversalPathContentListEntryRequest,
  DeleteHostnameIpfsUniversalPathContentListEntryResponse,
  DeleteHostnameIpfsUniversalPathContentListEntryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteHostnameIpfsUniversalPathContentListEntryRequest,
  output: DeleteHostnameIpfsUniversalPathContentListEntryResponse,
  errors: [],
}));
