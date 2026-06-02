import * as Schema from "effect/Schema";
import { API } from "../../../backend-client.ts";
import * as T from "../../../traits.ts";
import { PaymentRequired, Forbidden, NotFound } from "../../../errors.ts";

// Input Schema
export const DeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  enterprise_connection_id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/enterprise_connections/{enterprise_connection_id}",
  }),
);
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
 * Delete an enterprise connection
 *
 * Deletes the enterprise connection whose ID matches the provided `enterprise_connection_id` in the path.
 *
 * @param enterprise_connection_id - The ID of the enterprise connection to delete
 */
const delete_ = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteInput,
  outputSchema: DeleteOutput,
  errors: [PaymentRequired, Forbidden, NotFound] as const,
}));
export { delete_ as delete };
