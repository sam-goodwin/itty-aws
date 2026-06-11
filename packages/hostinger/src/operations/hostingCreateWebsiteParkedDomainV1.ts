import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const HostingCreateWebsiteParkedDomainV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    username: Schema.String.pipe(T.PathParam()),
    domain: Schema.String.pipe(T.PathParam()),
    parked_domain: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/hosting/v1/accounts/{username}/websites/{domain}/parked-domains",
    }),
  );
export type HostingCreateWebsiteParkedDomainV1Input =
  typeof HostingCreateWebsiteParkedDomainV1Input.Type;

// Output Schema
export const HostingCreateWebsiteParkedDomainV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
  });
export type HostingCreateWebsiteParkedDomainV1Output =
  typeof HostingCreateWebsiteParkedDomainV1Output.Type;

// The operation
/**
 * Create website parked domain
 *
 * Create a parked or alias domain for the selected website.
 * Provide a domain name or IP address to park on the website so it serves the same content
 * as the parent domain.
 *
 * @param domain - Domain name
 */
export const hostingCreateWebsiteParkedDomainV1 =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: HostingCreateWebsiteParkedDomainV1Input,
    outputSchema: HostingCreateWebsiteParkedDomainV1Output,
    errors: [UnprocessableEntity] as const,
  }));
