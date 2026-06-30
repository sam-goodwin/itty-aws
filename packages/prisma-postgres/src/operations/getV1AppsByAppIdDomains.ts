import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const GetV1AppsByAppIdDomainsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    appId: Schema.String.pipe(T.PathParam()),
  }).pipe(T.Http({ method: "GET", path: "/v1/apps/{appId}/domains" }));
export type GetV1AppsByAppIdDomainsInput =
  typeof GetV1AppsByAppIdDomainsInput.Type;

// Output Schema
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
  });
export type GetV1AppsByAppIdDomainsOutput =
  typeof GetV1AppsByAppIdDomainsOutput.Type;

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
