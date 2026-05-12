import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const GetBareMetalVncInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  baremetalId: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/bare-metals/{baremetalId}/vnc" }));
export type GetBareMetalVncInput = typeof GetBareMetalVncInput.Type;

// Output Schema
export const GetBareMetalVncOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  vnc: Schema.optional(
    Schema.Struct({
      url: Schema.optional(Schema.String),
    }),
  ),
});
export type GetBareMetalVncOutput = typeof GetBareMetalVncOutput.Type;

// The operation
/**
 * Get VNC URL for a Bare Metal
 *
 * Get the VNC URL for a Bare Metal
 *
 * @param baremetalId - The [Bare Metal id](#operation/list-baremetals).
 */
export const getBareMetalVnc = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetBareMetalVncInput,
  outputSchema: GetBareMetalVncOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
