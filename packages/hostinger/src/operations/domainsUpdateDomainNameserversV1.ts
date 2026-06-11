import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const DomainsUpdateDomainNameserversV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    domain: Schema.String.pipe(T.PathParam()),
    ns1: Schema.String,
    ns2: Schema.String,
    ns3: Schema.optional(Schema.String),
    ns4: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/api/domains/v1/portfolio/{domain}/nameservers",
    }),
  );
export type DomainsUpdateDomainNameserversV1Input =
  typeof DomainsUpdateDomainNameserversV1Input.Type;

// Output Schema
export const DomainsUpdateDomainNameserversV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
  });
export type DomainsUpdateDomainNameserversV1Output =
  typeof DomainsUpdateDomainNameserversV1Output.Type;

// The operation
/**
 * Update domain nameservers
 *
 * Set nameservers for a specified domain.
 * Be aware, that improper nameserver configuration can lead to the domain being unresolvable or unavailable.
 * Use this endpoint to configure custom DNS hosting for domains.
 *
 * @param domain - Domain name
 */
export const domainsUpdateDomainNameserversV1 =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DomainsUpdateDomainNameserversV1Input,
    outputSchema: DomainsUpdateDomainNameserversV1Output,
    errors: [UnprocessableEntity] as const,
  }));
