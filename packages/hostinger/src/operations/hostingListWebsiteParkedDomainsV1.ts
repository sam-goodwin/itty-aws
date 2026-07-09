import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const HostingListWebsiteParkedDomainsV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    username: Schema.String.pipe(T.PathParam()),
    domain: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/hosting/v1/accounts/{username}/websites/{domain}/parked-domains",
    }),
  );
export type HostingListWebsiteParkedDomainsV1Input =
  typeof HostingListWebsiteParkedDomainsV1Input.Type;

// Output Schema
export const HostingListWebsiteParkedDomainsV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.Struct({
      username: Schema.optional(Schema.String),
      domain: Schema.optional(Schema.String),
      parent_domain: Schema.optional(Schema.String),
      root_directory: Schema.optional(Schema.String),
      type: Schema.optional(Schema.Literals(["domain", "ip"])),
    }),
  );
export type HostingListWebsiteParkedDomainsV1Output =
  typeof HostingListWebsiteParkedDomainsV1Output.Type;

// The operation
/**
 * List website parked domains
 *
 * Retrieve all parked or alias domains created under the selected website.
 * Use this endpoint to inspect parked domain configuration for a specific website,
 * including the parent domain and root directory assigned to each parked domain.
 *
 * @param domain - Domain name
 */
export const hostingListWebsiteParkedDomainsV1 =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: HostingListWebsiteParkedDomainsV1Input,
    outputSchema: HostingListWebsiteParkedDomainsV1Output,
  }));
