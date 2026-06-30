import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";

// Input Schema
export const V1UpdateJitAccessConfigInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ref: Schema.String.pipe(T.PathParam()),
    state: Schema.Literals(["enabled", "disabled"]),
  }).pipe(T.Http({ method: "PUT", path: "/v1/projects/{ref}/jit-access" }));
export type V1UpdateJitAccessConfigInput =
  typeof V1UpdateJitAccessConfigInput.Type;

// Output Schema
export const V1UpdateJitAccessConfigOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export type V1UpdateJitAccessConfigOutput =
  typeof V1UpdateJitAccessConfigOutput.Type;

// The operation
/**
 * [Beta] Update project's temporary access configuration.
 *
 * @param ref - Project ref
 */
export const v1UpdateJitAccessConfig = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: V1UpdateJitAccessConfigInput,
    outputSchema: V1UpdateJitAccessConfigOutput,
    errors: [BadRequest, Forbidden] as const,
  }),
);
