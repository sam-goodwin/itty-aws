import * as Schema from "effect/Schema";
import { API } from "../../backend-client.ts";
import * as T from "../../traits.ts";
import {
  BadRequest,
  Forbidden,
  NotFound,
  Conflict,
  UnprocessableEntity,
} from "../../errors.ts";

// Input Schema
export const CreateMachineScopeInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    machine_id: Schema.String.pipe(T.PathParam()),
    to_machine_id: Schema.String,
  }).pipe(T.Http({ method: "POST", path: "/machines/{machine_id}/scopes" }));
export type CreateMachineScopeInput = typeof CreateMachineScopeInput.Type;

// Output Schema
export const CreateMachineScopeOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.Literals(["machine_scope"]),
    from_machine_id: Schema.String,
    to_machine_id: Schema.String,
    created_at: Schema.Number,
  });
export type CreateMachineScopeOutput = typeof CreateMachineScopeOutput.Type;

// The operation
/**
 * Create a machine scope
 *
 * Creates a new machine scope, allowing the specified machine to access another machine.
 * Maximum of 150 scopes per machine.
 *
 * @param machine_id - The ID of the machine that will have access to another machine
 */
export const CreateMachineScope = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateMachineScopeInput,
  outputSchema: CreateMachineScopeOutput,
  errors: [
    BadRequest,
    Forbidden,
    NotFound,
    Conflict,
    UnprocessableEntity,
  ] as const,
}));
