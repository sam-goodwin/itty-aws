import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface CimdVerificationTokensDestroyInput {
  id: string;
  organization_id: string;
}
export const CimdVerificationTokensDestroyInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    organization_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/organizations/{organization_id}/cimd_verification_tokens/{id}/",
    }),
  ) as unknown as Schema.Codec<CimdVerificationTokensDestroyInput>;

// Output Schema
export type CimdVerificationTokensDestroyOutput = void;
export const CimdVerificationTokensDestroyOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<CimdVerificationTokensDestroyOutput>;

// The operation
/**
 * Manage CIMD verification tokens for an organization.
 * A partner embeds the plaintext token in their CIMD metadata document as
 * `verification_token` inside the `com.posthog` object (the legacy top-level
 * `posthog_verification_token` field still works as a fallback). When PostHog fetches
 * the metadata, matching the token links the partner app to this organization and
 * grants a higher default rate limit for account provisioning.
 * The plaintext value is only available on creation; we store a hash.
 *
 * @param id - A UUID string identifying this CIMD Verification Token.
 * @param organization_id - ID of the organization you're trying to access. To find the ID of the organization, make a call to /api/organizations/.
 */
export const cimdVerificationTokensDestroy =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: CimdVerificationTokensDestroyInput,
    outputSchema: CimdVerificationTokensDestroyOutput,
  }));
