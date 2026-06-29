import * as Schema from "effect/Schema";
import { API } from "../../../backend-client.ts";
import * as T from "../../../traits.ts";
import { BadRequest, NotFound, UnprocessableEntity } from "../../../errors.ts";

// Input Schema
export const UpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  organization_id: Schema.String.pipe(T.PathParam()),
  domain_id: Schema.String.pipe(T.PathParam()),
  enrollment_mode: Schema.optional(Schema.NullOr(Schema.String)),
  verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
}).pipe(
  T.Http({
    method: "PATCH",
    path: "/organizations/{organization_id}/domains/{domain_id}",
  }),
);
export type UpdateInput = typeof UpdateInput.Type;

// Output Schema
export const UpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type UpdateOutput = typeof UpdateOutput.Type;

// The operation
/**
 * Update an organization domain.
 *
 * Updates the properties of an existing organization domain.
 *
 * @param organization_id - The ID of the organization to which the domain belongs
 * @param domain_id - The ID of the domain
 */
export const update = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpdateInput,
  outputSchema: UpdateOutput,
  errors: [BadRequest, NotFound, UnprocessableEntity] as const,
}));
