import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const VPSGetScanMetricsV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    virtualMachineId: Schema.Number.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/vps/v1/virtual-machines/{virtualMachineId}/monarx",
    }),
  );
export type VPSGetScanMetricsV1Input = typeof VPSGetScanMetricsV1Input.Type;

// Output Schema
export const VPSGetScanMetricsV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    records: Schema.optional(Schema.Number),
    malicious: Schema.optional(Schema.Number),
    compromised: Schema.optional(Schema.Number),
    scanned_files: Schema.optional(Schema.Number),
    scan_started_at: Schema.optional(Schema.String),
    scan_ended_at: Schema.optional(Schema.NullOr(Schema.String)),
  });
export type VPSGetScanMetricsV1Output = typeof VPSGetScanMetricsV1Output.Type;

// The operation
/**
 * Get scan metrics
 *
 * Retrieve scan metrics for the [Monarx](https://www.monarx.com/) malware scanner
 * installed on a specified virtual machine.
 * The scan metrics provide detailed information about malware scans performed
 * by Monarx, including number of scans, detected threats, and other relevant
 * statistics. This information is useful for monitoring security status of the
 * virtual machine and assessing effectiveness of the malware scanner.
 * Use this endpoint to monitor VPS security scan results and threat detection.
 *
 * @param virtualMachineId - Virtual Machine ID
 */
export const VPSGetScanMetricsV1 = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VPSGetScanMetricsV1Input,
  outputSchema: VPSGetScanMetricsV1Output,
  errors: [UnprocessableEntity] as const,
}));
