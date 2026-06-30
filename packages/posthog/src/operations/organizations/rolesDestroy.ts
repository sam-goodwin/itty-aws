import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface RolesDestroyInput {
  id: string;
  organization_id: string;
}
export const RolesDestroyInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
  organization_id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/api/organizations/{organization_id}/roles/{id}/",
  }),
) as unknown as Schema.Codec<RolesDestroyInput>;

// Output Schema
export type RolesDestroyOutput = void;
export const RolesDestroyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<RolesDestroyOutput>;

// The operation
/**
 *
 * @param id - A UUID string identifying this role.
 * @param organization_id - ID of the organization you're trying to access. To find the ID of the organization, make a call to /api/organizations/.
 */
export const rolesDestroy = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RolesDestroyInput,
  outputSchema: RolesDestroyOutput,
  errors: [Forbidden, NotFound] as const,
}));
