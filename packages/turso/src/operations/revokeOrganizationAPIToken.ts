import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface RevokeOrganizationAPITokenInput {
  organizationSlug: string;
  tokenId: string;
}
export const RevokeOrganizationAPITokenInput =
  /*@__PURE__*/ Schema.Struct({
    organizationSlug: Schema.String.pipe(T.PathParam()),
    tokenId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/v1/organizations/{organizationSlug}/api-tokens/{tokenId}",
    }),
  ) as unknown as Schema.Codec<RevokeOrganizationAPITokenInput>;

// Output Schema
export interface RevokeOrganizationAPITokenOutput {
  token?: string;
}
export const RevokeOrganizationAPITokenOutput =
  /*@__PURE__*/ Schema.Struct({
    token: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<RevokeOrganizationAPITokenOutput>;

// The operation
/**
 * Revoke Organization API Token
 *
 * Revokes a token scoped to this organization.
 * The path takes a token **ID**, not a name, because names are unique per user but not across users — an admin revoking a member's token can't disambiguate by name alone.
 * Authorization is symmetric with the list endpoint:
 * - **Admins and owners** can revoke any token scoped to the organization (org-scoped or group-scoped, regardless of who minted it).
 * - **Members and viewers** can revoke only tokens they minted themselves.
 * A token scoped to a different organization returns `404`, not `403`, so the endpoint does not leak the existence of cross-org token IDs. Unrestricted tokens are also unreachable here and must be revoked via [`DELETE /v1/auth/api-tokens/{tokenName}`](/api-reference/tokens/revoke).
 *
 * @param organizationSlug - The slug of the organization or user account.
 * @param tokenId - The ID of the token to revoke (from the list endpoint).
 */
export const revokeOrganizationAPIToken = /*@__PURE__*/ API.make(() => ({
  inputSchema: RevokeOrganizationAPITokenInput,
  outputSchema: RevokeOrganizationAPITokenOutput,
}));
