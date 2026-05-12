import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const IsoEditInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  isoId: Schema.String.pipe(T.PathParam()),
  description: Schema.String,
}).pipe(T.Http({ method: "PUT", path: "/iso/{isoId}" }));
export type IsoEditInput = typeof IsoEditInput.Type;

// Output Schema
export const IsoEditOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type IsoEditOutput = typeof IsoEditOutput.Type;

// The operation
/**
 * Update ISO
 *
 * Update the description for an ISO.
 *
 * @param isoId - The [ISO id](#operation/list-isos).
 */
export const isoEdit = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: IsoEditInput,
  outputSchema: IsoEditOutput,
  errors: [BadRequest, NotFound] as const,
}));
