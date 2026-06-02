import * as Schema from "effect/Schema";
import { API } from "../../backend-client.ts";
import * as T from "../../traits.ts";
import {
  BadRequest,
  Forbidden,
  NotFound,
  UnprocessableEntity,
} from "../../errors.ts";

// Input Schema
export const CreateOrganizationDomainInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organization_id: Schema.String.pipe(T.PathParam()),
    name: Schema.optional(Schema.String),
    enrollment_mode: Schema.optional(Schema.String),
    verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/organizations/{organization_id}/domains",
    }),
  );
export type CreateOrganizationDomainInput =
  typeof CreateOrganizationDomainInput.Type;

// Output Schema
export const CreateOrganizationDomainOutput =
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
export type CreateOrganizationDomainOutput =
  typeof CreateOrganizationDomainOutput.Type;

// The operation
/**
 * Create a new organization domain.
 *
 * Creates a new organization domain. By default the domain is verified, but can be optionally set to unverified.
 *
 * @param organization_id - The ID of the organization where the new domain will be created.
 */
export const CreateOrganizationDomain = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CreateOrganizationDomainInput,
    outputSchema: CreateOrganizationDomainOutput,
    errors: [BadRequest, Forbidden, NotFound, UnprocessableEntity] as const,
  }),
);
