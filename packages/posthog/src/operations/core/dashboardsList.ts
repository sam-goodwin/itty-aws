import * as Schema from "effect/Schema";
import { DashboardBasicSchema } from "./_schemas.ts";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const DashboardsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  project_id: Schema.String.pipe(T.PathParam()),
  format: Schema.optional(Schema.Literals(["json", "txt"])),
  limit: Schema.optional(Schema.Number),
  offset: Schema.optional(Schema.Number),
}).pipe(
  T.Http({ method: "GET", path: "/api/projects/{project_id}/dashboards/" }),
);
export type DashboardsListInput = typeof DashboardsListInput.Type;

// Output Schema
export const DashboardsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  count: Schema.optional(Schema.Number),
  next: Schema.optional(Schema.NullOr(Schema.String)),
  previous: Schema.optional(Schema.NullOr(Schema.String)),
  results: Schema.optional(
    Schema.Array(Schema.suspend(() => DashboardBasicSchema)),
  ),
});
export type DashboardsListOutput = typeof DashboardsListOutput.Type;

// The operation
/**
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const dashboardsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DashboardsListInput,
  outputSchema: DashboardsListOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
