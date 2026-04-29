import * as Schema from "effect/Schema";
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
    count: Schema.Number,
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        name: Schema.String,
        format: Schema.optional(Schema.Literals(["numeric", "currency"])),
        interval: Schema.optional(Schema.Number),
        display: Schema.optional(Schema.Literals(["number", "sparkline"])),
        filters: Schema.Unknown,
        math: Schema.optional(Schema.Literals(["count", "sum"])),
        math_property: Schema.optional(Schema.NullOr(Schema.String)),
      }),
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
