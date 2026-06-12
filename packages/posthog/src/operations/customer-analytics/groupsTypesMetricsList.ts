import * as Schema from "effect/Schema";
import { GroupUsageMetricSchema } from "./_schemas.ts";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const GroupsTypesMetricsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    group_type_index: Schema.Number.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/groups_types/{group_type_index}/metrics/",
    }),
  );
export type GroupsTypesMetricsListInput =
  typeof GroupsTypesMetricsListInput.Type;

// Output Schema
export const GroupsTypesMetricsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.optional(Schema.Number),
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.optional(
      Schema.Array(Schema.suspend(() => GroupUsageMetricSchema)),
    ),
  });
export type GroupsTypesMetricsListOutput =
  typeof GroupsTypesMetricsListOutput.Type;

// The operation
/**
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const groupsTypesMetricsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GroupsTypesMetricsListInput,
    outputSchema: GroupsTypesMetricsListOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
