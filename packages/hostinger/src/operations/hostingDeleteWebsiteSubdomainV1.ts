import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const HostingDeleteWebsiteSubdomainV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    username: Schema.String.pipe(T.PathParam()),
    domain: Schema.String.pipe(T.PathParam()),
    subdomain: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/hosting/v1/accounts/{username}/websites/{domain}/subdomains/{subdomain}",
    }),
  );
export type HostingDeleteWebsiteSubdomainV1Input =
  typeof HostingDeleteWebsiteSubdomainV1Input.Type;

// Output Schema
export const HostingDeleteWebsiteSubdomainV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
  });
export type HostingDeleteWebsiteSubdomainV1Output =
  typeof HostingDeleteWebsiteSubdomainV1Output.Type;

// The operation
/**
 * Delete website subdomain
 *
 * Delete an existing subdomain from the selected website.
 * Use this endpoint to remove subdomains that are no longer needed.
 *
 * @param domain - Domain name
 */
export const hostingDeleteWebsiteSubdomainV1 =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: HostingDeleteWebsiteSubdomainV1Input,
    outputSchema: HostingDeleteWebsiteSubdomainV1Output,
  }));
