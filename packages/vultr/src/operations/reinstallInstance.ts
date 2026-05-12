import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const ReinstallInstanceInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    instanceId: Schema.String.pipe(T.PathParam()),
    hostname: Schema.optional(Schema.String),
  },
).pipe(T.Http({ method: "POST", path: "/instances/{instanceId}/reinstall" }));
export type ReinstallInstanceInput = typeof ReinstallInstanceInput.Type;

// Output Schema
export const ReinstallInstanceOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ReinstallInstanceOutput = typeof ReinstallInstanceOutput.Type;

// The operation
/**
 * Reinstall Instance
 *
 * Reinstall an Instance using an optional `hostname`.
 * **Note:** This action may take a few extra seconds to complete.
 *
 * @param instanceId - The [Instance ID](#operation/list-instances).
 */
export const reinstallInstance = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ReinstallInstanceInput,
  outputSchema: ReinstallInstanceOutput,
  errors: [BadRequest, NotFound] as const,
}));
