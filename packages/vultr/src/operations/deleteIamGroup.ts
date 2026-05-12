import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const DeleteIamGroupInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "DELETE", path: "/v2/groups/{id}" }));
export type DeleteIamGroupInput = typeof DeleteIamGroupInput.Type;

// Output Schema
export const DeleteIamGroupOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteIamGroupOutput = typeof DeleteIamGroupOutput.Type;

// The operation
/**
 * Delete Group
 *
 * Delete a Group.
 *
 * @param id - The Group ID.
 */
export const deleteIamGroup = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteIamGroupInput,
  outputSchema: DeleteIamGroupOutput,
  errors: [Forbidden, NotFound] as const,
}));
