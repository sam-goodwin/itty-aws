import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { NotFound } from "../../errors.ts";

// Input Schema
export const DeleteDashboardInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  uid: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "DELETE", path: "/v2/dashboards/uid/{uid}" }));
export type DeleteDashboardInput = typeof DeleteDashboardInput.Type;

// Output Schema
export const DeleteDashboardOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteDashboardOutput = typeof DeleteDashboardOutput.Type;

// The operation
/**
 * Delete dashboard
 *
 * Delete a dashboard by UID.
 */
export const deleteDashboard = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteDashboardInput,
  outputSchema: DeleteDashboardOutput,
  errors: [NotFound] as const,
}));
