import * as Schema from "effect/Schema";
import { API } from "../../backend-client.ts";
import * as T from "../../traits.ts";
import { UnprocessableEntity } from "../../errors.ts";

// Input Schema
export const ListOrganizationDomainsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organization_id: Schema.String.pipe(T.PathParam()),
    verified: Schema.optional(Schema.String),
    enrollment_mode: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({ method: "GET", path: "/organizations/{organization_id}/domains" }),
  );
export type ListOrganizationDomainsInput =
  typeof ListOrganizationDomainsInput.Type;

// Output Schema
export const ListOrganizationDomainsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    data: Schema.Array(
      Schema.Struct({
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
      }),
    ),
    total_count: Schema.Number,
  });
export type ListOrganizationDomainsOutput =
  typeof ListOrganizationDomainsOutput.Type;

// The operation
/**
 * Get a list of all domains of an organization.
 *
 * @param organization_id - The organization ID.
 * @param verified - Filter domains by their verification status. `true` or `false`
 * @param enrollment_mode - Filter domains by their enrollment mode
 * @param limit - Applies a limit to the number of results returned.
Can be used for paginating the results together with `offset`.
 * @param offset - Skip the first `offset` results when paginating.
Needs to be an integer greater or equal to zero.
To be used in conjunction with `limit`.
 */
export const ListOrganizationDomains = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ListOrganizationDomainsInput,
    outputSchema: ListOrganizationDomainsOutput,
    errors: [UnprocessableEntity] as const,
  }),
);
