import * as Schema from "effect/Schema";
import { API } from "../../../backend-client.ts";
import * as T from "../../../traits.ts";
import { NotFound } from "../../../errors.ts";

// Input Schema
export const DeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  organization_id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "DELETE", path: "/organizations/{organization_id}" }));
export type DeleteInput = typeof DeleteInput.Type;

// Output Schema
export const DeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  object: Schema.String,
  id: Schema.optional(Schema.String),
  slug: Schema.optional(Schema.String),
  deleted: Schema.Boolean,
  external_id: Schema.optional(Schema.String),
});
export type DeleteOutput = typeof DeleteOutput.Type;

// The operation
/**
 * Delete an organization
 *
 * Deletes the given organization.
 * Please note that deleting an organization will also delete all memberships and invitations.
 * This is not reversible.
 * After the organization is deleted, any user's active sessions that contain the deleted
 * organization will be cleared.
 *
 * @param organization_id - The ID of the organization to delete
 */
const delete_ = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteInput,
  outputSchema: DeleteOutput,
  errors: [NotFound] as const,
}));
export { delete_ as delete };
