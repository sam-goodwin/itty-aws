import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { Forbidden, NotFound } from "../../errors";

// Input Schema
export const EventDefinitionsMetricsRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/event_definitions/{id}/metrics/",
    }),
  );
export type EventDefinitionsMetricsRetrieveInput =
  typeof EventDefinitionsMetricsRetrieveInput.Type;

// Output Schema
export const EventDefinitionsMetricsRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type EventDefinitionsMetricsRetrieveOutput =
  typeof EventDefinitionsMetricsRetrieveOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this event definition.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const eventDefinitionsMetricsRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: EventDefinitionsMetricsRetrieveInput,
    outputSchema: EventDefinitionsMetricsRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }));
