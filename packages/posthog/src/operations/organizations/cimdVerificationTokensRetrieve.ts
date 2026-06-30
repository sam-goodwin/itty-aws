import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const CimdVerificationTokensRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    organization_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/organizations/{organization_id}/cimd_verification_tokens/{id}/",
    }),
  );
export type CimdVerificationTokensRetrieveInput =
  typeof CimdVerificationTokensRetrieveInput.Type;

// Output Schema
export const CimdVerificationTokensRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    label: Schema.String,
    mask_value: Schema.NullOr(Schema.String),
    created_by: Schema.Struct({
      id: Schema.optional(Schema.Number),
      uuid: Schema.optional(Schema.String),
      distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
      first_name: Schema.optional(Schema.String),
      last_name: Schema.optional(Schema.String),
      email: Schema.optional(Schema.String),
      is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
      hedgehog_config: Schema.optional(
        Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
      ),
      role_at_organization: Schema.optional(Schema.Unknown),
    }),
    created_at: Schema.String,
    last_used_at: Schema.NullOr(Schema.String),
  });
export type CimdVerificationTokensRetrieveOutput =
  typeof CimdVerificationTokensRetrieveOutput.Type;

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
export const cimdVerificationTokensRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CimdVerificationTokensRetrieveInput,
    outputSchema: CimdVerificationTokensRetrieveOutput,
  }));
