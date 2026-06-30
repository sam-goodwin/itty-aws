import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface EventFilterMetricsTotalsRetrieveInput {
  project_id: string;
}
export const EventFilterMetricsTotalsRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/event_filter/metrics/totals/",
    }),
  ) as unknown as Schema.Codec<EventFilterMetricsTotalsRetrieveInput>;

// Output Schema
export interface EventFilterMetricsTotalsRetrieveOutput {
  totals?: Record<string, number>;
}
export const EventFilterMetricsTotalsRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    totals: Schema.optional(Schema.Record(Schema.String, Schema.Number)),
  }) as unknown as Schema.Codec<EventFilterMetricsTotalsRetrieveOutput>;

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
export const eventFilterMetricsTotalsRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: EventFilterMetricsTotalsRetrieveInput,
    outputSchema: EventFilterMetricsTotalsRetrieveOutput,
  }));
