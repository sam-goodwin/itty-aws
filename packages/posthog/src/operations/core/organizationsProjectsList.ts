import * as Schema from "effect/Schema";
import { ProjectBackwardCompatBasicSchema } from "./_schemas.ts";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const OrganizationsProjectsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organization_id: Schema.String.pipe(T.PathParam()),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
    search: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/organizations/{organization_id}/projects/",
    }),
  );
export type OrganizationsProjectsListInput =
  typeof OrganizationsProjectsListInput.Type;

// Output Schema
export const OrganizationsProjectsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.optional(Schema.Number),
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.optional(
      Schema.Array(Schema.suspend(() => ProjectBackwardCompatBasicSchema)),
    ),
  });
export type OrganizationsProjectsListOutput =
  typeof OrganizationsProjectsListOutput.Type;

// The operation
/**
 * Projects for the current organization.
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param search - A search term.
 */
export const organizationsProjectsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: OrganizationsProjectsListInput,
    outputSchema: OrganizationsProjectsListOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
