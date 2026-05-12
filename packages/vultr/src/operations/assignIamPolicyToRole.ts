import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const AssignIamPolicyToRoleInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    role_id: Schema.String.pipe(T.PathParam()),
    policy_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v2/roles/{role_id}/policies/{policy_id}",
    }),
  );
export type AssignIamPolicyToRoleInput = typeof AssignIamPolicyToRoleInput.Type;

// Output Schema
export const AssignIamPolicyToRoleOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    role_policy_relationship: Schema.optional(
      Schema.Struct({
        policy_id: Schema.optional(Schema.String),
        policy_name: Schema.optional(Schema.String),
        role_id: Schema.optional(Schema.String),
        role_name: Schema.optional(Schema.String),
        role_description: Schema.optional(Schema.String),
        role_type: Schema.optional(Schema.String),
        date_assigned: Schema.optional(Schema.String),
        assigned_by: Schema.optional(Schema.String),
      }),
    ),
  });
export type AssignIamPolicyToRoleOutput =
  typeof AssignIamPolicyToRoleOutput.Type;

// The operation
/**
 * Assign Policy to Role
 *
 * Assign a Policy to a Role.
 *
 * @param role_id - The Role ID.
 * @param policy_id - The Policy ID.
 */
export const assignIamPolicyToRole = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AssignIamPolicyToRoleInput,
    outputSchema: AssignIamPolicyToRoleOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
