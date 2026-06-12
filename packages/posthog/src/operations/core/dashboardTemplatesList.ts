import * as Schema from "effect/Schema";
import { DashboardTemplateSchema } from "./_schemas.ts";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const DashboardTemplatesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    is_featured: Schema.optional(Schema.Boolean),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
    ordering: Schema.optional(
      Schema.Literals([
        "-created_at",
        "-template_name",
        "created_at",
        "template_name",
      ]),
    ),
    scope: Schema.optional(Schema.Literals(["feature_flag", "global", "team"])),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/dashboard_templates/",
    }),
  );
export type DashboardTemplatesListInput =
  typeof DashboardTemplatesListInput.Type;

// Output Schema
export const DashboardTemplatesListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.optional(Schema.Number),
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.optional(
      Schema.Array(Schema.suspend(() => DashboardTemplateSchema)),
    ),
  });
export type DashboardTemplatesListOutput =
  typeof DashboardTemplatesListOutput.Type;

// The operation
/**
 *
 * @param is_featured - Omit for all templates. When set, filter by featured flag; parsed with str_to_bool (same as other API query booleans).
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param ordering - Optional. When not using `search`, results are sorted with featured templates first (`is_featured=true`), then by `template_name` (case-insensitive A–Z; `-template_name` for Z–A) or by `created_at` (`-created_at` for newest first). When `search` is set, order is featured first, then relevance rank, then case-insensitive name for ties.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param scope - Optional. `global`: official templates only. `team`: this project's saved templates only (`scope=team` rows for the current project). `feature_flag`: feature-flag dashboard templates only. Omit for both official and this project's templates (default dashboard template picker behavior).
 */
export const dashboardTemplatesList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DashboardTemplatesListInput,
    outputSchema: DashboardTemplatesListOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
