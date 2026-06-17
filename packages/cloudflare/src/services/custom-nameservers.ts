/**
 * Cloudflare CUSTOM-NAMESERVERS API
 *
 * Generated from Cloudflare TypeScript SDK.
 * DO NOT EDIT - regenerate with: bun scripts/generate.ts --service custom-nameservers
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

export class CustomNameserverAlreadyExists extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<CustomNameserverAlreadyExists>()(
    "CustomNameserverAlreadyExists",
    { code: Schema.Number, message: Schema.String },
  ),
  [{ message: { includes: "already exist" } }],
) {}

export class CustomNameserverNotFound extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<CustomNameserverNotFound>()(
    "CustomNameserverNotFound",
    { code: Schema.Number, message: Schema.String },
  ),
  [{ status: 404 }],
) {}

export class CustomNameserversNotEnabled extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<CustomNameserversNotEnabled>()(
    "CustomNameserversNotEnabled",
    { code: Schema.Number, message: Schema.String },
  ),
  [{ code: 1002, message: { includes: "not enabled" } }],
) {}

export class Forbidden extends T.applyErrorMatchers(
  Schema.TaggedErrorClass<Forbidden>()("Forbidden", {
    code: Schema.Number,
    message: Schema.String,
  }),
  [{ status: 403 }],
) {}

// =============================================================================
// CustomNameserver
// =============================================================================

export interface GetCustomNameserverRequest {
  /** Account identifier tag. */
  accountId: string;
}

export const GetCustomNameserverRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({ method: "GET", path: "/accounts/{account_id}/custom_ns" }),
    ),
  ) as unknown as Schema.Schema<GetCustomNameserverRequest>;

export interface GetCustomNameserverResponse {
  result: {
    dnsRecords: {
      type?: "A" | "AAAA" | (string & {}) | null;
      value?: string | null;
    }[];
    nsName: string;
    status: "moved" | "pending" | "verified" | (string & {});
    zoneTag: string;
    nsSet?: number | null;
  }[];
}

export const GetCustomNameserverResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(
        Schema.Struct({
          dnsRecords: Schema.Array(
            Schema.Struct({
              type: Schema.optional(
                Schema.Union([
                  Schema.Union([Schema.Literals(["A", "AAAA"]), Schema.String]),
                  Schema.Null,
                ]),
              ),
              value: Schema.optional(
                Schema.Union([Schema.String, Schema.Null]),
              ),
            }),
          ),
          nsName: Schema.String,
          status: Schema.Union([
            Schema.Literals(["moved", "pending", "verified"]),
            Schema.String,
          ]),
          zoneTag: Schema.String,
          nsSet: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
        }).pipe(
          Schema.encodeKeys({
            dnsRecords: "dns_records",
            nsName: "ns_name",
            status: "status",
            zoneTag: "zone_tag",
            nsSet: "ns_set",
          }),
        ),
      ),
    }),
  ) as unknown as Schema.Schema<GetCustomNameserverResponse>;

export type GetCustomNameserverError =
  | DefaultErrors
  | CustomNameserversNotEnabled
  | Forbidden;

export const getCustomNameserver: API.PaginatedOperationMethod<
  GetCustomNameserverRequest,
  GetCustomNameserverResponse,
  GetCustomNameserverError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: GetCustomNameserverRequest,
  output: GetCustomNameserverResponse,
  errors: [CustomNameserversNotEnabled, Forbidden],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

export interface CreateCustomNameserverRequest {
  /** Path param: Account identifier tag. */
  accountId: string;
  /** Body param: The FQDN of the name server. */
  nsName: string;
  /** Body param: The number of the set that this name server belongs to. */
  nsSet?: number;
}

export const CreateCustomNameserverRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      nsName: Schema.String,
      nsSet: Schema.optional(Schema.Number),
    }).pipe(
      Schema.encodeKeys({ nsName: "ns_name", nsSet: "ns_set" }),
      T.Http({ method: "POST", path: "/accounts/{account_id}/custom_ns" }),
    ),
  ) as unknown as Schema.Schema<CreateCustomNameserverRequest>;

export interface CreateCustomNameserverResponse {
  /** A and AAAA records associated with the nameserver. */
  dnsRecords: {
    type?: "A" | "AAAA" | (string & {}) | null;
    value?: string | null;
  }[];
  /** The FQDN of the name server. */
  nsName: string;
  /** @deprecated Verification status of the nameserver. */
  status: "moved" | "pending" | "verified" | (string & {});
  /** Identifier. */
  zoneTag: string;
  /** The number of the set that this name server belongs to. */
  nsSet?: number | null;
}

export const CreateCustomNameserverResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      dnsRecords: Schema.Array(
        Schema.Struct({
          type: Schema.optional(
            Schema.Union([
              Schema.Union([Schema.Literals(["A", "AAAA"]), Schema.String]),
              Schema.Null,
            ]),
          ),
          value: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
        }),
      ),
      nsName: Schema.String,
      status: Schema.Union([
        Schema.Literals(["moved", "pending", "verified"]),
        Schema.String,
      ]),
      zoneTag: Schema.String,
      nsSet: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    })
      .pipe(
        Schema.encodeKeys({
          dnsRecords: "dns_records",
          nsName: "ns_name",
          status: "status",
          zoneTag: "zone_tag",
          nsSet: "ns_set",
        }),
      )
      .pipe(T.ResponsePath("result")),
  ) as unknown as Schema.Schema<CreateCustomNameserverResponse>;

export type CreateCustomNameserverError =
  | DefaultErrors
  | CustomNameserversNotEnabled
  | CustomNameserverAlreadyExists
  | Forbidden;

export const createCustomNameserver: API.OperationMethod<
  CreateCustomNameserverRequest,
  CreateCustomNameserverResponse,
  CreateCustomNameserverError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateCustomNameserverRequest,
  output: CreateCustomNameserverResponse,
  errors: [
    CustomNameserversNotEnabled,
    CustomNameserverAlreadyExists,
    Forbidden,
  ],
}));

export interface DeleteCustomNameserverRequest {
  customNSId: string;
  /** Account identifier tag. */
  accountId: string;
}

export const DeleteCustomNameserverRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      customNSId: Schema.String.pipe(T.HttpPath("customNSId")),
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/accounts/{account_id}/custom_ns/{customNSId}",
      }),
    ),
  ) as unknown as Schema.Schema<DeleteCustomNameserverRequest>;

export interface DeleteCustomNameserverResponse {
  result: string[];
}

export const DeleteCustomNameserverResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(Schema.String),
    }),
  ) as unknown as Schema.Schema<DeleteCustomNameserverResponse>;

export type DeleteCustomNameserverError =
  | DefaultErrors
  | CustomNameserversNotEnabled
  | CustomNameserverNotFound
  | Forbidden;

export const deleteCustomNameserver: API.PaginatedOperationMethod<
  DeleteCustomNameserverRequest,
  DeleteCustomNameserverResponse,
  DeleteCustomNameserverError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: DeleteCustomNameserverRequest,
  output: DeleteCustomNameserverResponse,
  errors: [CustomNameserversNotEnabled, CustomNameserverNotFound, Forbidden],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));
