import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const DomainsGetDomainForwardingV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    domain: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/api/domains/v1/forwarding/{domain}" }),
  );
export type DomainsGetDomainForwardingV1Input =
  typeof DomainsGetDomainForwardingV1Input.Type;

// Output Schema
export const DomainsGetDomainForwardingV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    domain: Schema.optional(Schema.NullOr(Schema.String)),
    redirect_type: Schema.optional(Schema.Literals(["301", "302"])),
    redirect_url: Schema.optional(Schema.String),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.NullOr(Schema.String)),
  });
export type DomainsGetDomainForwardingV1Output =
  typeof DomainsGetDomainForwardingV1Output.Type;

// The operation
/**
 * Get domain forwarding
 *
 * Retrieve domain forwarding data.
 * Use this endpoint to view current redirect configuration for domains.
 *
 * @param domain - Domain name
 */
export const domainsGetDomainForwardingV1 =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DomainsGetDomainForwardingV1Input,
    outputSchema: DomainsGetDomainForwardingV1Output,
  }));
