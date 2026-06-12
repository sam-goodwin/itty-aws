import * as Schema from "effect/Schema";
import { DashboardResourceSchema } from "./_schemas.ts";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const ListDashboardsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  limit: Schema.optional(Schema.Number),
  offset: Schema.optional(Schema.Number),
}).pipe(T.Http({ method: "GET", path: "/v2/dashboards" }));
export type ListDashboardsInput = typeof ListDashboardsInput.Type;

// Output Schema
export const ListDashboardsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
  Schema.suspend(() => DashboardResourceSchema),
);
export type ListDashboardsOutput = typeof ListDashboardsOutput.Type;

// The operation
/**
 * List dashboards
 *
 * List dashboards visible to the caller.
 */
export const listDashboards = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListDashboardsInput,
  outputSchema: ListDashboardsOutput,
}));
