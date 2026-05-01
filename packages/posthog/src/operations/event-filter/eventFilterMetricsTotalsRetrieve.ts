import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const EventFilterMetricsTotalsRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/environments/{project_id}/event_filter/metrics/totals/",
    }),
  );
export type EventFilterMetricsTotalsRetrieveInput =
  typeof EventFilterMetricsTotalsRetrieveInput.Type;

// Output Schema
export const EventFilterMetricsTotalsRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    totals: Schema.optional(Schema.Record(Schema.String, Schema.Number)),
  });
export type EventFilterMetricsTotalsRetrieveOutput =
  typeof EventFilterMetricsTotalsRetrieveOutput.Type;

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
    errors: [Forbidden, NotFound] as const,
  }));
