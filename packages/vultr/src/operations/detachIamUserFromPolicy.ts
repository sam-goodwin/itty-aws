import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const DetachIamUserFromPolicyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    policy_id: Schema.String.pipe(T.PathParam()),
    user_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/v2/policies/{policy_id}/users/{user_id}",
    }),
  );
export type DetachIamUserFromPolicyInput =
  typeof DetachIamUserFromPolicyInput.Type;

// Output Schema
export const DetachIamUserFromPolicyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DetachIamUserFromPolicyOutput =
  typeof DetachIamUserFromPolicyOutput.Type;

// The operation
/**
 * Detach User from Policy
 *
 * Detach a User from a Policy.
 *
 * @param policy_id - The Policy ID.
 * @param user_id - The User ID.
 */
export const detachIamUserFromPolicy = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DetachIamUserFromPolicyInput,
    outputSchema: DetachIamUserFromPolicyOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
