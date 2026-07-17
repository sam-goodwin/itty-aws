import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface QueryCreateInput {
  project_id: string;
  async?: boolean | null;
  client_query_id?: string | null;
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
  limit_context?: "posthog_ai" | null | null;
  name?: string | null;
  query?: unknown;
  refresh?:
    | "async"
    | "async_except_on_cache_miss"
    | "blocking"
    | "force_async"
    | "force_blocking"
    | "force_cache"
    | "lazy_async"
    | null;
  variables_override?: Record<string, Record<string, unknown>> | null;
}
export const QueryCreateInput = /*@__PURE__*/ Schema.Struct({
  project_id: Schema.String.pipe(T.PathParam()),
  async: Schema.optional(Schema.NullOr(Schema.Boolean)),
  client_query_id: Schema.optional(Schema.NullOr(Schema.String)),
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
                    Schema.Array(Schema.Union([Schema.String, Schema.Number])),
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
  limit_context: Schema.optional(
    Schema.NullOr(Schema.Literals(["posthog_ai", "null"])),
  ),
  name: Schema.optional(Schema.NullOr(Schema.String)),
  query: Schema.optional(Schema.Unknown),
  refresh: Schema.optional(
    Schema.NullOr(
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
  ),
  variables_override: Schema.optional(
    Schema.NullOr(
      Schema.Record(
        Schema.String,
        Schema.Record(Schema.String, Schema.Unknown),
      ),
    ),
  ),
}).pipe(
  T.Http({ method: "POST", path: "/api/projects/{project_id}/query/" }),
) as unknown as Schema.Codec<QueryCreateInput>;

// Output Schema
export type QueryCreateOutput = unknown;
export const QueryCreateOutput =
  /*@__PURE__*/ Schema.Unknown as unknown as Schema.Codec<QueryCreateOutput>;

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
export const queryCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: QueryCreateInput,
  outputSchema: QueryCreateOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
