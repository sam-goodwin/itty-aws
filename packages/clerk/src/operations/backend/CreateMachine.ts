import * as Schema from "effect/Schema";
import { API } from "../../backend-client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, UnprocessableEntity } from "../../errors.ts";
import { SensitiveOutputString } from "../../sensitive.ts";

// Input Schema
export const CreateMachineInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.String,
  scoped_machines: Schema.optional(Schema.Array(Schema.String)),
  default_token_ttl: Schema.optional(Schema.Number),
}).pipe(T.Http({ method: "POST", path: "/machines" }));
export type CreateMachineInput = typeof CreateMachineInput.Type;

// Output Schema
export const CreateMachineOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  secret_key: SensitiveOutputString,
});
export type CreateMachineOutput = typeof CreateMachineOutput.Type;

// The operation
/**
 * Create a machine
 *
 * Creates a new machine.
 */
export const CreateMachine = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateMachineInput,
  outputSchema: CreateMachineOutput,
  errors: [BadRequest, Forbidden, UnprocessableEntity] as const,
}));
