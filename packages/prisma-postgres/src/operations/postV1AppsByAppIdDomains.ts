import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  BadRequest,
  Forbidden,
  NotFound,
  Conflict,
  UnprocessableEntity,
} from "../errors.ts";

// Input Schema
export interface PostV1AppsByAppIdDomainsInput {
  appId: string;
  hostname: string;
}
export const PostV1AppsByAppIdDomainsInput =
  /*@__PURE__*/ Schema.Struct({
    appId: Schema.String.pipe(T.PathParam()),
    hostname: Schema.String,
  }).pipe(
    T.Http({ method: "POST", path: "/v1/apps/{appId}/domains" }),
  ) as unknown as Schema.Codec<PostV1AppsByAppIdDomainsInput>;

// Output Schema
export interface PostV1AppsByAppIdDomainsOutput {
  data: {
    id: string;
    type: string;
    url: string;
    hostname: string;
    appId: string;
    computeServiceId: string;
    status:
      | "pending_dns"
      | "verifying"
      | "verified_routing_blocked"
      | "provisioning_tls"
      | "active"
      | "failed"
      | "removing";
    foundryStatus: string;
    failureReason: string | null;
    failureCategory: "dns" | "acme" | "storage" | "unknown" | null | null;
    certExpiresAt: string | null;
    createdAt: string;
    updatedAt: string;
    dnsRecords: {
      type: string;
      name: string;
      value: string;
      ttl: number | null;
    }[];
  };
}
export const PostV1AppsByAppIdDomainsOutput =
  /*@__PURE__*/ Schema.Struct({
    data: Schema.Struct({
      id: Schema.String,
      type: Schema.String,
      url: Schema.String,
      hostname: Schema.String,
      appId: Schema.String,
      computeServiceId: Schema.String,
      status: Schema.Literals([
        "pending_dns",
        "verifying",
        "verified_routing_blocked",
        "provisioning_tls",
        "active",
        "failed",
        "removing",
      ]),
      foundryStatus: Schema.String,
      failureReason: Schema.NullOr(Schema.String),
      failureCategory: Schema.NullOr(
        Schema.Literals(["dns", "acme", "storage", "unknown", "null"]),
      ),
      certExpiresAt: Schema.NullOr(Schema.String),
      createdAt: Schema.String,
      updatedAt: Schema.String,
      dnsRecords: Schema.Array(
        Schema.Struct({
          type: Schema.String,
          name: Schema.String,
          value: Schema.String,
          ttl: Schema.NullOr(Schema.Number),
        }),
      ),
    }),
  }) as unknown as Schema.Codec<PostV1AppsByAppIdDomainsOutput>;

// The operation
/**
 * Create a custom domain
 *
 * ⚠️ Experimental endpoint: this API is in active development and may change at any time without notice. ⚠️
 * Registers a custom hostname for the app. The hostname must CNAME to the regional switchboard target before DNS verification can succeed. Returns 429 if the app has reached its domain quota (default: 3).
 */
export const postV1AppsByAppIdDomains = /*@__PURE__*/ API.make(() => ({
  inputSchema: PostV1AppsByAppIdDomainsInput,
  outputSchema: PostV1AppsByAppIdDomainsOutput,
  errors: [
    BadRequest,
    Forbidden,
    NotFound,
    Conflict,
    UnprocessableEntity,
  ] as const,
}));
