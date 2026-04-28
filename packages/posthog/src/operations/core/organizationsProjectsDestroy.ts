import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { Forbidden, NotFound } from "../../errors";

// Input Schema
export const OrganizationsProjectsDestroyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Number.pipe(T.PathParam()),
    organization_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/organizations/{organization_id}/projects/{id}/",
    }),
  );
export type OrganizationsProjectsDestroyInput =
  typeof OrganizationsProjectsDestroyInput.Type;

// Output Schema
export const OrganizationsProjectsDestroyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type OrganizationsProjectsDestroyOutput =
  typeof OrganizationsProjectsDestroyOutput.Type;

// The operation
/**
 * Projects for the current organization.
 *
 * @param id - A unique value identifying this project.
 */
export const organizationsProjectsDestroy =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: OrganizationsProjectsDestroyInput,
    outputSchema: OrganizationsProjectsDestroyOutput,
    errors: [Forbidden, NotFound] as const,
  }));
