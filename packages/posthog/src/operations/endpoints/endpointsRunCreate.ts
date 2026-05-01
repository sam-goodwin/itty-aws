import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const EndpointsRunCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    client_query_id: Schema.optional(Schema.NullOr(Schema.String)),
    debug: Schema.optional(Schema.NullOr(Schema.Boolean)),
    filters_override: Schema.optional(
      Schema.Struct({
        breakdown_filter: Schema.optional(
          Schema.Struct({
            breakdown: Schema.optional(Schema.Unknown),
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
                    property: Schema.optional(Schema.Unknown),
                    type: Schema.optional(
                      Schema.Literals([
                        "cohort",
                        "person",
                        "event",
                        "event_metadata",
                        "group",
                        "session",
                        "hogql",
                        "data_warehouse_person_property",
                        "revenue_analytics",
                      ]),
                    ),
                  }),
                ),
              ),
            ),
          }),
        ),
        date_from: Schema.optional(Schema.NullOr(Schema.String)),
        date_to: Schema.optional(Schema.NullOr(Schema.String)),
        explicitDate: Schema.optional(Schema.NullOr(Schema.Boolean)),
        properties: Schema.optional(
          Schema.NullOr(Schema.Array(Schema.Unknown)),
        ),
      }),
    ),
    limit: Schema.optional(Schema.NullOr(Schema.Number)),
    offset: Schema.optional(Schema.NullOr(Schema.Number)),
    refresh: Schema.optional(Schema.Literals(["cache", "force", "direct"])),
    variables: Schema.optional(
      Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
    ),
    version: Schema.optional(Schema.NullOr(Schema.Number)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/endpoints/{name}/run/",
    }),
  );
export type EndpointsRunCreateInput = typeof EndpointsRunCreateInput.Type;

// Output Schema
export const EndpointsRunCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    results: Schema.optional(Schema.Array(Schema.Unknown)),
    columns: Schema.optional(Schema.Array(Schema.String)),
    hasMore: Schema.optional(Schema.Boolean),
    endpoint_version: Schema.optional(Schema.Number),
  });
export type EndpointsRunCreateOutput = typeof EndpointsRunCreateOutput.Type;

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
