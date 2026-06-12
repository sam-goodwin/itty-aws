import * as Schema from "effect/Schema";
import { RoleExternalReferenceSchema } from "./_schemas.ts";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const RoleExternalReferencesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organization_id: Schema.String.pipe(T.PathParam()),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/organizations/{organization_id}/role_external_references/",
    }),
  );
export type RoleExternalReferencesListInput =
  typeof RoleExternalReferencesListInput.Type;

// Output Schema
export const RoleExternalReferencesListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.optional(Schema.Number),
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.optional(
      Schema.Array(Schema.suspend(() => RoleExternalReferenceSchema)),
    ),
  });
export type RoleExternalReferencesListOutput =
  typeof RoleExternalReferencesListOutput.Type;

// The operation
/**
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 */
export const roleExternalReferencesList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RoleExternalReferencesListInput,
    outputSchema: RoleExternalReferencesListOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
