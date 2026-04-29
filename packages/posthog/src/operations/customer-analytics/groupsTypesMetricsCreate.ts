import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const GroupsTypesMetricsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    group_type_index: Schema.Number.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    id: Schema.String,
    name: Schema.String,
    format: Schema.optional(Schema.Literals(["numeric", "currency"])),
    interval: Schema.optional(Schema.Number),
    display: Schema.optional(Schema.Literals(["number", "sparkline"])),
    filters: Schema.Unknown,
    math: Schema.optional(Schema.Literals(["count", "sum"])),
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
    id: Schema.String,
    name: Schema.String,
    format: Schema.optional(Schema.Literals(["numeric", "currency"])),
    interval: Schema.optional(Schema.Number),
    display: Schema.optional(Schema.Literals(["number", "sparkline"])),
    filters: Schema.Unknown,
    math: Schema.optional(Schema.Literals(["count", "sum"])),
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
