import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { BadRequest, Forbidden, NotFound } from "../../errors";

// Input Schema
export const QueryCreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  project_id: Schema.String.pipe(T.PathParam()),
  async: Schema.optional(Schema.NullOr(Schema.Boolean)),
  client_query_id: Schema.optional(Schema.NullOr(Schema.String)),
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
                  normalize_url: Schema.optional(Schema.NullOr(Schema.Boolean)),
                  property: Schema.Unknown,
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
      properties: Schema.optional(Schema.NullOr(Schema.Array(Schema.Unknown))),
    }),
  ),
  limit_context: Schema.optional(Schema.Literals(["posthog_ai", "null"])),
  name: Schema.optional(Schema.NullOr(Schema.String)),
  query: Schema.Unknown,
  refresh: Schema.optional(
    Schema.Literals([
      "async",
      "async_except_on_cache_miss",
      "blocking",
      "force_async",
      "force_blocking",
      "force_cache",
      "lazy_async",
    ]),
  ),
  variables_override: Schema.optional(
    Schema.NullOr(
      Schema.Record(
        Schema.String,
        Schema.Record(Schema.String, Schema.Unknown),
      ),
    ),
  ),
}).pipe(T.Http({ method: "POST", path: "/api/projects/{project_id}/query/" }));
export type QueryCreateInput = typeof QueryCreateInput.Type;

// Output Schema
export const QueryCreateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export type QueryCreateOutput = typeof QueryCreateOutput.Type;

// The operation
/**
 * DRF ViewSet mixin that gates coalesced responses behind permission checks.
 * The QueryCoalescingMiddleware attaches cached response data to
 * request.META["_coalesced_response"] for followers. This mixin runs DRF's
 * initial() (auth + permissions + throttling) before returning the
 * cached response, ensuring the request is authorized.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const queryCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: QueryCreateInput,
  outputSchema: QueryCreateOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
