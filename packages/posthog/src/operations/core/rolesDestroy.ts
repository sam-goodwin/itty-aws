import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { Forbidden, NotFound } from "../../errors";

// Input Schema
export const RolesDestroyInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
  organization_id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/api/organizations/{organization_id}/roles/{id}/",
  }),
);
export type RolesDestroyInput = typeof RolesDestroyInput.Type;

// Output Schema
export const RolesDestroyOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type RolesDestroyOutput = typeof RolesDestroyOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this role.
 */
export const rolesDestroy = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RolesDestroyInput,
  outputSchema: RolesDestroyOutput,
  errors: [Forbidden, NotFound] as const,
}));
