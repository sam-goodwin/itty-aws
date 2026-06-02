import * as Schema from "effect/Schema";
import { API } from "../../../backend-client.ts";
import * as T from "../../../traits.ts";
import { NotFound } from "../../../errors.ts";

// Input Schema
export const DeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "DELETE", path: "/redirect_urls/{id}" }));
export type DeleteInput = typeof DeleteInput.Type;

// Output Schema
export const DeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  object: Schema.String,
  id: Schema.optional(Schema.String),
  slug: Schema.optional(Schema.String),
  deleted: Schema.Boolean,
  external_id: Schema.optional(Schema.String),
});
export type DeleteOutput = typeof DeleteOutput.Type;

// The operation
/**
 * Delete a redirect URL
 *
 * Remove the selected redirect URL from the whitelist of the instance
 *
 * @param id - The ID of the redirect URL
 */
const delete_ = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteInput,
  outputSchema: DeleteOutput,
  errors: [NotFound] as const,
}));
export { delete_ as delete };
