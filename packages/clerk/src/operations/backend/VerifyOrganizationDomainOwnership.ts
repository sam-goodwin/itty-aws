import * as Schema from "effect/Schema";
import { API } from "../../backend-client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const VerifyOrganizationDomainOwnershipInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organization_id: Schema.String.pipe(T.PathParam()),
    domain_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/organizations/{organization_id}/domains/{domain_id}/verify_ownership",
    }),
  );
export type VerifyOrganizationDomainOwnershipInput =
  typeof VerifyOrganizationDomainOwnershipInput.Type;

// Output Schema
export const VerifyOrganizationDomainOwnershipOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.Literals(["organization_domain"]),
    id: Schema.String,
    organization_id: Schema.String,
    name: Schema.String,
    enrollment_mode: Schema.Literals([
      "manual_invitation",
      "automatic_invitation",
      "automatic_suggestion",
    ]),
    affiliation_email_address: Schema.NullOr(Schema.String),
    affiliation_verification: Schema.NullOr(
      Schema.Struct({
        status: Schema.String,
        strategy: Schema.String,
        attempts: Schema.NullOr(Schema.Number),
        expire_at: Schema.NullOr(Schema.Number),
        verified_at: Schema.NullOr(Schema.Number),
      }),
    ),
    ownership_verification: Schema.NullOr(
      Schema.Struct({
        status: Schema.String,
        strategy: Schema.String,
        attempts: Schema.NullOr(Schema.Number),
        expire_at: Schema.NullOr(Schema.Number),
        verified_at: Schema.NullOr(Schema.Number),
      }),
    ),
    verification: Schema.NullOr(
      Schema.Struct({
        status: Schema.String,
        strategy: Schema.String,
        attempts: Schema.NullOr(Schema.Number),
        expire_at: Schema.NullOr(Schema.Number),
        verified_at: Schema.NullOr(Schema.Number),
      }),
    ),
    total_pending_invitations: Schema.Number,
    total_pending_suggestions: Schema.Number,
    public_organization_data: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          id: Schema.String,
          name: Schema.String,
          slug: Schema.String,
          image_url: Schema.optional(Schema.String),
          has_image: Schema.Boolean,
        }),
      ),
    ),
    created_at: Schema.Number,
    updated_at: Schema.Number,
  });
export type VerifyOrganizationDomainOwnershipOutput =
  typeof VerifyOrganizationDomainOwnershipOutput.Type;

// The operation
/**
 * Mark an organization domain's ownership as verified
 *
 * Flips the organization domain's ownership state to verified via the
 * manual override path, bypassing the self-serve TXT DNS challenge. The
 * domain row records strategy=`manual_override` and an
 * `organization_domain.ownership_verified` audit event is emitted with the
 * same strategy.
 * Idempotent: re-calling on an already-verified domain returns the current
 * ownership state without re-emitting the audit event.
 *
 * @param organization_id - The ID of the organization to which the domain belongs
 * @param domain_id - The ID of the domain
 */
export const VerifyOrganizationDomainOwnership =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: VerifyOrganizationDomainOwnershipInput,
    outputSchema: VerifyOrganizationDomainOwnershipOutput,
    errors: [Forbidden, NotFound] as const,
  }));
