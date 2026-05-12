import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const RemoveIamPolicyFromRoleInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    role_id: Schema.String.pipe(T.PathParam()),
    policy_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/v2/roles/{role_id}/policies/{policy_id}",
    }),
  );
export type RemoveIamPolicyFromRoleInput =
  typeof RemoveIamPolicyFromRoleInput.Type;

// Output Schema
export const RemoveIamPolicyFromRoleOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type RemoveIamPolicyFromRoleOutput =
  typeof RemoveIamPolicyFromRoleOutput.Type;

// The operation
/**
 * Remove Policy from Role
 *
 * Remove a Policy from a Role.
 *
 * @param role_id - The Role ID.
 * @param policy_id - The Policy ID.
 */
export const removeIamPolicyFromRole = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RemoveIamPolicyFromRoleInput,
    outputSchema: RemoveIamPolicyFromRoleOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
