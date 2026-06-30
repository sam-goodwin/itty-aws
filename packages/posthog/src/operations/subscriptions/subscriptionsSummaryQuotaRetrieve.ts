import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const SubscriptionsSummaryQuotaRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/subscriptions/summary_quota/",
    }),
  );
export type SubscriptionsSummaryQuotaRetrieveInput =
  typeof SubscriptionsSummaryQuotaRetrieveInput.Type;

// Output Schema
export const SubscriptionsSummaryQuotaRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    active_count: Schema.Number,
    limit: Schema.NullOr(Schema.Number),
    at_limit: Schema.Boolean,
  });
export type SubscriptionsSummaryQuotaRetrieveOutput =
  typeof SubscriptionsSummaryQuotaRetrieveOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const subscriptionsSummaryQuotaRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SubscriptionsSummaryQuotaRetrieveInput,
    outputSchema: SubscriptionsSummaryQuotaRetrieveOutput,
  }));
