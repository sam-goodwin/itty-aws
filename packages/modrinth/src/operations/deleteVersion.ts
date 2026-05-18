import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const DeleteVersionInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "DELETE", path: "/version/{id}" }));
export type DeleteVersionInput = typeof DeleteVersionInput.Type;

// Output Schema
export const DeleteVersionOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteVersionOutput = typeof DeleteVersionOutput.Type;

// The operation
/**
 * Delete a version
 *
 * @param id - The ID of the version
 */
export const deleteVersion = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteVersionInput,
  outputSchema: DeleteVersionOutput,
  errors: [BadRequest, NotFound] as const,
}));
