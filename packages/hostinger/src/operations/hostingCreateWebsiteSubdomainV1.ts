import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const HostingCreateWebsiteSubdomainV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    username: Schema.String.pipe(T.PathParam()),
    domain: Schema.String.pipe(T.PathParam()),
    subdomain: Schema.String,
    directory: Schema.optional(Schema.NullOr(Schema.String)),
    is_using_public_directory: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/hosting/v1/accounts/{username}/websites/{domain}/subdomains",
    }),
  );
export type HostingCreateWebsiteSubdomainV1Input =
  typeof HostingCreateWebsiteSubdomainV1Input.Type;

// Output Schema
export const HostingCreateWebsiteSubdomainV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
  });
export type HostingCreateWebsiteSubdomainV1Output =
  typeof HostingCreateWebsiteSubdomainV1Output.Type;

// The operation
/**
 * Create website subdomain
 *
 * Create a new subdomain for the selected website.
 * Provide a subdomain prefix and, optionally, a custom directory or the
 * website public directory to use as the subdomain root.
 *
 * @param domain - Domain name
 */
export const hostingCreateWebsiteSubdomainV1 =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: HostingCreateWebsiteSubdomainV1Input,
    outputSchema: HostingCreateWebsiteSubdomainV1Output,
    errors: [UnprocessableEntity] as const,
  }));
