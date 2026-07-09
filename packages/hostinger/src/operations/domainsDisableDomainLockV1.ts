import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const DomainsDisableDomainLockV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    domain: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/domains/v1/portfolio/{domain}/domain-lock",
    }),
  );
export type DomainsDisableDomainLockV1Input =
  typeof DomainsDisableDomainLockV1Input.Type;

// Output Schema
export const DomainsDisableDomainLockV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
  });
export type DomainsDisableDomainLockV1Output =
  typeof DomainsDisableDomainLockV1Output.Type;

// The operation
/**
 * Disable domain lock
 *
 * Disable domain lock for the domain.
 * Domain lock needs to be disabled before transferring the domain to another registrar.
 * Use this endpoint to prepare domains for transfer to other registrars.
 *
 * @param domain - Domain name
 */
export const domainsDisableDomainLockV1 = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DomainsDisableDomainLockV1Input,
    outputSchema: DomainsDisableDomainLockV1Output,
  }),
);
