import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const HostingGenerateAFreeSubdomainV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "POST", path: "/api/hosting/v1/domains/free-subdomains" }),
  );
export type HostingGenerateAFreeSubdomainV1Input =
  typeof HostingGenerateAFreeSubdomainV1Input.Type;

// Output Schema
export const HostingGenerateAFreeSubdomainV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    domain: Schema.optional(Schema.String),
  });
export type HostingGenerateAFreeSubdomainV1Output =
  typeof HostingGenerateAFreeSubdomainV1Output.Type;

// The operation
/**
 * Generate a free subdomain
 *
 * Generate a unique free subdomain that can be used for hosting services without purchasing custom domains.
 * Free subdomains allow you to start using hosting services immediately
 * and you can always connect a custom domain to your site later.
 */
export const hostingGenerateAFreeSubdomainV1 =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: HostingGenerateAFreeSubdomainV1Input,
    outputSchema: HostingGenerateAFreeSubdomainV1Output,
  }));
