import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const DomainsDeleteWHOISProfileV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    whoisId: Schema.Number.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "DELETE", path: "/api/domains/v1/whois/{whoisId}" }),
  );
export type DomainsDeleteWHOISProfileV1Input =
  typeof DomainsDeleteWHOISProfileV1Input.Type;

// Output Schema
export const DomainsDeleteWHOISProfileV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
  });
export type DomainsDeleteWHOISProfileV1Output =
  typeof DomainsDeleteWHOISProfileV1Output.Type;

// The operation
/**
 * Delete WHOIS profile
 *
 * Delete WHOIS contact profile.
 * Use this endpoint to remove unused contact profiles from account.
 *
 * @param whoisId - WHOIS ID
 */
export const domainsDeleteWHOISProfileV1 = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DomainsDeleteWHOISProfileV1Input,
    outputSchema: DomainsDeleteWHOISProfileV1Output,
  }),
);
