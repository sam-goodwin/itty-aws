import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden } from "../errors.ts";

// Input Schema
export const ListOidcProvidersInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    per_page: Schema.optional(Schema.Number),
    cursor: Schema.optional(Schema.String),
  },
).pipe(T.Http({ method: "GET", path: "/v2/oidc/provider" }));
export type ListOidcProvidersInput = typeof ListOidcProvidersInput.Type;

// Output Schema
export const ListOidcProvidersOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    providers: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          issuer_id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
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
export type ListOidcProvidersOutput = typeof ListOidcProvidersOutput.Type;

// The operation
/**
 * List OIDC Providers
 *
 * Get a list of all OIDC Providers in your account.
 *
 * @param per_page - Number of items requested per page. Default is 100 and Max is 500.
 * @param cursor - Cursor for paging. See [Meta and Pagination](#section/Introduction/Meta-and-Pagination).
 */
export const listOidcProviders = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListOidcProvidersInput,
  outputSchema: ListOidcProvidersOutput,
  errors: [Forbidden] as const,
}));
