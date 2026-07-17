import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface GetV1DomainsByDomainIdInput {
  domainId: string;
}
export const GetV1DomainsByDomainIdInput =
  /*@__PURE__*/ Schema.Struct({
    domainId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/v1/domains/{domainId}" }),
  ) as unknown as Schema.Codec<GetV1DomainsByDomainIdInput>;

// Output Schema
export interface GetV1DomainsByDomainIdOutput {
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
export const GetV1DomainsByDomainIdOutput =
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
  }) as unknown as Schema.Codec<GetV1DomainsByDomainIdOutput>;

// The operation
/**
 * Get a custom domain
 *
 * ⚠️ Experimental endpoint: this API is in active development and may change at any time without notice. ⚠️
 * Returns details for a custom domain by id. Authorization is derived from the parent compute service's workspace.
 */
export const getV1DomainsByDomainId = /*@__PURE__*/ API.make(() => ({
  inputSchema: GetV1DomainsByDomainIdInput,
  outputSchema: GetV1DomainsByDomainIdOutput,
  errors: [Forbidden, NotFound] as const,
}));
