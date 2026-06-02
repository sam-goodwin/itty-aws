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
export const UpdateMachineInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  machine_id: Schema.String.pipe(T.PathParam()),
  name: Schema.optional(Schema.String),
  default_token_ttl: Schema.optional(Schema.Number),
}).pipe(T.Http({ method: "PATCH", path: "/machines/{machine_id}" }));
export type UpdateMachineInput = typeof UpdateMachineInput.Type;

// Output Schema
export const UpdateMachineOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  object: Schema.Literals(["machine"]),
  id: Schema.String,
  name: Schema.String,
  instance_id: Schema.String,
  created_at: Schema.Number,
  updated_at: Schema.Number,
  default_token_ttl: Schema.optional(Schema.Number),
  scoped_machines: Schema.Array(
    Schema.Struct({
      object: Schema.Literals(["machine"]),
      id: Schema.String,
      name: Schema.String,
      instance_id: Schema.String,
      created_at: Schema.Number,
      updated_at: Schema.Number,
      default_token_ttl: Schema.optional(Schema.Number),
    }),
  ),
});
export type UpdateMachineOutput = typeof UpdateMachineOutput.Type;

// The operation
/**
 * Update a machine
 *
 * Updates an existing machine.
 * Only the provided fields will be updated.
 *
 * @param machine_id - The ID of the machine to update
 */
export const UpdateMachine = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpdateMachineInput,
  outputSchema: UpdateMachineOutput,
  errors: [BadRequest, Forbidden, NotFound, UnprocessableEntity] as const,
}));
