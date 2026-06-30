import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const GetV1DomainsByDomainIdInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    domainId: Schema.String.pipe(T.PathParam()),
  }).pipe(T.Http({ method: "GET", path: "/v1/domains/{domainId}" }));
export type GetV1DomainsByDomainIdInput =
  typeof GetV1DomainsByDomainIdInput.Type;

// Output Schema
export const GetV1DomainsByDomainIdOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type GetV1DomainsByDomainIdOutput =
  typeof GetV1DomainsByDomainIdOutput.Type;

// The operation
/**
 * Get a custom domain
 *
 * ⚠️ Experimental endpoint: this API is in active development and may change at any time without notice. ⚠️
 * Returns details for a custom domain by id. Authorization is derived from the parent compute service's workspace.
 */
export const getV1DomainsByDomainId = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetV1DomainsByDomainIdInput,
    outputSchema: GetV1DomainsByDomainIdOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
