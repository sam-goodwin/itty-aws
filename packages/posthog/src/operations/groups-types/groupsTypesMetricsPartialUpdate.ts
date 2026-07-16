import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface GroupsTypesMetricsPartialUpdateInput {
  group_type_index: number;
  id: string;
  project_id: string;
  name?: string;
  format?: "numeric" | "currency";
  interval?: number;
  display?: "number" | "sparkline";
  filters?: Record<string, unknown>;
  math?: "count" | "sum";
  math_property?: string | null;
}
export const GroupsTypesMetricsPartialUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    group_type_index: Schema.Number.pipe(T.PathParam()),
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    name: Schema.optional(Schema.String),
    format: Schema.optional(Schema.Literals(["numeric", "currency"])),
    interval: Schema.optional(Schema.Number),
    display: Schema.optional(Schema.Literals(["number", "sparkline"])),
    filters: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    math: Schema.optional(Schema.Literals(["count", "sum"])),
    math_property: Schema.optional(Schema.NullOr(Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/api/projects/{project_id}/groups_types/{group_type_index}/metrics/{id}/",
    }),
  ) as unknown as Schema.Codec<GroupsTypesMetricsPartialUpdateInput>;

// Output Schema
export interface GroupsTypesMetricsPartialUpdateOutput {
  id?: string;
  name?: string;
  format?: "numeric" | "currency";
  interval?: number;
  display?: "number" | "sparkline";
  filters?: Record<string, unknown>;
  math?: "count" | "sum";
  math_property?: string | null;
}
export const GroupsTypesMetricsPartialUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    format: Schema.optional(Schema.Literals(["numeric", "currency"])),
    interval: Schema.optional(Schema.Number),
    display: Schema.optional(Schema.Literals(["number", "sparkline"])),
    filters: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    math: Schema.optional(Schema.Literals(["count", "sum"])),
    math_property: Schema.optional(Schema.NullOr(Schema.String)),
  }) as unknown as Schema.Codec<GroupsTypesMetricsPartialUpdateOutput>;

// The operation
/**
 *
 * @param id - A UUID string identifying this group usage metric.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const groupsTypesMetricsPartialUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: GroupsTypesMetricsPartialUpdateInput,
    outputSchema: GroupsTypesMetricsPartialUpdateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
