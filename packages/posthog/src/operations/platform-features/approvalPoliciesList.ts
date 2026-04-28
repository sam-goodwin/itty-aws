import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { BadRequest, Forbidden, NotFound } from "../../errors";

// Input Schema
export const ApprovalPoliciesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/environments/{project_id}/approval_policies/",
    }),
  );
export type ApprovalPoliciesListInput = typeof ApprovalPoliciesListInput.Type;

// Output Schema
export const ApprovalPoliciesListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.Number,
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        action_key: Schema.String,
        conditions: Schema.optional(Schema.Unknown),
        approver_config: Schema.Unknown,
        allow_self_approve: Schema.optional(Schema.Boolean),
        bypass_org_membership_levels: Schema.optional(Schema.Unknown),
        bypass_roles: Schema.optional(Schema.Array(Schema.String)),
        expires_after: Schema.optional(Schema.String),
        enabled: Schema.optional(Schema.Boolean),
        created_by: Schema.Struct({
          id: Schema.Number,
          uuid: Schema.String,
          distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
          first_name: Schema.optional(Schema.String),
          last_name: Schema.optional(Schema.String),
          email: Schema.String,
          is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
          hedgehog_config: Schema.NullOr(
            Schema.Record(Schema.String, Schema.Unknown),
          ),
          role_at_organization: Schema.optional(Schema.Unknown),
        }),
        created_at: Schema.String,
        updated_at: Schema.NullOr(Schema.String),
      }),
    ),
  });
export type ApprovalPoliciesListOutput = typeof ApprovalPoliciesListOutput.Type;

// The operation
/**
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const approvalPoliciesList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ApprovalPoliciesListInput,
    outputSchema: ApprovalPoliciesListOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
