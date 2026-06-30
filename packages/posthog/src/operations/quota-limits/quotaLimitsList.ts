import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface QuotaLimitsListInput {
  project_id: string;
}
export const QuotaLimitsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  project_id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({ method: "GET", path: "/api/projects/{project_id}/quota_limits/" }),
) as unknown as Schema.Codec<QuotaLimitsListInput>;

// Output Schema
export type QuotaLimitsListOutput = {
  limited: Record<string, { limited: boolean }>;
}[];
export const QuotaLimitsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
  Schema.Struct({
    limited: Schema.Record(
      Schema.String,
      Schema.Struct({
        limited: Schema.Boolean,
      }),
    ),
  }),
) as unknown as Schema.Codec<QuotaLimitsListOutput>;

// The operation
/**
 * Get a team's quota-limit state
 *
 * Return the current quota-limit state for the team identified in the URL, keyed by `QuotaResource` value. Used by the LLM gateway to gate billable products on AI credits exhaustion.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const quotaLimitsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: QuotaLimitsListInput,
  outputSchema: QuotaLimitsListOutput,
}));
