import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const DeleteBroadcastInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "DELETE", path: "/broadcasts/{id}" }));
export type DeleteBroadcastInput = typeof DeleteBroadcastInput.Type;

// Output Schema
export const DeleteBroadcastOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  object: Schema.optional(Schema.String),
  deleted: Schema.optional(Schema.Boolean),
});
export type DeleteBroadcastOutput = typeof DeleteBroadcastOutput.Type;

// The operation
/**
 * Remove an existing broadcast that is in the draft status
 *
 * @param id - The Broadcast ID.
 */
export const deleteBroadcast = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteBroadcastInput,
  outputSchema: DeleteBroadcastOutput,
  errors: [NotFound] as const,
}));
