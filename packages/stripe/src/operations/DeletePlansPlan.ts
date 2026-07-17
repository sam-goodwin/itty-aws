import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface DeletePlansPlanInput {
  plan: string;
}
export const DeletePlansPlanInput = /*@__PURE__*/ Schema.Struct({
  plan: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/v1/plans/{plan}",
    contentType: "form-urlencoded",
  }),
) as unknown as Schema.Codec<DeletePlansPlanInput>;

// Output Schema
export interface DeletePlansPlanOutput {
  deleted: true;
  id: string;
  object: "plan";
}
export const DeletePlansPlanOutput = /*@__PURE__*/ Schema.Struct({
  deleted: Schema.Literals([true]),
  id: Schema.String,
  object: Schema.Literals(["plan"]),
}) as unknown as Schema.Codec<DeletePlansPlanOutput>;

// The operation
/**
 * Delete a plan
 *
 * <p>Deleting plans means new subscribers can’t be added. Existing subscribers aren’t affected.</p>
 */
export const DeletePlansPlan = /*@__PURE__*/ API.make(() => ({
  inputSchema: DeletePlansPlanInput,
  outputSchema: DeletePlansPlanOutput,
}));
