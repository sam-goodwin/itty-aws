import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const DomainsCreateWHOISProfileV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tld: Schema.String,
    country: Schema.String,
    entity_type: Schema.Literals(["individual", "organization"]),
    tld_details: Schema.optional(Schema.Unknown),
    whois_details: Schema.Unknown,
  }).pipe(T.Http({ method: "POST", path: "/api/domains/v1/whois" }));
export type DomainsCreateWHOISProfileV1Input =
  typeof DomainsCreateWHOISProfileV1Input.Type;

// Output Schema
export const DomainsCreateWHOISProfileV1Output =
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
export type DomainsCreateWHOISProfileV1Output =
  typeof DomainsCreateWHOISProfileV1Output.Type;

// The operation
/**
 * Create WHOIS profile
 *
 * Create WHOIS contact profile.
 * Use this endpoint to add new contact information for domain registration.
 */
export const domainsCreateWHOISProfileV1 = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DomainsCreateWHOISProfileV1Input,
    outputSchema: DomainsCreateWHOISProfileV1Output,
    errors: [UnprocessableEntity] as const,
  }),
);
