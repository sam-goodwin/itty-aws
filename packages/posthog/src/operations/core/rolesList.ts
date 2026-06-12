import * as Schema from "effect/Schema";
import { RoleSchema } from "./_schemas.ts";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const RolesListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  organization_id: Schema.String.pipe(T.PathParam()),
  limit: Schema.optional(Schema.Number),
  offset: Schema.optional(Schema.Number),
}).pipe(
  T.Http({
    method: "GET",
    path: "/api/organizations/{organization_id}/roles/",
  }),
);
export type RolesListInput = typeof RolesListInput.Type;

// Output Schema
export const RolesListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  count: Schema.optional(Schema.Number),
  next: Schema.optional(Schema.NullOr(Schema.String)),
  previous: Schema.optional(Schema.NullOr(Schema.String)),
  results: Schema.optional(Schema.Array(Schema.suspend(() => RoleSchema))),
});
export type RolesListOutput = typeof RolesListOutput.Type;

// The operation
/**
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 */
export const rolesList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RolesListInput,
  outputSchema: RolesListOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
