import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const DomainsDisablePrivacyProtectionV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    domain: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/domains/v1/portfolio/{domain}/privacy-protection",
    }),
  );
export type DomainsDisablePrivacyProtectionV1Input =
  typeof DomainsDisablePrivacyProtectionV1Input.Type;

// Output Schema
export const DomainsDisablePrivacyProtectionV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
  });
export type DomainsDisablePrivacyProtectionV1Output =
  typeof DomainsDisablePrivacyProtectionV1Output.Type;

// The operation
/**
 * Disable privacy protection
 *
 * Disable privacy protection for the domain.
 * When privacy protection is disabled, domain owner's personal information is visible in public WHOIS database.
 * Use this endpoint to make domain owner's information publicly visible.
 *
 * @param domain - Domain name
 */
export const domainsDisablePrivacyProtectionV1 =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DomainsDisablePrivacyProtectionV1Input,
    outputSchema: DomainsDisablePrivacyProtectionV1Output,
  }));
