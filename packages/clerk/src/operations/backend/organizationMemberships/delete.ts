import * as Schema from "effect/Schema";
import { API } from "../../../backend-client.ts";
import * as T from "../../../traits.ts";
import { NotFound, UnprocessableEntity } from "../../../errors.ts";

// Input Schema
export const DeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  organization_id: Schema.String.pipe(T.PathParam()),
  user_id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/organizations/{organization_id}/memberships/{user_id}",
  }),
);
export type DeleteInput = typeof DeleteInput.Type;

// Output Schema
export const DeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String,
  object: Schema.Literals(["organization_membership"]),
  role: Schema.String,
  role_name: Schema.optional(Schema.String),
  permissions: Schema.Array(Schema.String),
  public_metadata: Schema.Record(Schema.String, Schema.Unknown),
  private_metadata: Schema.optional(
    Schema.Record(Schema.String, Schema.Unknown),
  ),
  organization: Schema.Struct({
    object: Schema.Literals(["organization"]),
    id: Schema.String,
    name: Schema.String,
    slug: Schema.String,
    image_url: Schema.optional(Schema.String),
    has_image: Schema.Boolean,
    members_count: Schema.optional(Schema.Number),
    missing_member_with_elevated_permissions: Schema.optional(Schema.Boolean),
    pending_invitations_count: Schema.optional(Schema.Number),
    max_allowed_memberships: Schema.Number,
    admin_delete_enabled: Schema.Boolean,
    public_metadata: Schema.Record(Schema.String, Schema.Unknown),
    private_metadata: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    created_by: Schema.optional(Schema.String),
    created_at: Schema.Number,
    updated_at: Schema.Number,
    last_active_at: Schema.optional(Schema.Number),
    role_set_key: Schema.optional(Schema.NullOr(Schema.String)),
  }),
  public_user_data: Schema.optional(
    Schema.Struct({
      user_id: Schema.String,
      first_name: Schema.NullOr(Schema.String),
      last_name: Schema.NullOr(Schema.String),
      profile_image_url: Schema.NullOr(Schema.String),
      image_url: Schema.String,
      has_image: Schema.Boolean,
      identifier: Schema.optional(Schema.NullOr(Schema.String)),
      username: Schema.optional(Schema.NullOr(Schema.String)),
      banned: Schema.optional(Schema.Boolean),
    }),
  ),
  created_at: Schema.Number,
  updated_at: Schema.Number,
});
export type DeleteOutput = typeof DeleteOutput.Type;

// The operation
/**
 * Remove a member from an organization
 *
 * Removes the given membership from the organization
 *
 * @param organization_id - The ID of the organization to which this membership belongs
 * @param user_id - The ID of the user to which this membership belongs
 */
const delete_ = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteInput,
  outputSchema: DeleteOutput,
  errors: [NotFound, UnprocessableEntity] as const,
}));
export { delete_ as delete };
