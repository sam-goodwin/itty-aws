import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const EnvironmentVisionQuotaRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/api/projects/{project_id}/vision/quota/" }),
  );
export type EnvironmentVisionQuotaRetrieveInput =
  typeof EnvironmentVisionQuotaRetrieveInput.Type;

// Output Schema
export const EnvironmentVisionQuotaRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    monthly_quota: Schema.Number,
    usage_this_month: Schema.Number,
    remaining: Schema.Number,
    exhausted: Schema.Boolean,
    period_start: Schema.String,
    period_end: Schema.String,
    projected_monthly_observations: Schema.Number,
  });
export type EnvironmentVisionQuotaRetrieveOutput =
  typeof EnvironmentVisionQuotaRetrieveOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const environmentVisionQuotaRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: EnvironmentVisionQuotaRetrieveInput,
    outputSchema: EnvironmentVisionQuotaRetrieveOutput,
  }));
