import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface RolesRoleMembershipsCreateInput {
  organization_id: string;
  role_id: string;
  id?: string;
  organization_member?: {
    id?: string;
    user?: {
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
    level?: 1 | 8 | 15;
    joined_at?: string;
    updated_at?: string;
    is_2fa_enabled?: boolean;
    has_social_auth?: boolean;
    last_login?: string;
    search_match_type?: "exact" | "similar" | null;
  };
  user?: {
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
  joined_at?: string;
  updated_at?: string;
  user_uuid?: string;
}
export const RolesRoleMembershipsCreateInput =
  /*@__PURE__*/ Schema.Struct({
    organization_id: Schema.String.pipe(T.PathParam()),
    role_id: Schema.String.pipe(T.PathParam()),
    id: Schema.optional(Schema.String),
    organization_member: Schema.optional(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        user: Schema.optional(
          Schema.NullOr(
            Schema.Struct({
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
        level: Schema.optional(Schema.Literals([1, 8, 15])),
        joined_at: Schema.optional(Schema.String),
        updated_at: Schema.optional(Schema.String),
        is_2fa_enabled: Schema.optional(Schema.Boolean),
        has_social_auth: Schema.optional(Schema.Boolean),
        last_login: Schema.optional(Schema.String),
        search_match_type: Schema.optional(
          Schema.NullOr(Schema.Literals(["exact", "similar"])),
        ),
      }),
    ),
    user: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
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
    joined_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
    user_uuid: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/organizations/{organization_id}/roles/{role_id}/role_memberships/",
    }),
  ) as unknown as Schema.Codec<RolesRoleMembershipsCreateInput>;

// Output Schema
export interface RolesRoleMembershipsCreateOutput {
  id?: string;
  role_id?: string;
  organization_member?: {
    id?: string;
    user?: {
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
    level?: 1 | 8 | 15;
    joined_at?: string;
    updated_at?: string;
    is_2fa_enabled?: boolean;
    has_social_auth?: boolean;
    last_login?: string;
    search_match_type?: "exact" | "similar" | null;
  };
  user?: {
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
  joined_at?: string;
  updated_at?: string;
  user_uuid?: string;
}
export const RolesRoleMembershipsCreateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    role_id: Schema.optional(Schema.String),
    organization_member: Schema.optional(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        user: Schema.optional(
          Schema.NullOr(
            Schema.Struct({
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
        level: Schema.optional(Schema.Literals([1, 8, 15])),
        joined_at: Schema.optional(Schema.String),
        updated_at: Schema.optional(Schema.String),
        is_2fa_enabled: Schema.optional(Schema.Boolean),
        has_social_auth: Schema.optional(Schema.Boolean),
        last_login: Schema.optional(Schema.String),
        search_match_type: Schema.optional(
          Schema.NullOr(Schema.Literals(["exact", "similar"])),
        ),
      }),
    ),
    user: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
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
    joined_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
    user_uuid: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<RolesRoleMembershipsCreateOutput>;

// The operation
/**
 *
 * @param organization_id - ID of the organization you're trying to access. To find the ID of the organization, make a call to /api/organizations/.
 */
export const rolesRoleMembershipsCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: RolesRoleMembershipsCreateInput,
  outputSchema: RolesRoleMembershipsCreateOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
