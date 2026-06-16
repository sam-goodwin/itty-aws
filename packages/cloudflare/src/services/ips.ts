/**
 * Cloudflare IPS API
 *
 * Generated from Cloudflare TypeScript SDK.
 * DO NOT EDIT - regenerate with: bun scripts/generate.ts --service ips
 */

import * as Schema from "effect/Schema";
import type * as HttpClient from "effect/unstable/http/HttpClient";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import type { Credentials } from "../credentials.ts";
import { type DefaultErrors } from "../errors.ts";

// =============================================================================
// Ip
// =============================================================================

export interface ListIpsRequest {
  /** Specified as `jdcloud` to list IPs used by JD Cloud data centers. */
  networks?: string;
}

export const ListIpsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    networks: Schema.optional(Schema.String),
  }).pipe(T.Http({ method: "GET", path: "/ips" })),
) as unknown as Schema.Schema<ListIpsRequest>;

export type ListIpsResponse =
  | {
      etag?: string | null;
      ipv4Cidrs?: string[] | null;
      ipv6Cidrs?: string[] | null;
    }
  | {
      etag?: string | null;
      ipv4Cidrs?: string[] | null;
      ipv6Cidrs?: string[] | null;
      jdcloudCidrs?: string[] | null;
    };

export const ListIpsResponse = /*@__PURE__*/ /*#__PURE__*/ Schema.suspend(() =>
  Schema.Union([
    Schema.Struct({
      etag: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      ipv4Cidrs: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      ipv6Cidrs: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
    }).pipe(
      Schema.encodeKeys({
        etag: "etag",
        ipv4Cidrs: "ipv4_cidrs",
        ipv6Cidrs: "ipv6_cidrs",
      }),
    ),
    Schema.Struct({
      etag: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
      ipv4Cidrs: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      ipv6Cidrs: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
      jdcloudCidrs: Schema.optional(
        Schema.Union([Schema.Array(Schema.String), Schema.Null]),
      ),
    }).pipe(
      Schema.encodeKeys({
        etag: "etag",
        ipv4Cidrs: "ipv4_cidrs",
        ipv6Cidrs: "ipv6_cidrs",
        jdcloudCidrs: "jdcloud_cidrs",
      }),
    ),
  ]).pipe(T.ResponsePath("result")),
) as unknown as Schema.Schema<ListIpsResponse>;

export type ListIpsError = DefaultErrors;

export const listIps: API.OperationMethod<
  ListIpsRequest,
  ListIpsResponse,
  ListIpsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListIpsRequest,
  output: ListIpsResponse,
  errors: [],
}));
