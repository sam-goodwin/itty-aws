import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const SubscriptionsDeliveriesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    subscription_id: Schema.Number.pipe(T.PathParam()),
    cursor: Schema.optional(Schema.String),
    status: Schema.optional(
      Schema.Literals(["completed", "failed", "skipped", "starting"]),
    ),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/environments/{project_id}/subscriptions/{subscription_id}/deliveries/",
    }),
  );
export type SubscriptionsDeliveriesListInput =
  typeof SubscriptionsDeliveriesListInput.Type;

// Output Schema
export const SubscriptionsDeliveriesListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        subscription: Schema.Number,
        temporal_workflow_id: Schema.String,
        idempotency_key: Schema.String,
        trigger_type: Schema.String,
        scheduled_at: Schema.NullOr(Schema.String),
        target_type: Schema.String,
        target_value: Schema.String,
        exported_asset_ids: Schema.Array(Schema.Number),
        content_snapshot: Schema.Unknown,
        recipient_results: Schema.Unknown,
        status: Schema.Literals(["starting", "completed", "failed", "skipped"]),
        error: Schema.NullOr(Schema.Unknown),
        created_at: Schema.String,
        last_updated_at: Schema.String,
        finished_at: Schema.NullOr(Schema.String),
        change_summary: Schema.NullOr(Schema.String),
      }),
    ),
  });
export type SubscriptionsDeliveriesListOutput =
  typeof SubscriptionsDeliveriesListOutput.Type;

// The operation
/**
 * List subscription deliveries
 *
 * Paginated delivery history for a subscription. Requires premium subscriptions.
 *
 * @param cursor - The pagination cursor value.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param status - Return only deliveries in this run status (starting, completed, failed, or skipped).
 */
export const subscriptionsDeliveriesList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SubscriptionsDeliveriesListInput,
    outputSchema: SubscriptionsDeliveriesListOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
