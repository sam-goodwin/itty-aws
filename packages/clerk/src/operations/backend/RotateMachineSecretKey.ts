import * as Schema from "effect/Schema";
import { API } from "../../backend-client.ts";
import * as T from "../../traits.ts";
import {
  BadRequest,
  Forbidden,
  NotFound,
  UnprocessableEntity,
} from "../../errors.ts";
import { SensitiveOutputString } from "../../sensitive.ts";

// Input Schema
export const RotateMachineSecretKeyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    machine_id: Schema.String.pipe(T.PathParam()),
    previous_token_ttl: Schema.Number,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/machines/{machine_id}/secret_key/rotate",
    }),
  );
export type RotateMachineSecretKeyInput =
  typeof RotateMachineSecretKeyInput.Type;

// Output Schema
export const RotateMachineSecretKeyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.Literals(["machine_secret_key"]),
    secret: SensitiveOutputString,
  });
export type RotateMachineSecretKeyOutput =
  typeof RotateMachineSecretKeyOutput.Type;

// The operation
/**
 * Rotate a machine's secret key
 *
 * Rotates the machine's secret key.
 * When the secret key is rotated, make sure to update it in your machine/application.
 * The previous secret key will remain valid for the duration specified by the previous_token_ttl parameter.
 *
 * @param machine_id - The ID of the machine to rotate the secret key for
 */
export const RotateMachineSecretKey = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RotateMachineSecretKeyInput,
    outputSchema: RotateMachineSecretKeyOutput,
    errors: [BadRequest, Forbidden, NotFound, UnprocessableEntity] as const,
  }),
);
