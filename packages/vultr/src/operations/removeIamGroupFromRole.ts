import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const RemoveIamGroupFromRoleInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    role_id: Schema.String.pipe(T.PathParam()),
    group_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "DELETE", path: "/v2/roles/{role_id}/groups/{group_id}" }),
  );
export type RemoveIamGroupFromRoleInput =
  typeof RemoveIamGroupFromRoleInput.Type;

// Output Schema
export const RemoveIamGroupFromRoleOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type RemoveIamGroupFromRoleOutput =
  typeof RemoveIamGroupFromRoleOutput.Type;

// The operation
/**
 * Remove Group from Role
 *
 * Remove a Group from a Role.
 *
 * @param role_id - The Role ID.
 * @param group_id - The Group ID.
 */
export const removeIamGroupFromRole = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RemoveIamGroupFromRoleInput,
    outputSchema: RemoveIamGroupFromRoleOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
