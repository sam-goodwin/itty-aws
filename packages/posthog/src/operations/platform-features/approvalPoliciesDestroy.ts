import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const ApprovalPoliciesDestroyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/environments/{project_id}/approval_policies/{id}/",
    }),
  );
export type ApprovalPoliciesDestroyInput =
  typeof ApprovalPoliciesDestroyInput.Type;

// Output Schema
export const ApprovalPoliciesDestroyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ApprovalPoliciesDestroyOutput =
  typeof ApprovalPoliciesDestroyOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this approval policy.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const approvalPoliciesDestroy = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ApprovalPoliciesDestroyInput,
    outputSchema: ApprovalPoliciesDestroyOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
