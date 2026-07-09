import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const DomainsDeleteDomainForwardingV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    domain: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "DELETE", path: "/api/domains/v1/forwarding/{domain}" }),
  );
export type DomainsDeleteDomainForwardingV1Input =
  typeof DomainsDeleteDomainForwardingV1Input.Type;

// Output Schema
export const DomainsDeleteDomainForwardingV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
  });
export type DomainsDeleteDomainForwardingV1Output =
  typeof DomainsDeleteDomainForwardingV1Output.Type;

// The operation
/**
 * Delete domain forwarding
 *
 * Delete domain forwarding data.
 * Use this endpoint to remove redirect configuration from domains.
 *
 * @param domain - Domain name
 */
export const domainsDeleteDomainForwardingV1 =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DomainsDeleteDomainForwardingV1Input,
    outputSchema: DomainsDeleteDomainForwardingV1Output,
  }));
