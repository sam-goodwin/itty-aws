import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const DetachIamGroupFromPolicyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    policy_id: Schema.String.pipe(T.PathParam()),
    group_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/v2/policies/{policy_id}/groups/{group_id}",
    }),
  );
export type DetachIamGroupFromPolicyInput =
  typeof DetachIamGroupFromPolicyInput.Type;

// Output Schema
export const DetachIamGroupFromPolicyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DetachIamGroupFromPolicyOutput =
  typeof DetachIamGroupFromPolicyOutput.Type;

// The operation
/**
 * Detach Group from Policy
 *
 * Detach a Group from a Policy.
 *
 * @param policy_id - The Policy ID.
 * @param group_id - The Group ID.
 */
export const detachIamGroupFromPolicy = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DetachIamGroupFromPolicyInput,
    outputSchema: DetachIamGroupFromPolicyOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
