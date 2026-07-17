import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface SubscriptionsSummaryQuotaRetrieveInput {
  project_id: string;
}
export const SubscriptionsSummaryQuotaRetrieveInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/subscriptions/summary_quota/",
    }),
  ) as unknown as Schema.Codec<SubscriptionsSummaryQuotaRetrieveInput>;

// Output Schema
export interface SubscriptionsSummaryQuotaRetrieveOutput {
  active_count: number;
  limit: number | null;
  at_limit: boolean;
}
export const SubscriptionsSummaryQuotaRetrieveOutput =
  /*@__PURE__*/ Schema.Struct({
    active_count: Schema.Number,
    limit: Schema.NullOr(Schema.Number),
    at_limit: Schema.Boolean,
  }) as unknown as Schema.Codec<SubscriptionsSummaryQuotaRetrieveOutput>;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const subscriptionsSummaryQuotaRetrieve =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SubscriptionsSummaryQuotaRetrieveInput,
    outputSchema: SubscriptionsSummaryQuotaRetrieveOutput,
  }));
