import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface MembersScopedApiKeysRetrieveInput {
  organization_id: string;
  user__uuid: string;
}
export const MembersScopedApiKeysRetrieveInput =
  /*@__PURE__*/ Schema.Struct({
    organization_id: Schema.String.pipe(T.PathParam()),
    user__uuid: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/organizations/{organization_id}/members/{user__uuid}/scoped_api_keys/",
    }),
  ) as unknown as Schema.Codec<MembersScopedApiKeysRetrieveInput>;

// Output Schema
export interface MembersScopedApiKeysRetrieveOutput {
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
}
export const MembersScopedApiKeysRetrieveOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<MembersScopedApiKeysRetrieveOutput>;

// The operation
/**
 *
 * @param organization_id - ID of the organization you're trying to access. To find the ID of the organization, make a call to /api/organizations/.
 */
export const membersScopedApiKeysRetrieve =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: MembersScopedApiKeysRetrieveInput,
    outputSchema: MembersScopedApiKeysRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }));
