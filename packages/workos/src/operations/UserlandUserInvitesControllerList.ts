import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export interface UserlandUserInvitesControllerListInput {
  before?: string;
  after?: string;
  limit?: number;
  order?: string;
  organization_id?: string;
  email?: string;
}
export const UserlandUserInvitesControllerListInput =
  /*@__PURE__*/ Schema.Struct({
    before: Schema.optional(Schema.String),
    after: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    order: Schema.optional(Schema.String),
    organization_id: Schema.optional(Schema.String),
    email: Schema.optional(Schema.String),
  }).pipe(
    T.Http({ method: "GET", path: "/user_management/invitations" }),
  ) as unknown as Schema.Codec<UserlandUserInvitesControllerListInput>;

// Output Schema
export interface UserlandUserInvitesControllerListOutput {
  object: string;
  data: ReadonlyArray<{
    object?: string;
    id?: string;
    email?: string;
    state?: "pending" | "accepted" | "expired" | "revoked";
    accepted_at?: string | null;
    revoked_at?: string | null;
    expires_at?: string;
    organization_id?: string | null;
    inviter_user_id?: string | null;
    accepted_user_id?: string | null;
    role_slug?: string | null;
    created_at?: string;
    updated_at?: string;
    token?: string;
    accept_invitation_url?: string;
  }>;
  list_metadata: { before: string | null; after: string | null };
}
export const UserlandUserInvitesControllerListOutput =
  /*@__PURE__*/ Schema.Struct({
    object: Schema.String,
    data: Schema.Array(
      Schema.Struct({
        object: Schema.optional(Schema.String),
        id: Schema.optional(Schema.String),
        email: Schema.optional(Schema.String),
        state: Schema.optional(
          Schema.Literals(["pending", "accepted", "expired", "revoked"]),
        ),
        accepted_at: Schema.optional(Schema.NullOr(Schema.String)),
        revoked_at: Schema.optional(Schema.NullOr(Schema.String)),
        expires_at: Schema.optional(Schema.String),
        organization_id: Schema.optional(Schema.NullOr(Schema.String)),
        inviter_user_id: Schema.optional(Schema.NullOr(Schema.String)),
        accepted_user_id: Schema.optional(Schema.NullOr(Schema.String)),
        role_slug: Schema.optional(Schema.NullOr(Schema.String)),
        created_at: Schema.optional(Schema.String),
        updated_at: Schema.optional(Schema.String),
        token: Schema.optional(Schema.String),
        accept_invitation_url: Schema.optional(Schema.String),
      }),
    ),
    list_metadata: Schema.Struct({
      before: Schema.NullOr(Schema.String),
      after: Schema.NullOr(Schema.String),
    }),
  }) as unknown as Schema.Codec<UserlandUserInvitesControllerListOutput>;

// The operation
/**
 * List invitations
 *
 * Get a list of all of invitations matching the criteria specified.
 *
 * @param before - An object ID that defines your place in the list. When the ID is not present, you are at the end of the list. For example, if you make a list request and receive 100 objects, ending with `"obj_123"`, your subsequent call can include `before="obj_123"` to fetch a new batch of objects before `"obj_123"`.
 * @param after - An object ID that defines your place in the list. When the ID is not present, you are at the end of the list. For example, if you make a list request and receive 100 objects, ending with `"obj_123"`, your subsequent call can include `after="obj_123"` to fetch a new batch of objects after `"obj_123"`.
 * @param limit - Upper limit on the number of objects to return, between `1` and `100`.
 * @param order - Order the results by the creation time. Supported values are `"asc"` (ascending), `"desc"` (descending), and `"normal"` (descending with reversed cursor semantics where `before` fetches older records and `after` fetches newer records).
 * @param organization_id - The ID of the [organization](/reference/organization) that the recipient will join.
 * @param email - The email address of the recipient.
 */
export const UserlandUserInvitesControllerList =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: UserlandUserInvitesControllerListInput,
    outputSchema: UserlandUserInvitesControllerListOutput,
    errors: [UnprocessableEntity] as const,
  }));
