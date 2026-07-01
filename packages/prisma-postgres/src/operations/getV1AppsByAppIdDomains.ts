import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface GetV1AppsByAppIdDomainsInput {
  appId: string;
}
export const GetV1AppsByAppIdDomainsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    appId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/v1/apps/{appId}/domains" }),
  ) as unknown as Schema.Codec<GetV1AppsByAppIdDomainsInput>;

// Output Schema
export interface GetV1AppsByAppIdDomainsOutput {
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
  }[];
  pagination: { hasMore: boolean; nextCursor: unknown };
}
export const GetV1AppsByAppIdDomainsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    data: Schema.Array(
      Schema.Struct({
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
    ),
    pagination: Schema.Struct({
      hasMore: Schema.Boolean,
      nextCursor: Schema.Unknown,
    }),
  }) as unknown as Schema.Codec<GetV1AppsByAppIdDomainsOutput>;

// The operation
/**
 * List custom domains for an app
 *
 * ⚠️ Experimental endpoint: this API is in active development and may change at any time without notice. ⚠️
 * Returns all custom domains attached to any deployment of the app. Domains are aggregated across all deployments since Foundry lists per deployment.
 */
export const getV1AppsByAppIdDomains = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetV1AppsByAppIdDomainsInput,
    outputSchema: GetV1AppsByAppIdDomainsOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
