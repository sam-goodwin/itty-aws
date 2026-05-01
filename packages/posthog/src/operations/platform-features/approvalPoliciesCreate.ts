import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const ApprovalPoliciesCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    id: Schema.optional(Schema.String),
    action_key: Schema.optional(Schema.String),
    conditions: Schema.optional(Schema.Unknown),
    approver_config: Schema.optional(Schema.Unknown),
    allow_self_approve: Schema.optional(Schema.Boolean),
    bypass_org_membership_levels: Schema.optional(Schema.Unknown),
    bypass_roles: Schema.optional(Schema.Array(Schema.String)),
    expires_after: Schema.optional(Schema.String),
    enabled: Schema.optional(Schema.Boolean),
    created_by: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          id: Schema.optional(Schema.Number),
          uuid: Schema.optional(Schema.String),
          distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
          first_name: Schema.optional(Schema.String),
          last_name: Schema.optional(Schema.String),
          email: Schema.optional(Schema.String),
          is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
          hedgehog_config: Schema.optional(
            Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
          ),
          role_at_organization: Schema.optional(Schema.Unknown),
        }),
      ),
    ),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.NullOr(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/environments/{project_id}/approval_policies/",
    }),
  );
export type ApprovalPoliciesCreateInput =
  typeof ApprovalPoliciesCreateInput.Type;

// Output Schema
export const ApprovalPoliciesCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    action_key: Schema.optional(Schema.String),
    conditions: Schema.optional(Schema.Unknown),
    approver_config: Schema.optional(Schema.Unknown),
    allow_self_approve: Schema.optional(Schema.Boolean),
    bypass_org_membership_levels: Schema.optional(Schema.Unknown),
    bypass_roles: Schema.optional(Schema.Array(Schema.String)),
    expires_after: Schema.optional(Schema.String),
    enabled: Schema.optional(Schema.Boolean),
    created_by: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          id: Schema.optional(Schema.Number),
          uuid: Schema.optional(Schema.String),
          distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
          first_name: Schema.optional(Schema.String),
          last_name: Schema.optional(Schema.String),
          email: Schema.optional(Schema.String),
          is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
          hedgehog_config: Schema.optional(
            Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
          ),
          role_at_organization: Schema.optional(Schema.Unknown),
        }),
      ),
    ),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.NullOr(Schema.String)),
  });
export type ApprovalPoliciesCreateOutput =
  typeof ApprovalPoliciesCreateOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const approvalPoliciesCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ApprovalPoliciesCreateInput,
    outputSchema: ApprovalPoliciesCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
