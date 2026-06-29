import * as Schema from "effect/Schema";
import { API } from "../../../backend-client.ts";
import * as T from "../../../traits.ts";
import { NotFound } from "../../../errors.ts";

// Input Schema
export const DeleteLogoInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  organization_id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({ method: "DELETE", path: "/organizations/{organization_id}/logo" }),
);
export type DeleteLogoInput = typeof DeleteLogoInput.Type;

// Output Schema
export const DeleteLogoOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
});
export type DeleteLogoOutput = typeof DeleteLogoOutput.Type;

// The operation
/**
 * Delete the organization's logo.
 *
 * @param organization_id - The ID of the organization for which the logo will be deleted.
 */
export const deleteLogo = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteLogoInput,
  outputSchema: DeleteLogoOutput,
  errors: [NotFound] as const,
}));
