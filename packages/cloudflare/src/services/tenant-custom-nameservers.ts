/**
 * Cloudflare TENANT-CUSTOM-NAMESERVERS API
 *
 * Generated from Cloudflare TypeScript SDK.
 * DO NOT EDIT - regenerate with: bun scripts/generate.ts --service tenant-custom-nameservers
 */

import * as Schema from "effect/Schema";
import type * as HttpClient from "effect/unstable/http/HttpClient";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import type { Credentials } from "../credentials.ts";
import { type DefaultErrors } from "../errors.ts";

// =============================================================================
// TenantCustomNameserver
// =============================================================================

export interface GetTenantCustomNameserverRequest {
  tenantTag: string;
}

export const GetTenantCustomNameserverRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      tenantTag: Schema.String.pipe(T.HttpPath("tenantTag")),
    }).pipe(T.Http({ method: "GET", path: "/tenants/{tenantTag}/custom_ns" })),
  ) as unknown as Schema.Schema<GetTenantCustomNameserverRequest>;

export interface GetTenantCustomNameserverResponse {
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

export const GetTenantCustomNameserverResponse =
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
  ) as unknown as Schema.Schema<GetTenantCustomNameserverResponse>;

export type GetTenantCustomNameserverError = DefaultErrors;

export const getTenantCustomNameserver: API.PaginatedOperationMethod<
  GetTenantCustomNameserverRequest,
  GetTenantCustomNameserverResponse,
  GetTenantCustomNameserverError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: GetTenantCustomNameserverRequest,
  output: GetTenantCustomNameserverResponse,
  errors: [],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));

export interface CreateTenantCustomNameserverRequest {
  tenantTag: string;
  /** The FQDN of the name server. */
  nsName: string;
  /** The number of the set that this name server belongs to. */
  nsSet?: number;
}

export const CreateTenantCustomNameserverRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      tenantTag: Schema.String.pipe(T.HttpPath("tenantTag")),
      nsName: Schema.String,
      nsSet: Schema.optional(Schema.Number),
    }).pipe(
      Schema.encodeKeys({ nsName: "ns_name", nsSet: "ns_set" }),
      T.Http({ method: "POST", path: "/tenants/{tenantTag}/custom_ns" }),
    ),
  ) as unknown as Schema.Schema<CreateTenantCustomNameserverRequest>;

export interface CreateTenantCustomNameserverResponse {
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

export const CreateTenantCustomNameserverResponse =
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
  ) as unknown as Schema.Schema<CreateTenantCustomNameserverResponse>;

export type CreateTenantCustomNameserverError = DefaultErrors;

export const createTenantCustomNameserver: API.OperationMethod<
  CreateTenantCustomNameserverRequest,
  CreateTenantCustomNameserverResponse,
  CreateTenantCustomNameserverError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateTenantCustomNameserverRequest,
  output: CreateTenantCustomNameserverResponse,
  errors: [],
}));

export interface DeleteTenantCustomNameserverRequest {
  tenantTag: string;
  customNSId: string;
}

export const DeleteTenantCustomNameserverRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      tenantTag: Schema.String.pipe(T.HttpPath("tenantTag")),
      customNSId: Schema.String.pipe(T.HttpPath("customNSId")),
    }).pipe(
      T.Http({
        method: "DELETE",
        path: "/tenants/{tenantTag}/custom_ns/{customNSId}",
      }),
    ),
  ) as unknown as Schema.Schema<DeleteTenantCustomNameserverRequest>;

export interface DeleteTenantCustomNameserverResponse {
  result: string[];
}

export const DeleteTenantCustomNameserverResponse =
  /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      result: Schema.Array(Schema.String),
    }),
  ) as unknown as Schema.Schema<DeleteTenantCustomNameserverResponse>;

export type DeleteTenantCustomNameserverError = DefaultErrors;

export const deleteTenantCustomNameserver: API.PaginatedOperationMethod<
  DeleteTenantCustomNameserverRequest,
  DeleteTenantCustomNameserverResponse,
  DeleteTenantCustomNameserverError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: DeleteTenantCustomNameserverRequest,
  output: DeleteTenantCustomNameserverResponse,
  errors: [],
  pagination: {
    mode: "single",
    items: "result",
  } as const,
}));
