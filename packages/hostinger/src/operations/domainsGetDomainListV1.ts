import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const DomainsGetDomainListV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/api/domains/v1/portfolio" }),
  );
export type DomainsGetDomainListV1Input =
  typeof DomainsGetDomainListV1Input.Type;

// Output Schema
export const DomainsGetDomainListV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.Struct({
      id: Schema.optional(Schema.Number),
      domain: Schema.optional(Schema.NullOr(Schema.String)),
      type: Schema.optional(
        Schema.Literals([
          "domain",
          "free_domain",
          "domain_transfer",
          "free_domain_transfer",
        ]),
      ),
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
      created_at: Schema.optional(Schema.String),
      expires_at: Schema.optional(Schema.NullOr(Schema.String)),
    }),
  );
export type DomainsGetDomainListV1Output =
  typeof DomainsGetDomainListV1Output.Type;

// The operation
/**
 * Get domain list
 *
 * Retrieve all domains associated with your account.
 * Use this endpoint to view user's domain portfolio.
 */
export const domainsGetDomainListV1 = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DomainsGetDomainListV1Input,
    outputSchema: DomainsGetDomainListV1Output,
  }),
);
