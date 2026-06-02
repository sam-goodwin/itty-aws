import * as Schema from "effect/Schema";
import { API } from "../../backend-client.ts";
import * as T from "../../traits.ts";
import { NotFound } from "../../errors.ts";

// Input Schema
export const DeleteOrganizationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organization_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "DELETE", path: "/organizations/{organization_id}" }),
  );
export type DeleteOrganizationInput = typeof DeleteOrganizationInput.Type;

// Output Schema
export const DeleteOrganizationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.String,
    id: Schema.optional(Schema.String),
    slug: Schema.optional(Schema.String),
    deleted: Schema.Boolean,
    external_id: Schema.optional(Schema.String),
  });
export type DeleteOrganizationOutput = typeof DeleteOrganizationOutput.Type;

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
export const DeleteOrganization = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteOrganizationInput,
  outputSchema: DeleteOrganizationOutput,
  errors: [NotFound] as const,
}));
