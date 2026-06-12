import * as Schema from "effect/Schema";
import {
  DashboardDocumentSchema,
  DashboardResourceSchema,
} from "./_schemas.ts";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Conflict } from "../../errors.ts";

// Input Schema
export const UpdateDashboardInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  uid: Schema.String.pipe(T.PathParam()),
  dashboard: Schema.suspend(() => DashboardDocumentSchema),
  message: Schema.optional(Schema.String),
  overwrite: Schema.optional(Schema.Boolean),
  version: Schema.optional(Schema.Unknown),
}).pipe(T.Http({ method: "PUT", path: "/v2/dashboards/uid/{uid}" }));
export type UpdateDashboardInput = typeof UpdateDashboardInput.Type;

// Output Schema
export const UpdateDashboardOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  dashboard: Schema.suspend(() => DashboardResourceSchema),
  overwritten: Schema.optional(Schema.Boolean),
  status: Schema.Literals(["created", "updated"]),
});
export type UpdateDashboardOutput = typeof UpdateDashboardOutput.Type;

// The operation
/**
 * Update dashboard
 *
 * Update a dashboard by UID.
 */
export const updateDashboard = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpdateDashboardInput,
  outputSchema: UpdateDashboardOutput,
  errors: [BadRequest, Conflict] as const,
}));
