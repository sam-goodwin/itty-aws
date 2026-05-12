import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const ReinstallBaremetalInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    baremetalId: Schema.String.pipe(T.PathParam()),
    hostname: Schema.optional(Schema.String),
  }).pipe(
    T.Http({ method: "POST", path: "/bare-metals/{baremetalId}/reinstall" }),
  );
export type ReinstallBaremetalInput = typeof ReinstallBaremetalInput.Type;

// Output Schema
export const ReinstallBaremetalOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ReinstallBaremetalOutput = typeof ReinstallBaremetalOutput.Type;

// The operation
/**
 * Reinstall Bare Metal
 *
 * Reinstall the Bare Metal instance using an optional `hostname`.
 * **Note:** This action may take some time to complete.
 *
 * @param baremetalId - The [Bare Metal id](#operation/list-baremetals).
 */
export const reinstallBaremetal = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ReinstallBaremetalInput,
  outputSchema: ReinstallBaremetalOutput,
  errors: [BadRequest, NotFound] as const,
}));
