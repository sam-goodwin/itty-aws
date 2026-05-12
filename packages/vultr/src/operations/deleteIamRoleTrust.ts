import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const DeleteIamRoleTrustInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(T.Http({ method: "DELETE", path: "/v2/role-trusts/{id}" }));
export type DeleteIamRoleTrustInput = typeof DeleteIamRoleTrustInput.Type;

// Output Schema
export const DeleteIamRoleTrustOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteIamRoleTrustOutput = typeof DeleteIamRoleTrustOutput.Type;

// The operation
/**
 * Delete Role Trust
 *
 * Delete a Role Trust.
 *
 * @param id - The Role Trust ID.
 */
export const deleteIamRoleTrust = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteIamRoleTrustInput,
  outputSchema: DeleteIamRoleTrustOutput,
  errors: [Forbidden, NotFound] as const,
}));
