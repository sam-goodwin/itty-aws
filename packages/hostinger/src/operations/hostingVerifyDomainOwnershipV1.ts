import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const HostingVerifyDomainOwnershipV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    domain: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/hosting/v1/domains/verify-ownership",
    }),
  );
export type HostingVerifyDomainOwnershipV1Input =
  typeof HostingVerifyDomainOwnershipV1Input.Type;

// Output Schema
export const HostingVerifyDomainOwnershipV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    domain: Schema.optional(Schema.String),
    is_accessible: Schema.optional(Schema.Boolean),
    txt_to_verify: Schema.optional(Schema.String),
  });
export type HostingVerifyDomainOwnershipV1Output =
  typeof HostingVerifyDomainOwnershipV1Output.Type;

// The operation
/**
 * Verify domain ownership
 *
 * Verify ownership of a single domain and return the verification status.
 * Use this endpoint to check if a domain is accessible for you before using it for new websites.
 * If the domain is accessible, the response will have `is_accessible: true`.
 * If not, add the given TXT record to your domain's DNS records and try verifying again.
 * Keep in mind that it may take up to 10 minutes for new TXT DNS records to propagate.
 * Skip this verification when using Hostinger's free subdomains (*.hostingersite.com).
 */
export const hostingVerifyDomainOwnershipV1 =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: HostingVerifyDomainOwnershipV1Input,
    outputSchema: HostingVerifyDomainOwnershipV1Output,
    errors: [UnprocessableEntity] as const,
  }));
