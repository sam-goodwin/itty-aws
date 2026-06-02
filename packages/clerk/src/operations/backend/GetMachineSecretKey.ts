import * as Schema from "effect/Schema";
import { API } from "../../backend-client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";
import { SensitiveOutputString } from "../../sensitive.ts";

// Input Schema
export const GetMachineSecretKeyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    machine_id: Schema.String.pipe(T.PathParam()),
  }).pipe(T.Http({ method: "GET", path: "/machines/{machine_id}/secret_key" }));
export type GetMachineSecretKeyInput = typeof GetMachineSecretKeyInput.Type;

// Output Schema
export const GetMachineSecretKeyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.Literals(["machine_secret_key"]),
    secret: SensitiveOutputString,
  });
export type GetMachineSecretKeyOutput = typeof GetMachineSecretKeyOutput.Type;

// The operation
/**
 * Retrieve a machine secret key
 *
 * Returns the secret key for a machine.
 *
 * @param machine_id - The ID of the machine to retrieve the secret key for
 */
export const GetMachineSecretKey = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetMachineSecretKeyInput,
  outputSchema: GetMachineSecretKeyOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
