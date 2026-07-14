import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface RoleExternalReferencesLookupRetrieveInput {
  organization_id: string;
  provider: string;
  provider_organization_id: string;
  provider_role_id?: string;
  provider_role_slug?: string;
}
export const RoleExternalReferencesLookupRetrieveInput =
  /*@__PURE__*/ Schema.Struct({
    organization_id: Schema.String.pipe(T.PathParam()),
    provider: Schema.String,
    provider_organization_id: Schema.String,
    provider_role_id: Schema.optional(Schema.String),
    provider_role_slug: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/organizations/{organization_id}/role_external_references/lookup/",
    }),
  ) as unknown as Schema.Codec<RoleExternalReferencesLookupRetrieveInput>;

// Output Schema
export interface RoleExternalReferencesLookupRetrieveOutput {
  reference?: {
    id?: string;
    provider?: string;
    provider_organization_id?: string;
    provider_role_id?: string;
    provider_role_slug?: string | null;
    provider_role_name?: string;
    role?: string;
    created_at?: string;
    created_by?: {
      id?: number;
      uuid?: string;
      distinct_id?: string | null;
      first_name?: string;
      last_name?: string;
      email?: string;
      is_email_verified?: boolean | null;
      hedgehog_config?: Record<string, unknown> | null;
      role_at_organization?:
        | "engineering"
        | "data"
        | "product"
        | "founder"
        | "leadership"
        | "marketing"
        | "sales"
        | "other"
        | ""
        | null;
    } | null;
  } | null;
}
export const RoleExternalReferencesLookupRetrieveOutput =
  /*@__PURE__*/ Schema.Struct({
    reference: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          provider: Schema.optional(Schema.String),
          provider_organization_id: Schema.optional(Schema.String),
          provider_role_id: Schema.optional(Schema.String),
          provider_role_slug: Schema.optional(Schema.NullOr(Schema.String)),
          provider_role_name: Schema.optional(Schema.String),
          role: Schema.optional(Schema.String),
          created_at: Schema.optional(Schema.String),
          created_by: Schema.optional(
            Schema.NullOr(
              Schema.Struct({
                id: Schema.optional(Schema.Number),
                uuid: Schema.optional(Schema.String),
                distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
                first_name: Schema.optional(Schema.String),
                last_name: Schema.optional(Schema.String),
                email: Schema.optional(Schema.String),
                is_email_verified: Schema.optional(
                  Schema.NullOr(Schema.Boolean),
                ),
                hedgehog_config: Schema.optional(
                  Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
                ),
                role_at_organization: Schema.optional(
                  Schema.NullOr(
                    Schema.Union([
                      Schema.Literals([
                        "engineering",
                        "data",
                        "product",
                        "founder",
                        "leadership",
                        "marketing",
                        "sales",
                        "other",
                      ]),
                      Schema.Literals([""]),
                    ]),
                  ),
                ),
              }),
            ),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<RoleExternalReferencesLookupRetrieveOutput>;

// The operation
/**
 *
 * @param organization_id - ID of the organization you're trying to access. To find the ID of the organization, make a call to /api/organizations/.
 * @param provider - Integration kind (e.g., github, linear, jira, slack).
 * @param provider_organization_id - Provider organization/workspace/site identifier.
 * @param provider_role_id - Stable provider role identifier.
 * @param provider_role_slug - Human-friendly provider role identifier.
 */
export const roleExternalReferencesLookupRetrieve =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: RoleExternalReferencesLookupRetrieveInput,
    outputSchema: RoleExternalReferencesLookupRetrieveOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
