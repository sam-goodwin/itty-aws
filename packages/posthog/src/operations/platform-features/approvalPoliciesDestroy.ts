import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface ApprovalPoliciesDestroyInput {
  id: string;
  project_id: string;
}
export const ApprovalPoliciesDestroyInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/projects/{project_id}/approval_policies/{id}/",
    }),
  ) as unknown as Schema.Codec<ApprovalPoliciesDestroyInput>;

// Output Schema
export type ApprovalPoliciesDestroyOutput = void;
export const ApprovalPoliciesDestroyOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ApprovalPoliciesDestroyOutput>;

// The operation
/**
 *
 * @param id - A UUID string identifying this approval policy.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const approvalPoliciesDestroy = /*@__PURE__*/ API.make(() => ({
  inputSchema: ApprovalPoliciesDestroyInput,
  outputSchema: ApprovalPoliciesDestroyOutput,
}));
