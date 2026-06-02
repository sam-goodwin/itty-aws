import * as Schema from "effect/Schema";
import { API } from "../../../backend-client.ts";
import * as T from "../../../traits.ts";
import { Forbidden, NotFound, UnprocessableEntity } from "../../../errors.ts";

// Input Schema
export const DeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  organization_role_id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/organization_roles/{organization_role_id}",
  }),
);
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
 * Delete an organization role
 *
 * Deletes the organization role.
 * The role cannot be deleted if it is currently used as the default creator role, domain default role, assigned to any members, or exists in any invitations.
 *
 * @param organization_role_id - The ID of the organization role to delete
 */
const delete_ = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteInput,
  outputSchema: DeleteOutput,
  errors: [Forbidden, NotFound, UnprocessableEntity] as const,
}));
export { delete_ as delete };
