import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const AttachIamGroupToPolicyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    policy_id: Schema.String.pipe(T.PathParam()),
    group_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v2/policies/{policy_id}/groups/{group_id}",
    }),
  );
export type AttachIamGroupToPolicyInput =
  typeof AttachIamGroupToPolicyInput.Type;

// Output Schema
export const AttachIamGroupToPolicyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    policy_group_relationship: Schema.optional(
      Schema.Struct({
        group_id: Schema.optional(Schema.String),
        group_name: Schema.optional(Schema.String),
        policy_id: Schema.optional(Schema.String),
        policy_name: Schema.optional(Schema.String),
        policy_description: Schema.optional(Schema.String),
        date_assigned: Schema.optional(Schema.String),
        assigned_by: Schema.optional(Schema.String),
      }),
    ),
  });
export type AttachIamGroupToPolicyOutput =
  typeof AttachIamGroupToPolicyOutput.Type;

// The operation
/**
 * Attach Group to Policy
 *
 * Attach a Group to a Policy.
 *
 * @param policy_id - The Policy ID.
 * @param group_id - The Group ID.
 */
export const attachIamGroupToPolicy = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AttachIamGroupToPolicyInput,
    outputSchema: AttachIamGroupToPolicyOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
