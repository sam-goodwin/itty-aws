import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface MembersListInput {
  organization_id: string;
  limit?: number;
  offset?: number;
  order?: "-joined_at" | "joined_at";
  search?: string;
}
export const MembersListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  organization_id: Schema.String.pipe(T.PathParam()),
  limit: Schema.optional(Schema.Number),
  offset: Schema.optional(Schema.Number),
  order: Schema.optional(Schema.Literals(["-joined_at", "joined_at"])),
  search: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/api/organizations/{organization_id}/members/",
  }),
) as unknown as Schema.Codec<MembersListInput>;

// Output Schema
export interface MembersListOutput {
  count?: number;
  next?: string | null;
  previous?: string | null;
  results?: {
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
  }[];
}
export const MembersListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  count: Schema.optional(Schema.Number),
  next: Schema.optional(Schema.NullOr(Schema.String)),
  previous: Schema.optional(Schema.NullOr(Schema.String)),
  results: Schema.optional(
    Schema.Array(
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
  ),
}) as unknown as Schema.Codec<MembersListOutput>;

// The operation
/**
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param order - Sort order. Defaults to `-joined_at`.
 * @param organization_id - ID of the organization you're trying to access. To find the ID of the organization, make a call to /api/organizations/.
 * @param search - Match against member `first_name`, `last_name`, and `email`. Returns case-insensitive substring matches and fuzzy trigram matches (typos, prefix-as-you-type) together, ordered exact-first; each result's `search_match_type` is `exact` or `similar`. Capped at 200 characters.
 */
export const membersList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: MembersListInput,
  outputSchema: MembersListOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
