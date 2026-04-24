import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { NotFound } from "../../errors";

// Input Schema
export const DeleteMonitorInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "DELETE", path: "/v2/monitors/{id}" }));
export type DeleteMonitorInput = typeof DeleteMonitorInput.Type;

// Output Schema
export const DeleteMonitorOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteMonitorOutput = typeof DeleteMonitorOutput.Type;

// The operation
/**
 * Delete monitor
 */
export const deleteMonitor = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteMonitorInput,
  outputSchema: DeleteMonitorOutput,
  errors: [NotFound] as const,
}));
