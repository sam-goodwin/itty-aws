import * as Schema from "effect/Schema";
import { DashboardDocumentSchema } from "./_schemas.ts";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { NotFound } from "../../errors.ts";

// Input Schema
export const GetDashboardInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  uid: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/v2/dashboards/uid/{uid}" }));
export type GetDashboardInput = typeof GetDashboardInput.Type;

// Output Schema
export const GetDashboardOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  createdAt: Schema.String,
  createdBy: Schema.String,
  dashboard: Schema.suspend(() => DashboardDocumentSchema),
  id: Schema.String,
  uid: Schema.String,
  updatedAt: Schema.String,
  updatedBy: Schema.String,
  version: Schema.Unknown,
});
export type GetDashboardOutput = typeof GetDashboardOutput.Type;

// The operation
/**
 * Get dashboard
 *
 * Get a dashboard by UID.
 */
export const getDashboard = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetDashboardInput,
  outputSchema: GetDashboardOutput,
  errors: [NotFound] as const,
}));
