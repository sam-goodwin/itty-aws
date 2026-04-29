import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const AlertsDestroyInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
  project_id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({ method: "DELETE", path: "/api/projects/{project_id}/alerts/{id}/" }),
);
export type AlertsDestroyInput = typeof AlertsDestroyInput.Type;

// Output Schema
export const AlertsDestroyOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type AlertsDestroyOutput = typeof AlertsDestroyOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this alert configuration.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const alertsDestroy = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AlertsDestroyInput,
  outputSchema: AlertsDestroyOutput,
  errors: [Forbidden, NotFound] as const,
}));
