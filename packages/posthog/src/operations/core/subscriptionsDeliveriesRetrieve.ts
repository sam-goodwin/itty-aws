import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const SubscriptionsDeliveriesRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    subscription_id: Schema.Number.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/environments/{project_id}/subscriptions/{subscription_id}/deliveries/{id}/",
    }),
  );
export type SubscriptionsDeliveriesRetrieveInput =
  typeof SubscriptionsDeliveriesRetrieveInput.Type;

// Output Schema
export const SubscriptionsDeliveriesRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type SubscriptionsDeliveriesRetrieveOutput =
  typeof SubscriptionsDeliveriesRetrieveOutput.Type;

// The operation
/**
 * Retrieve subscription delivery
 *
 * Fetch one delivery row by id.
 *
 * @param id - A UUID string identifying this subscription delivery.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const subscriptionsDeliveriesRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SubscriptionsDeliveriesRetrieveInput,
    outputSchema: SubscriptionsDeliveriesRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }));
