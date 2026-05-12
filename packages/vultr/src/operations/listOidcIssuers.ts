import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden } from "../errors.ts";

// Input Schema
export const ListOidcIssuersInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  per_page: Schema.optional(Schema.Number),
  cursor: Schema.optional(Schema.String),
}).pipe(T.Http({ method: "GET", path: "/v2/oidc/issuer" }));
export type ListOidcIssuersInput = typeof ListOidcIssuersInput.Type;

// Output Schema
export const ListOidcIssuersOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  issuers: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        source: Schema.optional(Schema.String),
        uri: Schema.optional(Schema.String),
        kid: Schema.optional(Schema.String),
        kty: Schema.optional(Schema.String),
        n: Schema.optional(Schema.String),
        e: Schema.optional(Schema.String),
        alg: Schema.optional(Schema.String),
        use: Schema.optional(Schema.String),
        jwks_fetched_at: Schema.optional(Schema.String),
        jwks_expires_at: Schema.optional(Schema.String),
      }),
    ),
  ),
  meta: Schema.optional(
    Schema.Struct({
      total: Schema.optional(Schema.Number),
      links: Schema.optional(
        Schema.Struct({
          next: Schema.optional(Schema.String),
          prev: Schema.optional(Schema.String),
        }),
      ),
    }),
  ),
});
export type ListOidcIssuersOutput = typeof ListOidcIssuersOutput.Type;

// The operation
/**
 * List OIDC Issuers
 *
 * Get a list of all OIDC Issuers in your account.
 *
 * @param per_page - Number of items requested per page. Default is 100 and Max is 500.
 * @param cursor - Cursor for paging. See [Meta and Pagination](#section/Introduction/Meta-and-Pagination).
 */
export const listOidcIssuers = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListOidcIssuersInput,
  outputSchema: ListOidcIssuersOutput,
  errors: [Forbidden] as const,
}));
