import * as Schema from "effect/Schema";
import {
  GroupUsageMetricDisplayEnumSchema,
  GroupUsageMetricFormatEnumSchema,
  MathEnumSchema,
} from "./_schemas.ts";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const GroupsTypesMetricsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    group_type_index: Schema.Number.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    format: Schema.optional(
      Schema.suspend(() => GroupUsageMetricFormatEnumSchema),
    ),
    interval: Schema.optional(Schema.Number),
    display: Schema.optional(
      Schema.suspend(() => GroupUsageMetricDisplayEnumSchema),
    ),
    filters: Schema.optional(Schema.Unknown),
    math: Schema.optional(Schema.suspend(() => MathEnumSchema)),
    math_property: Schema.optional(Schema.NullOr(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/groups_types/{group_type_index}/metrics/",
    }),
  );
export type GroupsTypesMetricsCreateInput =
  typeof GroupsTypesMetricsCreateInput.Type;

// Output Schema
export const GroupsTypesMetricsCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    format: Schema.optional(
      Schema.suspend(() => GroupUsageMetricFormatEnumSchema),
    ),
    interval: Schema.optional(Schema.Number),
    display: Schema.optional(
      Schema.suspend(() => GroupUsageMetricDisplayEnumSchema),
    ),
    filters: Schema.optional(Schema.Unknown),
    math: Schema.optional(Schema.suspend(() => MathEnumSchema)),
    math_property: Schema.optional(Schema.NullOr(Schema.String)),
  });
export type GroupsTypesMetricsCreateOutput =
  typeof GroupsTypesMetricsCreateOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const groupsTypesMetricsCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GroupsTypesMetricsCreateInput,
    outputSchema: GroupsTypesMetricsCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
