import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const DomainsGetWHOISProfileUsageV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    whoisId: Schema.Number.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/api/domains/v1/whois/{whoisId}/usage" }),
  );
export type DomainsGetWHOISProfileUsageV1Input =
  typeof DomainsGetWHOISProfileUsageV1Input.Type;

// Output Schema
export const DomainsGetWHOISProfileUsageV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(Schema.String);
export type DomainsGetWHOISProfileUsageV1Output =
  typeof DomainsGetWHOISProfileUsageV1Output.Type;

// The operation
/**
 * Get WHOIS profile usage
 *
 * Retrieve domain list where provided WHOIS contact profile is used.
 * Use this endpoint to view which domains use specific contact profiles.
 *
 * @param whoisId - WHOIS ID
 */
export const domainsGetWHOISProfileUsageV1 =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DomainsGetWHOISProfileUsageV1Input,
    outputSchema: DomainsGetWHOISProfileUsageV1Output,
  }));
