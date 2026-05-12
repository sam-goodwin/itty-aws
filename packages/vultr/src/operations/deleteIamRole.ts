import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const DeleteIamRoleInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "DELETE", path: "/v2/roles/{id}" }));
export type DeleteIamRoleInput = typeof DeleteIamRoleInput.Type;

// Output Schema
export const DeleteIamRoleOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteIamRoleOutput = typeof DeleteIamRoleOutput.Type;

// The operation
/**
 * Delete Role
 *
 * Delete a Role.
 *
 * @param id - The Role ID.
 */
export const deleteIamRole = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteIamRoleInput,
  outputSchema: DeleteIamRoleOutput,
  errors: [Forbidden, NotFound] as const,
}));
