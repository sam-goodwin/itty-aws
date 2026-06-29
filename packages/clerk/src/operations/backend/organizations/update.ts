import * as Schema from "effect/Schema";
import { API } from "../../../backend-client.ts";
import * as T from "../../../traits.ts";
import {
  BadRequest,
  PaymentRequired,
  Forbidden,
  NotFound,
  UnprocessableEntity,
} from "../../../errors.ts";

// Input Schema
export const UpdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  organization_id: Schema.String.pipe(T.PathParam()),
  public_metadata: Schema.optional(
    Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
  ),
  private_metadata: Schema.optional(
    Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
  ),
  name: Schema.optional(Schema.NullOr(Schema.String)),
  slug: Schema.optional(Schema.NullOr(Schema.String)),
  max_allowed_memberships: Schema.optional(Schema.NullOr(Schema.Number)),
  admin_delete_enabled: Schema.optional(Schema.NullOr(Schema.Boolean)),
  created_at: Schema.optional(Schema.NullOr(Schema.String)),
  role_set_key: Schema.optional(Schema.NullOr(Schema.String)),
}).pipe(T.Http({ method: "PATCH", path: "/organizations/{organization_id}" }));
export type UpdateInput = typeof UpdateInput.Type;

// Output Schema
export const UpdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type UpdateOutput = typeof UpdateOutput.Type;

// The operation
/**
 * Update an organization
 *
 * Updates an existing organization
 *
 * @param organization_id - The ID of the organization to update
 */
export const update = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpdateInput,
  outputSchema: UpdateOutput,
  errors: [
    BadRequest,
    PaymentRequired,
    Forbidden,
    NotFound,
    UnprocessableEntity,
  ] as const,
}));
