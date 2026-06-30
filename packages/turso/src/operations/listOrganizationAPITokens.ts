import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const ListOrganizationAPITokensInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organizationSlug: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/organizations/{organizationSlug}/api-tokens",
    }),
  );
export type ListOrganizationAPITokensInput =
  typeof ListOrganizationAPITokensInput.Type;

// Output Schema
export const ListOrganizationAPITokensOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tokens: Schema.optional(
      Schema.Array(
        Schema.Struct({
          name: Schema.optional(Schema.String),
          id: Schema.optional(Schema.String),
          organization: Schema.optional(Schema.String),
          group: Schema.optional(Schema.String),
          scopes: Schema.optional(Schema.Array(Schema.String)),
          owner: Schema.optional(
            Schema.Struct({
              username: Schema.optional(Schema.String),
              email: Schema.optional(Schema.String),
            }),
          ),
          created_at: Schema.optional(Schema.String),
        }),
      ),
    ),
  });
export type ListOrganizationAPITokensOutput =
  typeof ListOrganizationAPITokensOutput.Type;

// The operation
/**
 * List Organization API Tokens
 *
 * Returns the API tokens scoped to this organization (both organization-scoped and group-scoped). Unrestricted tokens are not returned here — manage those via [`GET /v1/auth/api-tokens`](/api-reference/tokens/list).
 * Authorization is symmetric with the revoke endpoint:
 * - **Admins and owners** see every token scoped to the organization, with the minting user attached in the `owner` field.
 * - **Members and viewers** see only tokens they minted themselves.
 * This mirrors the personal-access-token model used in GitHub organization settings: admins get the full attribution list; everyone else sees their own access.
 *
 * @param organizationSlug - The slug of the organization or user account.
 */
export const listOrganizationAPITokens = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ListOrganizationAPITokensInput,
    outputSchema: ListOrganizationAPITokensOutput,
  }),
);
