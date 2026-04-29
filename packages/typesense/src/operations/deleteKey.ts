import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const DeleteKeyInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  keyId: Schema.Number.pipe(T.PathParam()),
}).pipe(T.Http({ method: "DELETE", path: "/keys/{keyId}" }));
export type DeleteKeyInput = typeof DeleteKeyInput.Type;

// Output Schema
export const DeleteKeyOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.Number,
});
export type DeleteKeyOutput = typeof DeleteKeyOutput.Type;

// The operation
/**
 * Delete an API key given its ID.
 *
 * @param keyId - The ID of the key to delete
 */
export const deleteKey = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteKeyInput,
  outputSchema: DeleteKeyOutput,
  errors: [BadRequest, NotFound] as const,
}));
