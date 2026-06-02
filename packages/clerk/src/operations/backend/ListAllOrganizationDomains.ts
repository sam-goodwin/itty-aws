import * as Schema from "effect/Schema";
import { API } from "../../backend-client.ts";
import * as T from "../../traits.ts";
import { Forbidden, UnprocessableEntity } from "../../errors.ts";

// Input Schema
export const ListAllOrganizationDomainsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organization_id: Schema.optional(Schema.String),
    verified: Schema.optional(Schema.Literals(["true", "false"])),
    enrollment_mode: Schema.optional(Schema.String),
    query: Schema.optional(Schema.String),
    domains: Schema.optional(Schema.String),
    order_by: Schema.optional(Schema.String),
    offset: Schema.optional(Schema.Number),
    limit: Schema.optional(Schema.Number),
  }).pipe(T.Http({ method: "GET", path: "/organization_domains" }));
export type ListAllOrganizationDomainsInput =
  typeof ListAllOrganizationDomainsInput.Type;

// Output Schema
export const ListAllOrganizationDomainsOutput =
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
export type ListAllOrganizationDomainsOutput =
  typeof ListAllOrganizationDomainsOutput.Type;

// The operation
/**
 * List all organization domains
 *
 * Retrieves a list of all organization domains within the current instance.
 * This endpoint can be used to list all domains across all organizations
 * or filter domains by organization, verification status, enrollment mode, or search query.
 * The response includes pagination information and details about each domain
 * including its verification status, enrollment mode, and associated counts.
 *
 * @param organization_id - The ID of the organization to filter domains by
 * @param verified - Filter by verification status
 * @param enrollment_mode - Filter by enrollment mode
 * @param query - Search domains by name or organization ID.
If the query starts with "org_", it will search by exact organization ID match.
Otherwise, it performs a case-insensitive partial match on the domain name.

Note: An empty string or whitespace-only value is not allowed and will result in a validation error.

 * @param domains - Filter by exact domain names. Accepts multiple values (e.g. domains=example.com&domains=test.org).
 * @param order_by - Allows to return organization domains in a particular order.
At the moment, you can order the returned domains by their `name` or `created_at`.
In order to specify the direction, you can use the `+/-` symbols prepended to the property to order by.
For example, if you want domains to be returned in descending order according to their `created_at` property, you can use `-created_at`.
If you don't use `+` or `-`, then `+` is implied.
Defaults to `-created_at`.

 * @param offset - Skip the first `offset` results when paginating.
Needs to be an integer greater or equal to zero.
To be used in conjunction with `limit`.
 * @param limit - Applies a limit to the number of results returned.
Can be used for paginating the results together with `offset`.
 */
export const ListAllOrganizationDomains = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ListAllOrganizationDomainsInput,
    outputSchema: ListAllOrganizationDomainsOutput,
    errors: [Forbidden, UnprocessableEntity] as const,
  }),
);
