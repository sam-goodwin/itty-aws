import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const DomainsCheckDomainAvailabilityV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    domain: Schema.String,
    tlds: Schema.Array(Schema.String),
    with_alternatives: Schema.optional(Schema.Boolean),
  }).pipe(T.Http({ method: "POST", path: "/api/domains/v1/availability" }));
export type DomainsCheckDomainAvailabilityV1Input =
  typeof DomainsCheckDomainAvailabilityV1Input.Type;

// Output Schema
export const DomainsCheckDomainAvailabilityV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.Struct({
      domain: Schema.optional(Schema.NullOr(Schema.String)),
      is_available: Schema.optional(Schema.Boolean),
      is_alternative: Schema.optional(Schema.Boolean),
      restriction: Schema.optional(Schema.NullOr(Schema.String)),
    }),
  );
export type DomainsCheckDomainAvailabilityV1Output =
  typeof DomainsCheckDomainAvailabilityV1Output.Type;

// The operation
/**
 * Check domain availability
 *
 * Check availability of domain names across multiple TLDs.
 * Multiple TLDs can be checked at once.
 * If you want alternative domains with response, provide only one TLD and set `with_alternatives` to `true`.
 * TLDs should be provided without leading dot (e.g. `com`, `net`, `org`).
 * Endpoint has rate limit of 10 requests per minute.
 * Use this endpoint to verify domain availability before purchase.
 */
export const domainsCheckDomainAvailabilityV1 =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DomainsCheckDomainAvailabilityV1Input,
    outputSchema: DomainsCheckDomainAvailabilityV1Output,
    errors: [UnprocessableEntity] as const,
  }));
