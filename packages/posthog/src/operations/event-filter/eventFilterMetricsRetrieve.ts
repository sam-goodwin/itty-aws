import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { Forbidden, NotFound } from "../../errors";

// Input Schema
export const EventFilterMetricsRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/environments/{project_id}/event_filter/metrics/",
    }),
  );
export type EventFilterMetricsRetrieveInput =
  typeof EventFilterMetricsRetrieveInput.Type;

// Output Schema
export const EventFilterMetricsRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    labels: Schema.Array(Schema.String),
    series: Schema.Array(
      Schema.Struct({
        name: Schema.String,
        values: Schema.Array(Schema.Number),
      }),
    ),
  });
export type EventFilterMetricsRetrieveOutput =
  typeof EventFilterMetricsRetrieveOutput.Type;

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
export const eventFilterMetricsRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: EventFilterMetricsRetrieveInput,
    outputSchema: EventFilterMetricsRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
