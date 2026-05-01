import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const LogsAlertsDestinationsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    type: Schema.Literals(["slack", "webhook"]),
    slack_workspace_id: Schema.optional(Schema.Number),
    slack_channel_id: Schema.optional(Schema.String),
    slack_channel_name: Schema.optional(Schema.String),
    webhook_url: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/logs/alerts/{id}/destinations/",
    }),
  );
export type LogsAlertsDestinationsCreateInput =
  typeof LogsAlertsDestinationsCreateInput.Type;

// Output Schema
export const LogsAlertsDestinationsCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    hog_function_ids: Schema.Array(Schema.String),
  });
export type LogsAlertsDestinationsCreateOutput =
  typeof LogsAlertsDestinationsCreateOutput.Type;

// The operation
/**
 * Create a notification destination for this alert. One HogFunction is created per alert event kind (firing, resolved, ...) atomically.
 *
 * @param id - A UUID string identifying this logs alert configuration.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const logsAlertsDestinationsCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: LogsAlertsDestinationsCreateInput,
    outputSchema: LogsAlertsDestinationsCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
