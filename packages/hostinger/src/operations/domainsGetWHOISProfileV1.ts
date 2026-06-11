import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const DomainsGetWHOISProfileV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    whoisId: Schema.Number.pipe(T.PathParam()),
  }).pipe(T.Http({ method: "GET", path: "/api/domains/v1/whois/{whoisId}" }));
export type DomainsGetWHOISProfileV1Input =
  typeof DomainsGetWHOISProfileV1Input.Type;

// Output Schema
export const DomainsGetWHOISProfileV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.Number),
    tld: Schema.optional(Schema.String),
    country: Schema.optional(Schema.String),
    entity_type: Schema.optional(
      Schema.Literals(["individual", "organization"]),
    ),
    whois_details: Schema.optional(Schema.Unknown),
    tld_details: Schema.optional(Schema.Unknown),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
  });
export type DomainsGetWHOISProfileV1Output =
  typeof DomainsGetWHOISProfileV1Output.Type;

// The operation
/**
 * Get WHOIS profile
 *
 * Retrieve a WHOIS contact profile.
 * Use this endpoint to view domain registration contact information.
 *
 * @param whoisId - WHOIS ID
 */
export const domainsGetWHOISProfileV1 = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DomainsGetWHOISProfileV1Input,
    outputSchema: DomainsGetWHOISProfileV1Output,
  }),
);
