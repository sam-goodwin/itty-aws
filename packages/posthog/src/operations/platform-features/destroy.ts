import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { Forbidden, NotFound } from "../../errors";

// Input Schema
export const DestroyInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "DELETE", path: "/api/organizations/{id}/" }));
export type DestroyInput = typeof DestroyInput.Type;

// Output Schema
export const DestroyOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DestroyOutput = typeof DestroyOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this organization.
 */
export const destroy = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DestroyInput,
  outputSchema: DestroyOutput,
  errors: [Forbidden, NotFound] as const,
}));
