import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const UserlandUserInvitesControllerListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    before: Schema.optional(Schema.String),
    after: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    order: Schema.optional(Schema.Literals(["normal", "desc", "asc"])),
    organization_id: Schema.optional(Schema.String),
    email: Schema.optional(Schema.String),
  }).pipe(T.Http({ method: "GET", path: "/user_management/invitations" }));
export type UserlandUserInvitesControllerListInput =
  typeof UserlandUserInvitesControllerListInput.Type;

// Output Schema
export const UserlandUserInvitesControllerListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.optional(Schema.String),
    list_metadata: Schema.optional(
      Schema.Struct({
        before: Schema.NullOr(Schema.String),
        after: Schema.NullOr(Schema.String),
      }),
    ),
    data: Schema.optional(
      Schema.Array(
        Schema.Struct({
          object: Schema.String,
          id: Schema.String,
          email: Schema.String,
          state: Schema.Literals(["pending", "accepted", "expired", "revoked"]),
          accepted_at: Schema.NullOr(Schema.String),
          revoked_at: Schema.NullOr(Schema.String),
          expires_at: Schema.String,
          organization_id: Schema.NullOr(Schema.String),
          inviter_user_id: Schema.NullOr(Schema.String),
          accepted_user_id: Schema.NullOr(Schema.String),
          role_slug: Schema.NullOr(Schema.String),
          created_at: Schema.String,
          updated_at: Schema.String,
          token: Schema.String,
          accept_invitation_url: Schema.String,
        }),
      ),
    ),
  });
export type UserlandUserInvitesControllerListOutput =
  typeof UserlandUserInvitesControllerListOutput.Type;

// The operation
/**
 * List invitations
 *
 * Get a list of all of invitations matching the criteria specified.
 *
 * @param before - An object ID that defines your place in the list. When the ID is not present, you are at the end of the list. For example, if you make a list request and receive 100 objects, ending with `"obj_123"`, your subsequent call can include `before="obj_123"` to fetch a new batch of objects before `"obj_123"`.
 * @param after - An object ID that defines your place in the list. When the ID is not present, you are at the end of the list. For example, if you make a list request and receive 100 objects, ending with `"obj_123"`, your subsequent call can include `after="obj_123"` to fetch a new batch of objects after `"obj_123"`.
 * @param limit - Upper limit on the number of objects to return, between `1` and `100`.
 * @param order - Order the results by the creation time. Supported values are `"asc"` (ascending), `"desc"` (descending), and `"normal"` (descending with reversed cursor semantics where `before` fetches older records and `after` fetches newer records). Defaults to descending.
 * @param organization_id - The ID of the [organization](/reference/organization) that the recipient will join.
 * @param email - The email address of the recipient.
 */
export const UserlandUserInvitesControllerList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: UserlandUserInvitesControllerListInput,
    outputSchema: UserlandUserInvitesControllerListOutput,
    errors: [UnprocessableEntity] as const,
  }));
