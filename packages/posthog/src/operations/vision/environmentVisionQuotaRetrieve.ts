import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface EnvironmentVisionQuotaRetrieveInput {
  project_id: string;
}
export const EnvironmentVisionQuotaRetrieveInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/api/projects/{project_id}/vision/quota/" }),
  ) as unknown as Schema.Codec<EnvironmentVisionQuotaRetrieveInput>;

// Output Schema
export interface EnvironmentVisionQuotaRetrieveOutput {
  monthly_quota: number;
  usage_this_month: number;
  remaining: number;
  exhausted: boolean;
  period_start: string;
  period_end: string;
  projected_monthly_observations: number;
}
export const EnvironmentVisionQuotaRetrieveOutput =
  /*@__PURE__*/ Schema.Struct({
    monthly_quota: Schema.Number,
    usage_this_month: Schema.Number,
    remaining: Schema.Number,
    exhausted: Schema.Boolean,
    period_start: Schema.String,
    period_end: Schema.String,
    projected_monthly_observations: Schema.Number,
  }) as unknown as Schema.Codec<EnvironmentVisionQuotaRetrieveOutput>;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const environmentVisionQuotaRetrieve =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: EnvironmentVisionQuotaRetrieveInput,
    outputSchema: EnvironmentVisionQuotaRetrieveOutput,
  }));
