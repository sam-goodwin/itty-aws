import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const VPSGetMetricsV1Input = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  virtualMachineId: Schema.Number.pipe(T.PathParam()),
  date_from: Schema.String,
  date_to: Schema.String,
}).pipe(
  T.Http({
    method: "GET",
    path: "/api/vps/v1/virtual-machines/{virtualMachineId}/metrics",
  }),
);
export type VPSGetMetricsV1Input = typeof VPSGetMetricsV1Input.Type;

// Output Schema
export const VPSGetMetricsV1Output = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  cpu_usage: Schema.optional(Schema.Unknown),
  ram_usage: Schema.optional(Schema.Unknown),
  disk_space: Schema.optional(Schema.Unknown),
  outgoing_traffic: Schema.optional(Schema.Unknown),
  incoming_traffic: Schema.optional(Schema.Unknown),
  uptime: Schema.optional(Schema.Unknown),
});
export type VPSGetMetricsV1Output = typeof VPSGetMetricsV1Output.Type;

// The operation
/**
 * Get metrics
 *
 * Retrieve historical metrics for a specified virtual machine.
 * It includes the following metrics:
 * - CPU usage
 * - Memory usage
 * - Disk usage
 * - Network usage
 * - Uptime
 * Use this endpoint to monitor VPS performance and resource utilization over time.
 *
 * @param virtualMachineId - Virtual Machine ID
 */
export const VPSGetMetricsV1 = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VPSGetMetricsV1Input,
  outputSchema: VPSGetMetricsV1Output,
  errors: [UnprocessableEntity] as const,
}));
