import * as Schema from "effect/Schema";
import { API } from "../../../backend-client.ts";
import * as T from "../../../traits.ts";
import {
  BadRequest,
  PaymentRequired,
  Forbidden,
  UnprocessableEntity,
} from "../../../errors.ts";

// Input Schema
export const CreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.String,
  created_by: Schema.optional(Schema.NullOr(Schema.String)),
  private_metadata: Schema.optional(
    Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
  ),
  public_metadata: Schema.optional(
    Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
  ),
  slug: Schema.optional(Schema.NullOr(Schema.String)),
  max_allowed_memberships: Schema.optional(Schema.NullOr(Schema.Number)),
  created_at: Schema.optional(Schema.NullOr(Schema.String)),
  role_set_key: Schema.optional(Schema.NullOr(Schema.String)),
}).pipe(T.Http({ method: "POST", path: "/organizations" }));
export type CreateInput = typeof CreateInput.Type;

// Output Schema
export const CreateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type CreateOutput = typeof CreateOutput.Type;

// The operation
/**
 * Create an organization
 *
 * Creates a new organization with the given name for an instance.
 * You can specify an optional slug for the new organization.
 * If provided, the organization slug can contain only lowercase alphanumeric characters (letters and digits) and the dash "-".
 * Organization slugs must be unique for the instance.
 * You can provide additional metadata for the organization and set any custom attribute you want.
 * Organizations support private and public metadata.
 * Private metadata can only be accessed from the Backend API.
 * Public metadata can be accessed from the Backend API, and are read-only from the Frontend API.
 * The `created_by` user will see this as their [active organization](https://clerk.com/docs/organizations/overview#active-organization)
 * the next time they create a session, presuming they don't explicitly set a different organization as active before then.
 */
export const create = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateInput,
  outputSchema: CreateOutput,
  errors: [
    BadRequest,
    PaymentRequired,
    Forbidden,
    UnprocessableEntity,
  ] as const,
}));
