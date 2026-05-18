import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const GetProjectTeamMembersInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id_or_slug: Schema.String.pipe(T.PathParam()),
  }).pipe(T.Http({ method: "GET", path: "/project/{id_or_slug}/members" }));
export type GetProjectTeamMembersInput = typeof GetProjectTeamMembersInput.Type;

// Output Schema
export const GetProjectTeamMembersOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.Struct({
      team_id: Schema.String,
      user: Schema.Struct({
        username: Schema.String,
        name: Schema.optional(Schema.NullOr(Schema.String)),
        email: Schema.optional(Schema.NullOr(Schema.String)),
        bio: Schema.optional(Schema.String),
        payout_data: Schema.optional(
          Schema.NullOr(
            Schema.Struct({
              balance: Schema.optional(Schema.Number),
              payout_wallet: Schema.optional(
                Schema.Literals(["paypal", "venmo"]),
              ),
              payout_wallet_type: Schema.optional(
                Schema.Literals(["email", "phone", "user_handle"]),
              ),
              payout_address: Schema.optional(Schema.String),
            }),
          ),
        ),
        id: Schema.String,
        avatar_url: Schema.String,
        created: Schema.String,
        role: Schema.Literals(["admin", "moderator", "developer"]),
        badges: Schema.optional(Schema.Number),
        auth_providers: Schema.optional(
          Schema.NullOr(Schema.Array(Schema.String)),
        ),
        email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
        has_password: Schema.optional(Schema.NullOr(Schema.Boolean)),
        has_totp: Schema.optional(Schema.NullOr(Schema.Boolean)),
        github_id: Schema.optional(Schema.NullOr(Schema.Number)),
      }),
      role: Schema.String,
      permissions: Schema.optional(Schema.Number),
      accepted: Schema.Boolean,
      payouts_split: Schema.optional(Schema.Number),
      ordering: Schema.optional(Schema.Number),
    }),
  );
export type GetProjectTeamMembersOutput =
  typeof GetProjectTeamMembersOutput.Type;

// The operation
/**
 * Get a project's team members
 *
 * @param id_or_slug - The ID or slug of the project
 */
export const getProjectTeamMembers = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetProjectTeamMembersInput,
    outputSchema: GetProjectTeamMembersOutput,
    errors: [NotFound] as const,
  }),
);
