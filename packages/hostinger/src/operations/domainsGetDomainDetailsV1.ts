import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const DomainsGetDomainDetailsV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    domain: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/api/domains/v1/portfolio/{domain}" }),
  );
export type DomainsGetDomainDetailsV1Input =
  typeof DomainsGetDomainDetailsV1Input.Type;

// Output Schema
export const DomainsGetDomainDetailsV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    domain: Schema.optional(Schema.String),
    status: Schema.optional(
      Schema.Literals([
        "active",
        "pending_setup",
        "expired",
        "requested",
        "pending_verification",
        "deleted",
        "suspended",
        "failed",
      ]),
    ),
    message: Schema.optional(Schema.NullOr(Schema.String)),
    is_privacy_protection_allowed: Schema.optional(Schema.Boolean),
    is_privacy_protected: Schema.optional(Schema.Boolean),
    is_lockable: Schema.optional(Schema.Boolean),
    is_locked: Schema.optional(Schema.Boolean),
    name_servers: Schema.optional(
      Schema.Struct({
        ns1: Schema.optional(Schema.String),
        ns2: Schema.optional(Schema.String),
      }),
    ),
    child_name_servers: Schema.optional(
      Schema.Array(Schema.Array(Schema.String)),
    ),
    domain_contacts: Schema.optional(
      Schema.Struct({
        admin_id: Schema.optional(Schema.Number),
        owner_id: Schema.optional(Schema.Number),
        billing_id: Schema.optional(Schema.Number),
        tech_id: Schema.optional(Schema.Number),
      }),
    ),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
    "60_days_lock_expires_at": Schema.optional(Schema.NullOr(Schema.String)),
    registered_at: Schema.optional(Schema.NullOr(Schema.String)),
    expires_at: Schema.optional(Schema.NullOr(Schema.String)),
  });
export type DomainsGetDomainDetailsV1Output =
  typeof DomainsGetDomainDetailsV1Output.Type;

// The operation
/**
 * Get domain details
 *
 * Retrieve detailed information for specified domain.
 * Use this endpoint to view comprehensive domain configuration and status.
 *
 * @param domain - Domain name
 */
export const domainsGetDomainDetailsV1 = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DomainsGetDomainDetailsV1Input,
    outputSchema: DomainsGetDomainDetailsV1Output,
  }),
);
