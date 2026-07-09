import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const DomainsGetWHOISProfileListV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tld: Schema.optional(Schema.String),
  }).pipe(T.Http({ method: "GET", path: "/api/domains/v1/whois" }));
export type DomainsGetWHOISProfileListV1Input =
  typeof DomainsGetWHOISProfileListV1Input.Type;

// Output Schema
export const DomainsGetWHOISProfileListV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.Struct({
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
    }),
  );
export type DomainsGetWHOISProfileListV1Output =
  typeof DomainsGetWHOISProfileListV1Output.Type;

// The operation
/**
 * Get WHOIS profile list
 *
 * Retrieve WHOIS contact profiles.
 * Use this endpoint to view available contact profiles for domain registration.
 *
 * @param tld - Filter by TLD (without leading dot)
 */
export const domainsGetWHOISProfileListV1 =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DomainsGetWHOISProfileListV1Input,
    outputSchema: DomainsGetWHOISProfileListV1Output,
  }));
