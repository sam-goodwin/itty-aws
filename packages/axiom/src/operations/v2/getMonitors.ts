import * as Schema from "effect/Schema";
import { MonitorWithIdSchema } from "./_schemas.ts";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const GetMonitorsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(T.Http({ method: "GET", path: "/v2/monitors" }));
export type GetMonitorsInput = typeof GetMonitorsInput.Type;

// Output Schema
export const GetMonitorsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
  Schema.suspend(() => MonitorWithIdSchema),
);
export type GetMonitorsOutput = typeof GetMonitorsOutput.Type;

// The operation
/**
 * Lists all configured monitors. Returns an array of monitor configurations including their IDs and current status.
 */
export const getMonitors = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetMonitorsInput,
  outputSchema: GetMonitorsOutput,
}));
