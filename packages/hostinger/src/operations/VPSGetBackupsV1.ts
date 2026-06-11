import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const VPSGetBackupsV1Input = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  virtualMachineId: Schema.Number.pipe(T.PathParam()),
  page: Schema.optional(Schema.Number),
}).pipe(
  T.Http({
    method: "GET",
    path: "/api/vps/v1/virtual-machines/{virtualMachineId}/backups",
  }),
);
export type VPSGetBackupsV1Input = typeof VPSGetBackupsV1Input.Type;

// Output Schema
export const VPSGetBackupsV1Output = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  data: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.Number),
        size: Schema.optional(Schema.Number),
        restore_time: Schema.optional(Schema.Number),
        location: Schema.optional(Schema.String),
        created_at: Schema.optional(Schema.String),
      }),
    ),
  ),
  meta: Schema.optional(
    Schema.Struct({
      current_page: Schema.optional(Schema.Number),
      per_page: Schema.optional(Schema.Number),
      total: Schema.optional(Schema.Number),
    }),
  ),
});
export type VPSGetBackupsV1Output = typeof VPSGetBackupsV1Output.Type;

// The operation
/**
 * Get backups
 *
 * Retrieve backups for a specified virtual machine.
 * Use this endpoint to view available backup points for VPS data recovery.
 *
 * @param virtualMachineId - Virtual Machine ID
 * @param page - Page number
 */
export const VPSGetBackupsV1 = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VPSGetBackupsV1Input,
  outputSchema: VPSGetBackupsV1Output,
}));
