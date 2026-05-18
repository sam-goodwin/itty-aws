import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const DeleteThreadMessageInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(T.Http({ method: "DELETE", path: "/message/{id}" }));
export type DeleteThreadMessageInput = typeof DeleteThreadMessageInput.Type;

// Output Schema
export const DeleteThreadMessageOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteThreadMessageOutput = typeof DeleteThreadMessageOutput.Type;

// The operation
/**
 * Delete a thread message
 *
 * @param id - The ID of the message
 */
export const deleteThreadMessage = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteThreadMessageInput,
  outputSchema: DeleteThreadMessageOutput,
  errors: [BadRequest, NotFound] as const,
}));
