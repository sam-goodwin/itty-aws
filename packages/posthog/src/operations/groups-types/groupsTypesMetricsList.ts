import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface GroupsTypesMetricsListInput {
  group_type_index: number;
  project_id: string;
  limit?: number;
  offset?: number;
}
export const GroupsTypesMetricsListInput =
  /*@__PURE__*/ Schema.Struct({
    group_type_index: Schema.Number.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/groups_types/{group_type_index}/metrics/",
    }),
  ) as unknown as Schema.Codec<GroupsTypesMetricsListInput>;

// Output Schema
export interface GroupsTypesMetricsListOutput {
  count?: number;
  next?: string | null;
  previous?: string | null;
  results?: {
    id?: string;
    name?: string;
    format?: "numeric" | "currency";
    interval?: number;
    display?: "number" | "sparkline";
    filters?: Record<string, unknown>;
    math?: "count" | "sum";
    math_property?: string | null;
  }[];
}
export const GroupsTypesMetricsListOutput =
  /*@__PURE__*/ Schema.Struct({
    count: Schema.optional(Schema.Number),
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          format: Schema.optional(Schema.Literals(["numeric", "currency"])),
          interval: Schema.optional(Schema.Number),
          display: Schema.optional(Schema.Literals(["number", "sparkline"])),
          filters: Schema.optional(
            Schema.Record(Schema.String, Schema.Unknown),
          ),
          math: Schema.optional(Schema.Literals(["count", "sum"])),
          math_property: Schema.optional(Schema.NullOr(Schema.String)),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<GroupsTypesMetricsListOutput>;

// The operation
/**
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const groupsTypesMetricsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: GroupsTypesMetricsListInput,
  outputSchema: GroupsTypesMetricsListOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
