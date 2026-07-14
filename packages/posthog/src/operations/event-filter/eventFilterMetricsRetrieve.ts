import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface EventFilterMetricsRetrieveInput {
  project_id: string;
}
export const EventFilterMetricsRetrieveInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/event_filter/metrics/",
    }),
  ) as unknown as Schema.Codec<EventFilterMetricsRetrieveInput>;

// Output Schema
export interface EventFilterMetricsRetrieveOutput {
  labels?: string[];
  series?: { name?: string; values?: number[] }[];
}
export const EventFilterMetricsRetrieveOutput =
  /*@__PURE__*/ Schema.Struct({
    labels: Schema.optional(Schema.Array(Schema.String)),
    series: Schema.optional(
      Schema.Array(
        Schema.Struct({
          name: Schema.optional(Schema.String),
          values: Schema.optional(Schema.Array(Schema.Number)),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<EventFilterMetricsRetrieveOutput>;

// The operation
/**
 * Single event filter per team.
 * GET  /event_filter/ — returns the config (or null if not yet created)
 * POST /event_filter/ — creates or updates the config (upsert)
 * GET  /event_filter/metrics/ — time-series metrics
 * GET  /event_filter/metrics/totals/ — aggregate totals
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const eventFilterMetricsRetrieve = /*@__PURE__*/ API.make(() => ({
  inputSchema: EventFilterMetricsRetrieveInput,
  outputSchema: EventFilterMetricsRetrieveOutput,
}));
