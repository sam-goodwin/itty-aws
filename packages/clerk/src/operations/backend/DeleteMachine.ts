import * as Schema from "effect/Schema";
import { API } from "../../backend-client.ts";
import * as T from "../../traits.ts";
import {
  BadRequest,
  Forbidden,
  NotFound,
  UnprocessableEntity,
} from "../../errors.ts";

// Input Schema
export const DeleteMachineInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  machine_id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "DELETE", path: "/machines/{machine_id}" }));
export type DeleteMachineInput = typeof DeleteMachineInput.Type;

// Output Schema
export const DeleteMachineOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  object: Schema.Literals(["machine"]),
  id: Schema.String,
  deleted: Schema.Literals(["true"]),
});
export type DeleteMachineOutput = typeof DeleteMachineOutput.Type;

// The operation
/**
 * Delete a machine
 *
 * Deletes a machine.
 *
 * @param machine_id - The ID of the machine to delete
 */
export const DeleteMachine = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteMachineInput,
  outputSchema: DeleteMachineOutput,
  errors: [BadRequest, Forbidden, NotFound, UnprocessableEntity] as const,
}));
