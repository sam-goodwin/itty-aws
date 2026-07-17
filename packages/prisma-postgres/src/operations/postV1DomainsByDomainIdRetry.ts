import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound, Conflict } from "../errors.ts";

// Input Schema
export interface PostV1DomainsByDomainIdRetryInput {
  domainId: string;
}
export const PostV1DomainsByDomainIdRetryInput =
  /*@__PURE__*/ Schema.Struct({
    domainId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "POST", path: "/v1/domains/{domainId}/retry" }),
  ) as unknown as Schema.Codec<PostV1DomainsByDomainIdRetryInput>;

// Output Schema
export interface PostV1DomainsByDomainIdRetryOutput {
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
export const PostV1DomainsByDomainIdRetryOutput =
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
  }) as unknown as Schema.Codec<PostV1DomainsByDomainIdRetryOutput>;

// The operation
/**
 * Retry custom domain provisioning
 *
 * ⚠️ Experimental endpoint: this API is in active development and may change at any time without notice. ⚠️
 * Retries DNS verification and certificate issuance for a failed or pending domain. Returns 409 if the domain is not yet eligible for retry (e.g. still provisioning).
 */
export const postV1DomainsByDomainIdRetry =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PostV1DomainsByDomainIdRetryInput,
    outputSchema: PostV1DomainsByDomainIdRetryOutput,
    errors: [Forbidden, NotFound, Conflict] as const,
  }));
