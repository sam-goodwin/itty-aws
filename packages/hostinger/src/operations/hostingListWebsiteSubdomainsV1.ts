import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const HostingListWebsiteSubdomainsV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    username: Schema.String.pipe(T.PathParam()),
    domain: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/hosting/v1/accounts/{username}/websites/{domain}/subdomains",
    }),
  );
export type HostingListWebsiteSubdomainsV1Input =
  typeof HostingListWebsiteSubdomainsV1Input.Type;

// Output Schema
export const HostingListWebsiteSubdomainsV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.Struct({
      username: Schema.optional(Schema.String),
      domain: Schema.optional(Schema.String),
      parent_domain: Schema.optional(Schema.String),
      root_directory: Schema.optional(Schema.String),
      subdomain: Schema.optional(Schema.String),
    }),
  );
export type HostingListWebsiteSubdomainsV1Output =
  typeof HostingListWebsiteSubdomainsV1Output.Type;

// The operation
/**
 * List website subdomains
 *
 * Retrieve all subdomains created under the selected website.
 * Use this endpoint to inspect subdomain configuration for a specific website,
 * including the parent domain and root directory assigned to each subdomain.
 *
 * @param domain - Domain name
 */
export const hostingListWebsiteSubdomainsV1 =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: HostingListWebsiteSubdomainsV1Input,
    outputSchema: HostingListWebsiteSubdomainsV1Output,
  }));
