import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const MembersListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  organization_id: Schema.String.pipe(T.PathParam()),
  limit: Schema.optional(Schema.Number),
  offset: Schema.optional(Schema.Number),
  order: Schema.optional(Schema.Literals(["-joined_at", "joined_at"])),
}).pipe(
  T.Http({
    method: "GET",
    path: "/api/organizations/{organization_id}/members/",
  }),
);
export type MembersListInput = typeof MembersListInput.Type;

// Output Schema
export const MembersListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  count: Schema.Number,
  next: Schema.optional(Schema.NullOr(Schema.String)),
  previous: Schema.optional(Schema.NullOr(Schema.String)),
  results: Schema.Array(
    Schema.Struct({
      id: Schema.String,
      user: Schema.Struct({
        id: Schema.Number,
        uuid: Schema.String,
        distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
        first_name: Schema.optional(Schema.String),
        last_name: Schema.optional(Schema.String),
        email: Schema.String,
        is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
        hedgehog_config: Schema.NullOr(
          Schema.Record(Schema.String, Schema.Unknown),
        ),
        role_at_organization: Schema.optional(Schema.Unknown),
      }),
      level: Schema.optional(Schema.Literals([1, 8, 15])),
      joined_at: Schema.String,
      updated_at: Schema.String,
      is_2fa_enabled: Schema.Boolean,
      has_social_auth: Schema.Boolean,
      last_login: Schema.String,
    }),
  ),
});
export type MembersListOutput = typeof MembersListOutput.Type;

// The operation
/**
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param order - Sort order. Defaults to `-joined_at`.
 */
export const membersList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: MembersListInput,
  outputSchema: MembersListOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
