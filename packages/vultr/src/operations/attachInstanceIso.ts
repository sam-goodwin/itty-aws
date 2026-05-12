import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const AttachInstanceIsoInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    instanceId: Schema.String.pipe(T.PathParam()),
    iso_id: Schema.optional(Schema.String),
  },
).pipe(T.Http({ method: "POST", path: "/instances/{instanceId}/iso/attach" }));
export type AttachInstanceIsoInput = typeof AttachInstanceIsoInput.Type;

// Output Schema
export const AttachInstanceIsoOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type AttachInstanceIsoOutput = typeof AttachInstanceIsoOutput.Type;

// The operation
/**
 * Attach ISO to Instance
 *
 * Attach an ISO to an Instance.
 */
export const attachInstanceIso = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AttachInstanceIsoInput,
  outputSchema: AttachInstanceIsoOutput,
  errors: [BadRequest, NotFound] as const,
}));
