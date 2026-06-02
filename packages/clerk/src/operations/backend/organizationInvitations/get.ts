import * as Schema from "effect/Schema";
import { API } from "../../../backend-client.ts";
import * as T from "../../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../../errors.ts";

// Input Schema
export const GetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  organization_id: Schema.String.pipe(T.PathParam()),
  invitation_id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/organizations/{organization_id}/invitations/{invitation_id}",
  }),
);
export type GetInput = typeof GetInput.Type;

// Output Schema
export const GetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  object: Schema.Literals(["organization_invitation"]),
  id: Schema.String,
  email_address: Schema.String,
  role: Schema.String,
  role_name: Schema.String,
  organization_id: Schema.optional(Schema.String),
  inviter_id: Schema.NullOr(Schema.String),
  public_inviter_data: Schema.NullOr(
    Schema.Struct({
      user_id: Schema.String,
      first_name: Schema.NullOr(Schema.String),
      last_name: Schema.NullOr(Schema.String),
      image_url: Schema.String,
      has_image: Schema.Boolean,
      identifier: Schema.String,
    }),
  ),
  status: Schema.optional(Schema.String),
  public_metadata: Schema.Record(Schema.String, Schema.Unknown),
  private_metadata: Schema.optional(
    Schema.Record(Schema.String, Schema.Unknown),
  ),
  url: Schema.NullOr(Schema.String),
  expires_at: Schema.NullOr(Schema.Number),
  created_at: Schema.Number,
  updated_at: Schema.Number,
});
export type GetOutput = typeof GetOutput.Type;

// The operation
/**
 * Retrieve an organization invitation by ID
 *
 * Use this request to get an existing organization invitation by ID.
 *
 * @param organization_id - The organization ID.
 * @param invitation_id - The organization invitation ID.
 */
export const get = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetInput,
  outputSchema: GetOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
