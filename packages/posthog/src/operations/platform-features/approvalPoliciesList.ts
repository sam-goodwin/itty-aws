import * as Schema from "effect/Schema";
import { ApprovalPolicySchema } from "./_schemas.ts";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

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
    count: Schema.optional(Schema.Number),
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.optional(
      Schema.Array(Schema.suspend(() => ApprovalPolicySchema)),
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
