import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const DomainsEnablePrivacyProtectionV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    domain: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/api/domains/v1/portfolio/{domain}/privacy-protection",
    }),
  );
export type DomainsEnablePrivacyProtectionV1Input =
  typeof DomainsEnablePrivacyProtectionV1Input.Type;

// Output Schema
export const DomainsEnablePrivacyProtectionV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
  });
export type DomainsEnablePrivacyProtectionV1Output =
  typeof DomainsEnablePrivacyProtectionV1Output.Type;

// The operation
/**
 * Enable privacy protection
 *
 * Enable privacy protection for the domain.
 * When privacy protection is enabled, domain owner's personal information is hidden from public WHOIS database.
 * Use this endpoint to protect domain owner's personal information from public view.
 *
 * @param domain - Domain name
 */
export const domainsEnablePrivacyProtectionV1 =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DomainsEnablePrivacyProtectionV1Input,
    outputSchema: DomainsEnablePrivacyProtectionV1Output,
  }));
