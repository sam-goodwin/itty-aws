import * as Schema from "effect/Schema";
import {
  DashboardDocumentSchema,
  DashboardResourceSchema,
} from "./_schemas.ts";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Conflict } from "../../errors.ts";

// Input Schema
export const CreateDashboardInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  dashboard: Schema.suspend(() => DashboardDocumentSchema),
  message: Schema.optional(Schema.String),
  overwrite: Schema.optional(Schema.Boolean),
  uid: Schema.optional(Schema.String),
  version: Schema.optional(Schema.Unknown),
}).pipe(T.Http({ method: "POST", path: "/v2/dashboards" }));
export type CreateDashboardInput = typeof CreateDashboardInput.Type;

// Output Schema
export const CreateDashboardOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  dashboard: Schema.suspend(() => DashboardResourceSchema),
  overwritten: Schema.optional(Schema.Boolean),
  status: Schema.Literals(["created", "updated"]),
});
export type CreateDashboardOutput = typeof CreateDashboardOutput.Type;

// The operation
/**
 * Create dashboard
 *
 * Create a dashboard from a dashboard document payload.
 */
export const createDashboard = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateDashboardInput,
  outputSchema: CreateDashboardOutput,
  errors: [BadRequest, Conflict] as const,
}));
