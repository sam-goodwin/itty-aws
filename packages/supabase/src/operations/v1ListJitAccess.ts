import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";

// Input Schema
export const V1ListJitAccessInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  ref: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({ method: "GET", path: "/v1/projects/{ref}/database/jit/list" }),
);
export type V1ListJitAccessInput = typeof V1ListJitAccessInput.Type;

// Output Schema
export const V1ListJitAccessOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  items: Schema.Array(Schema.Unknown),
});
export type V1ListJitAccessOutput = typeof V1ListJitAccessOutput.Type;

// The operation
/**
 * List all user-id to role mappings for JIT access
 *
 * Mappings of roles a user can assume in the project database
 *
 * @param ref - Project ref
 */
export const v1ListJitAccess = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: V1ListJitAccessInput,
  outputSchema: V1ListJitAccessOutput,
  errors: [BadRequest, Forbidden] as const,
}));
