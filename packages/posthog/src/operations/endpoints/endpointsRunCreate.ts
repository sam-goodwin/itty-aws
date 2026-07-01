import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface EndpointsRunCreateInput {
  name: string;
  project_id: string;
  client_query_id?: string | null;
  debug?: boolean | null;
  filters_override?: {
    breakdown_filter?: {
      breakdown?: string | (string | number)[] | number | null;
      breakdown_group_type_index?: number | null;
      breakdown_hide_other_aggregation?: boolean | null;
      breakdown_histogram_bin_count?: number | null;
      breakdown_limit?: number | null;
      breakdown_normalize_url?: boolean | null;
      breakdown_path_cleaning?: boolean | null;
      breakdown_type?:
        | "cohort"
        | "person"
        | "event"
        | "event_metadata"
        | "group"
        | "session"
        | "hogql"
        | "data_warehouse"
        | "data_warehouse_person_property"
        | "revenue_analytics"
        | null;
      breakdowns?:
        | {
            group_type_index?: number | null;
            histogram_bin_count?: number | null;
            normalize_url?: boolean | null;
            property?: string | number;
            type?:
              | "person"
              | "event"
              | "event_metadata"
              | "group"
              | "session"
              | "hogql"
              | "cohort"
              | "revenue_analytics"
              | "data_warehouse"
              | "data_warehouse_person_property"
              | null;
          }[]
        | null;
    } | null;
    date_from?: string | null;
    date_to?: string | null;
    explicitDate?: boolean | null;
    properties?: unknown[] | null;
  } | null;
  limit?: number | null;
  offset?: number | null;
  refresh?: "cache" | "force" | "direct" | null;
  variables?: Record<string, unknown> | null;
  version?: number | null;
}
export const EndpointsRunCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    client_query_id: Schema.optional(Schema.NullOr(Schema.String)),
    debug: Schema.optional(Schema.NullOr(Schema.Boolean)),
    filters_override: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          breakdown_filter: Schema.optional(
            Schema.NullOr(
              Schema.Struct({
                breakdown: Schema.optional(
                  Schema.NullOr(
                    Schema.Union([
                      Schema.String,
                      Schema.Array(
                        Schema.Union([Schema.String, Schema.Number]),
                      ),
                      Schema.Number,
                    ]),
                  ),
                ),
                breakdown_group_type_index: Schema.optional(
                  Schema.NullOr(Schema.Number),
                ),
                breakdown_hide_other_aggregation: Schema.optional(
                  Schema.NullOr(Schema.Boolean),
                ),
                breakdown_histogram_bin_count: Schema.optional(
                  Schema.NullOr(Schema.Number),
                ),
                breakdown_limit: Schema.optional(Schema.NullOr(Schema.Number)),
                breakdown_normalize_url: Schema.optional(
                  Schema.NullOr(Schema.Boolean),
                ),
                breakdown_path_cleaning: Schema.optional(
                  Schema.NullOr(Schema.Boolean),
                ),
                breakdown_type: Schema.optional(
                  Schema.NullOr(
                    Schema.Literals([
                      "cohort",
                      "person",
                      "event",
                      "event_metadata",
                      "group",
                      "session",
                      "hogql",
                      "data_warehouse",
                      "data_warehouse_person_property",
                      "revenue_analytics",
                    ]),
                  ),
                ),
                breakdowns: Schema.optional(
                  Schema.NullOr(
                    Schema.Array(
                      Schema.Struct({
                        group_type_index: Schema.optional(
                          Schema.NullOr(Schema.Number),
                        ),
                        histogram_bin_count: Schema.optional(
                          Schema.NullOr(Schema.Number),
                        ),
                        normalize_url: Schema.optional(
                          Schema.NullOr(Schema.Boolean),
                        ),
                        property: Schema.optional(
                          Schema.Union([Schema.String, Schema.Number]),
                        ),
                        type: Schema.optional(
                          Schema.NullOr(
                            Schema.Literals([
                              "person",
                              "event",
                              "event_metadata",
                              "group",
                              "session",
                              "hogql",
                              "cohort",
                              "revenue_analytics",
                              "data_warehouse",
                              "data_warehouse_person_property",
                            ]),
                          ),
                        ),
                      }),
                    ),
                  ),
                ),
              }),
            ),
          ),
          date_from: Schema.optional(Schema.NullOr(Schema.String)),
          date_to: Schema.optional(Schema.NullOr(Schema.String)),
          explicitDate: Schema.optional(Schema.NullOr(Schema.Boolean)),
          properties: Schema.optional(
            Schema.NullOr(Schema.Array(Schema.Unknown)),
          ),
        }),
      ),
    ),
    limit: Schema.optional(Schema.NullOr(Schema.Number)),
    offset: Schema.optional(Schema.NullOr(Schema.Number)),
    refresh: Schema.optional(
      Schema.NullOr(Schema.Literals(["cache", "force", "direct"])),
    ),
    variables: Schema.optional(
      Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
    ),
    version: Schema.optional(Schema.NullOr(Schema.Number)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/endpoints/{name}/run/",
    }),
  ) as unknown as Schema.Codec<EndpointsRunCreateInput>;

// Output Schema
export interface EndpointsRunCreateOutput {
  name?: string;
  execution_id?: string;
  results?: unknown[];
  columns?: string[];
  hasMore?: boolean;
  endpoint_version?: number;
}
export const EndpointsRunCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    execution_id: Schema.optional(Schema.String),
    results: Schema.optional(Schema.Array(Schema.Unknown)),
    columns: Schema.optional(Schema.Array(Schema.String)),
    hasMore: Schema.optional(Schema.Boolean),
    endpoint_version: Schema.optional(Schema.Number),
  }) as unknown as Schema.Codec<EndpointsRunCreateOutput>;

// The operation
/**
 * Execute endpoint with optional materialization. Supports version parameter, runs latest version if not set.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const endpointsRunCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: EndpointsRunCreateInput,
  outputSchema: EndpointsRunCreateOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
