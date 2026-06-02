import * as Schema from "effect/Schema";
import { API } from "../../../backend-client.ts";
import * as T from "../../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../../errors.ts";

// Input Schema
export const GetOrganizationInvitationsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    user_id: Schema.String.pipe(T.PathParam()),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
    status: Schema.optional(
      Schema.Literals(["pending", "accepted", "revoked", "expired"]),
    ),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/users/{user_id}/organization_invitations",
    }),
  );
export type GetOrganizationInvitationsInput =
  typeof GetOrganizationInvitationsInput.Type;

// Output Schema
export const GetOrganizationInvitationsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    data: Schema.Array(
      Schema.Struct({
        object: Schema.optional(Schema.Literals(["organization_invitation"])),
        id: Schema.optional(Schema.String),
        email_address: Schema.optional(Schema.String),
        role: Schema.optional(Schema.String),
        role_name: Schema.optional(Schema.String),
        organization_id: Schema.optional(Schema.String),
        inviter_id: Schema.optional(Schema.NullOr(Schema.String)),
        public_inviter_data: Schema.optional(
          Schema.NullOr(
            Schema.Struct({
              user_id: Schema.String,
              first_name: Schema.NullOr(Schema.String),
              last_name: Schema.NullOr(Schema.String),
              image_url: Schema.String,
              has_image: Schema.Boolean,
              identifier: Schema.String,
            }),
          ),
        ),
        status: Schema.optional(Schema.String),
        public_metadata: Schema.optional(
          Schema.Record(Schema.String, Schema.Unknown),
        ),
        private_metadata: Schema.optional(
          Schema.Record(Schema.String, Schema.Unknown),
        ),
        url: Schema.optional(Schema.NullOr(Schema.String)),
        expires_at: Schema.optional(Schema.NullOr(Schema.Number)),
        created_at: Schema.optional(Schema.Number),
        updated_at: Schema.optional(Schema.Number),
        public_organization_data: Schema.optional(
          Schema.Struct({
            id: Schema.String,
            name: Schema.String,
            slug: Schema.String,
            image_url: Schema.optional(Schema.String),
            has_image: Schema.Boolean,
          }),
        ),
      }),
    ),
    total_count: Schema.Number,
  });
export type GetOrganizationInvitationsOutput =
  typeof GetOrganizationInvitationsOutput.Type;

// The operation
/**
 * Retrieve all invitations for a user
 *
 * Retrieve a paginated list of the user's organization invitations
 *
 * @param user_id - The ID of the user whose organization invitations we want to retrieve
 * @param limit - Applies a limit to the number of results returned.
Can be used for paginating the results together with `offset`.
 * @param offset - Skip the first `offset` results when paginating.
Needs to be an integer greater or equal to zero.
To be used in conjunction with `limit`.
 * @param status - Filter organization invitations based on their status
 */
export const getOrganizationInvitations = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetOrganizationInvitationsInput,
    outputSchema: GetOrganizationInvitationsOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
