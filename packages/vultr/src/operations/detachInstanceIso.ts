import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const DetachInstanceIsoInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    instanceId: Schema.String.pipe(T.PathParam()),
  },
).pipe(T.Http({ method: "POST", path: "/instances/{instanceId}/iso/detach" }));
export type DetachInstanceIsoInput = typeof DetachInstanceIsoInput.Type;

// Output Schema
export const DetachInstanceIsoOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DetachInstanceIsoOutput = typeof DetachInstanceIsoOutput.Type;

// The operation
/**
 * Detach ISO from instance
 *
 * Detach the ISO from an Instance.
 *
 * @param instanceId - The [Instance ID](#operation/list-instances).
 */
export const detachInstanceIso = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DetachInstanceIsoInput,
  outputSchema: DetachInstanceIsoOutput,
  errors: [BadRequest, NotFound] as const,
}));
