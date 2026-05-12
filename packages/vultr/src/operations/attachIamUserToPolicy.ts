import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const AttachIamUserToPolicyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    policy_id: Schema.String.pipe(T.PathParam()),
    user_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v2/policies/{policy_id}/users/{user_id}",
    }),
  );
export type AttachIamUserToPolicyInput = typeof AttachIamUserToPolicyInput.Type;

// Output Schema
export const AttachIamUserToPolicyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    policy_user_relationship: Schema.optional(
      Schema.Struct({
        user_id: Schema.optional(Schema.String),
        policy_id: Schema.optional(Schema.String),
        policy_name: Schema.optional(Schema.String),
        policy_description: Schema.optional(Schema.String),
        date_assigned: Schema.optional(Schema.String),
        assigned_by: Schema.optional(Schema.String),
      }),
    ),
  });
export type AttachIamUserToPolicyOutput =
  typeof AttachIamUserToPolicyOutput.Type;

// The operation
/**
 * Attach User to Policy
 *
 * Attach a User to a Policy.
 *
 * @param policy_id - The Policy ID.
 * @param user_id - The User ID.
 */
export const attachIamUserToPolicy = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AttachIamUserToPolicyInput,
    outputSchema: AttachIamUserToPolicyOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
