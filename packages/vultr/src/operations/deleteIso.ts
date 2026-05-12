import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const DeleteIsoInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  isoId: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "DELETE", path: "/iso/{isoId}" }));
export type DeleteIsoInput = typeof DeleteIsoInput.Type;

// Output Schema
export const DeleteIsoOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteIsoOutput = typeof DeleteIsoOutput.Type;

// The operation
/**
 * Delete ISO
 *
 * Delete an ISO.
 *
 * @param isoId - The [ISO id](#operation/list-isos).
 */
export const deleteIso = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteIsoInput,
  outputSchema: DeleteIsoOutput,
  errors: [BadRequest, NotFound] as const,
}));
