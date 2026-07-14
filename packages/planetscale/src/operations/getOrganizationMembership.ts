import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface GetOrganizationMembershipInput {
  organization: string;
  id: string;
}
export const GetOrganizationMembershipInput =
  /*@__PURE__*/ Schema.Struct({
    organization: Schema.String.pipe(T.PathParam()),
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/organizations/{organization}/members/{id}",
    }),
  ) as unknown as Schema.Codec<GetOrganizationMembershipInput>;

// Output Schema
export interface GetOrganizationMembershipOutput {
  id: string;
  user: {
    id: string;
    display_name: string;
    name?: string | null;
    email: string;
    avatar_url: string;
    created_at: string;
    updated_at: string;
    two_factor_auth_configured: boolean;
    default_organization?: {
      id: string;
      name: string;
      created_at: string;
      updated_at: string;
      deleted_at: string | null;
    } | null;
    sso?: boolean | null;
    managed?: boolean | null;
    directory_managed?: boolean | null;
    email_verified?: boolean | null;
  };
  role: "member" | "admin";
  created_at: string;
  updated_at: string;
}
export const GetOrganizationMembershipOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String,
    user: Schema.Struct({
      id: Schema.String,
      display_name: Schema.String,
      name: Schema.optional(Schema.NullOr(Schema.String)),
      email: Schema.String,
      avatar_url: Schema.String,
      created_at: Schema.String,
      updated_at: Schema.String,
      two_factor_auth_configured: Schema.Boolean,
      default_organization: Schema.optional(
        Schema.NullOr(
          Schema.Struct({
            id: Schema.String,
            name: Schema.String,
            created_at: Schema.String,
            updated_at: Schema.String,
            deleted_at: Schema.NullOr(Schema.String),
          }),
        ),
      ),
      sso: Schema.optional(Schema.NullOr(Schema.Boolean)),
      managed: Schema.optional(Schema.NullOr(Schema.Boolean)),
      directory_managed: Schema.optional(Schema.NullOr(Schema.Boolean)),
      email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
    }),
    role: Schema.Literals(["member", "admin"]),
    created_at: Schema.String,
    updated_at: Schema.String,
  }) as unknown as Schema.Codec<GetOrganizationMembershipOutput>;

// The operation
/**
 * Get an organization member
 *
 * @param organization - The name of the organization
 * @param id - The ID of the user
 */
export const getOrganizationMembership = /*@__PURE__*/ API.make(() => ({
  inputSchema: GetOrganizationMembershipInput,
  outputSchema: GetOrganizationMembershipOutput,
  errors: [Forbidden, NotFound] as const,
}));
