import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const LogsAlertsDestinationsDeleteCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    hog_function_ids: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/logs/alerts/{id}/destinations/delete/",
    }),
  );
export type LogsAlertsDestinationsDeleteCreateInput =
  typeof LogsAlertsDestinationsDeleteCreateInput.Type;

// Output Schema
export const LogsAlertsDestinationsDeleteCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type LogsAlertsDestinationsDeleteCreateOutput =
  typeof LogsAlertsDestinationsDeleteCreateOutput.Type;

// The operation
/**
 * Delete a notification destination by deleting its HogFunction group atomically.
 *
 * @param id - A UUID string identifying this logs alert configuration.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const logsAlertsDestinationsDeleteCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: LogsAlertsDestinationsDeleteCreateInput,
    outputSchema: LogsAlertsDestinationsDeleteCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
