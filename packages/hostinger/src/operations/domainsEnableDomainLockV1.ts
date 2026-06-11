import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const DomainsEnableDomainLockV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    domain: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/api/domains/v1/portfolio/{domain}/domain-lock",
    }),
  );
export type DomainsEnableDomainLockV1Input =
  typeof DomainsEnableDomainLockV1Input.Type;

// Output Schema
export const DomainsEnableDomainLockV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
  });
export type DomainsEnableDomainLockV1Output =
  typeof DomainsEnableDomainLockV1Output.Type;

// The operation
/**
 * Enable domain lock
 *
 * Enable domain lock for the domain.
 * When domain lock is enabled,
 * the domain cannot be transferred to another registrar without first disabling the lock.
 * Use this endpoint to secure domains against unauthorized transfers.
 *
 * @param domain - Domain name
 */
export const domainsEnableDomainLockV1 = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DomainsEnableDomainLockV1Input,
    outputSchema: DomainsEnableDomainLockV1Output,
  }),
);
