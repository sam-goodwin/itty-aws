import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const AssignIamGroupToRoleInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    role_id: Schema.String.pipe(T.PathParam()),
    group_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "POST", path: "/v2/roles/{role_id}/groups/{group_id}" }),
  );
export type AssignIamGroupToRoleInput = typeof AssignIamGroupToRoleInput.Type;

// Output Schema
export const AssignIamGroupToRoleOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    role_group_relationship: Schema.optional(
      Schema.Struct({
        group_id: Schema.optional(Schema.String),
        group_name: Schema.optional(Schema.String),
        role_id: Schema.optional(Schema.String),
        role_name: Schema.optional(Schema.String),
        role_description: Schema.optional(Schema.String),
        role_type: Schema.optional(Schema.String),
        date_assigned: Schema.optional(Schema.String),
        assigned_by: Schema.optional(Schema.String),
      }),
    ),
  });
export type AssignIamGroupToRoleOutput = typeof AssignIamGroupToRoleOutput.Type;

// The operation
/**
 * Assign Group to Role
 *
 * Assign a Group to a Role.
 *
 * @param role_id - The Role ID.
 * @param group_id - The Group ID.
 */
export const assignIamGroupToRole = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AssignIamGroupToRoleInput,
    outputSchema: AssignIamGroupToRoleOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
