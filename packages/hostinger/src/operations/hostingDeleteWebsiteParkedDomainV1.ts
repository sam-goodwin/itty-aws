import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const HostingDeleteWebsiteParkedDomainV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    username: Schema.String.pipe(T.PathParam()),
    domain: Schema.String.pipe(T.PathParam()),
    parkedDomain: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/hosting/v1/accounts/{username}/websites/{domain}/parked-domains/{parkedDomain}",
    }),
  );
export type HostingDeleteWebsiteParkedDomainV1Input =
  typeof HostingDeleteWebsiteParkedDomainV1Input.Type;

// Output Schema
export const HostingDeleteWebsiteParkedDomainV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
  });
export type HostingDeleteWebsiteParkedDomainV1Output =
  typeof HostingDeleteWebsiteParkedDomainV1Output.Type;

// The operation
/**
 * Delete website parked domain
 *
 * Delete an existing parked or alias domain from the selected website.
 * Use this endpoint to remove parked domains that are no longer needed.
 *
 * @param domain - Domain name
 */
export const hostingDeleteWebsiteParkedDomainV1 =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: HostingDeleteWebsiteParkedDomainV1Input,
    outputSchema: HostingDeleteWebsiteParkedDomainV1Output,
  }));
