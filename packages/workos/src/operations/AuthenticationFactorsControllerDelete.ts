import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const AuthenticationFactorsControllerDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(T.Http({ method: "DELETE", path: "/auth/factors/{id}" }));
export type AuthenticationFactorsControllerDeleteInput =
  typeof AuthenticationFactorsControllerDeleteInput.Type;

// Output Schema
export const AuthenticationFactorsControllerDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type AuthenticationFactorsControllerDeleteOutput =
  typeof AuthenticationFactorsControllerDeleteOutput.Type;

// The operation
/**
 * Delete Factor
 *
 * Permanently deletes an Authentication Factor. It cannot be undone.
 *
 * @param id - The unique ID of the Factor.
 */
export const AuthenticationFactorsControllerDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AuthenticationFactorsControllerDeleteInput,
    outputSchema: AuthenticationFactorsControllerDeleteOutput,
    errors: [NotFound] as const,
  }));
