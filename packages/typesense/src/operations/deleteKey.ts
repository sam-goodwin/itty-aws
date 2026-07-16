import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export interface DeleteKeyInput {
  keyId: number;
}
export const DeleteKeyInput = /*@__PURE__*/ Schema.Struct({
  keyId: Schema.Number.pipe(T.PathParam()),
}).pipe(
  T.Http({ method: "DELETE", path: "/keys/{keyId}" }),
) as unknown as Schema.Codec<DeleteKeyInput>;

// Output Schema
export interface DeleteKeyOutput {
  id: number;
}
export const DeleteKeyOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.Number,
}) as unknown as Schema.Codec<DeleteKeyOutput>;

// The operation
/**
 * Delete an API key given its ID.
 *
 * @param keyId - The ID of the key to delete
 */
export const deleteKey = /*@__PURE__*/ API.make(() => ({
  inputSchema: DeleteKeyInput,
  outputSchema: DeleteKeyOutput,
  errors: [BadRequest, NotFound] as const,
}));
