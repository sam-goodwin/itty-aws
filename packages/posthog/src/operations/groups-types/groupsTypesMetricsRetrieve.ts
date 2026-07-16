import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface GroupsTypesMetricsRetrieveInput {
  group_type_index: number;
  id: string;
  project_id: string;
}
export const GroupsTypesMetricsRetrieveInput =
  /*@__PURE__*/ Schema.Struct({
    group_type_index: Schema.Number.pipe(T.PathParam()),
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/groups_types/{group_type_index}/metrics/{id}/",
    }),
  ) as unknown as Schema.Codec<GroupsTypesMetricsRetrieveInput>;

// Output Schema
export interface GroupsTypesMetricsRetrieveOutput {
  id?: string;
  name?: string;
  format?: "numeric" | "currency";
  interval?: number;
  display?: "number" | "sparkline";
  filters?: Record<string, unknown>;
  math?: "count" | "sum";
  math_property?: string | null;
}
export const GroupsTypesMetricsRetrieveOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    format: Schema.optional(Schema.Literals(["numeric", "currency"])),
    interval: Schema.optional(Schema.Number),
    display: Schema.optional(Schema.Literals(["number", "sparkline"])),
    filters: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    math: Schema.optional(Schema.Literals(["count", "sum"])),
    math_property: Schema.optional(Schema.NullOr(Schema.String)),
  }) as unknown as Schema.Codec<GroupsTypesMetricsRetrieveOutput>;

// The operation
/**
 *
 * @param id - A UUID string identifying this group usage metric.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const groupsTypesMetricsRetrieve = /*@__PURE__*/ API.make(() => ({
  inputSchema: GroupsTypesMetricsRetrieveInput,
  outputSchema: GroupsTypesMetricsRetrieveOutput,
  errors: [Forbidden, NotFound] as const,
}));
