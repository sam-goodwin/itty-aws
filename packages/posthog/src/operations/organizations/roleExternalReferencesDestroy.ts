import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface RoleExternalReferencesDestroyInput {
  id: string;
  organization_id: string;
}
export const RoleExternalReferencesDestroyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    organization_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/organizations/{organization_id}/role_external_references/{id}/",
    }),
  ) as unknown as Schema.Codec<RoleExternalReferencesDestroyInput>;

// Output Schema
export type RoleExternalReferencesDestroyOutput = void;
export const RoleExternalReferencesDestroyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<RoleExternalReferencesDestroyOutput>;

// The operation
/**
 *
 * @param id - A UUID string identifying this role external reference.
 * @param organization_id - ID of the organization you're trying to access. To find the ID of the organization, make a call to /api/organizations/.
 */
export const roleExternalReferencesDestroy =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: RoleExternalReferencesDestroyInput,
    outputSchema: RoleExternalReferencesDestroyOutput,
    errors: [Forbidden, NotFound] as const,
  }));
