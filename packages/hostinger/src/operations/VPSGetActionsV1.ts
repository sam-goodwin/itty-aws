import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const VPSGetActionsV1Input = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  virtualMachineId: Schema.Number.pipe(T.PathParam()),
  page: Schema.optional(Schema.Number),
}).pipe(
  T.Http({
    method: "GET",
    path: "/api/vps/v1/virtual-machines/{virtualMachineId}/actions",
  }),
);
export type VPSGetActionsV1Input = typeof VPSGetActionsV1Input.Type;

// Output Schema
export const VPSGetActionsV1Output = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  data: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.Number),
        name: Schema.optional(Schema.String),
        state: Schema.optional(Schema.String),
        created_at: Schema.optional(Schema.String),
        updated_at: Schema.optional(Schema.String),
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
export type VPSGetActionsV1Output = typeof VPSGetActionsV1Output.Type;

// The operation
/**
 * Get actions
 *
 * Retrieve actions performed on a specified virtual machine.
 * Actions are operations or events that have been executed on the virtual
 * machine, such as starting, stopping, or modifying the machine. This endpoint
 * allows you to view the history of these actions, providing details about
 * each action, such as the action name, timestamp, and status.
 * Use this endpoint to view VPS operation history and troubleshoot issues.
 *
 * @param virtualMachineId - Virtual Machine ID
 * @param page - Page number
 */
export const VPSGetActionsV1 = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VPSGetActionsV1Input,
  outputSchema: VPSGetActionsV1Output,
}));
