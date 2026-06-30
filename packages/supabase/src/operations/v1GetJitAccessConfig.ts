import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";

// Input Schema
export const V1GetJitAccessConfigInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ref: Schema.String.pipe(T.PathParam()),
  }).pipe(T.Http({ method: "GET", path: "/v1/projects/{ref}/jit-access" }));
export type V1GetJitAccessConfigInput = typeof V1GetJitAccessConfigInput.Type;

// Output Schema
export const V1GetJitAccessConfigOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export type V1GetJitAccessConfigOutput = typeof V1GetJitAccessConfigOutput.Type;

// The operation
/**
 * [Beta] Get project's temporary access configuration.
 *
 * @param ref - Project ref
 */
export const v1GetJitAccessConfig = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: V1GetJitAccessConfigInput,
    outputSchema: V1GetJitAccessConfigOutput,
    errors: [BadRequest, Forbidden] as const,
  }),
);
