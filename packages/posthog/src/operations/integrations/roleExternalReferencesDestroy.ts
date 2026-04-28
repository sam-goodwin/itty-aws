import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { Forbidden, NotFound } from "../../errors";

// Input Schema
export const RoleExternalReferencesDestroyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    organization_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/organizations/{organization_id}/role_external_references/{id}/",
    }),
  );
export type RoleExternalReferencesDestroyInput =
  typeof RoleExternalReferencesDestroyInput.Type;

// Output Schema
export const RoleExternalReferencesDestroyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type RoleExternalReferencesDestroyOutput =
  typeof RoleExternalReferencesDestroyOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this role external reference.
 */
export const roleExternalReferencesDestroy =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: RoleExternalReferencesDestroyInput,
    outputSchema: RoleExternalReferencesDestroyOutput,
    errors: [Forbidden, NotFound] as const,
  }));
