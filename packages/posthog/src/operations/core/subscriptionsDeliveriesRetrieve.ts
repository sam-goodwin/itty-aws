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
    id: Schema.optional(Schema.String),
    subscription: Schema.optional(Schema.Number),
    temporal_workflow_id: Schema.optional(Schema.String),
    idempotency_key: Schema.optional(Schema.String),
    trigger_type: Schema.optional(Schema.String),
    scheduled_at: Schema.optional(Schema.NullOr(Schema.String)),
    target_type: Schema.optional(Schema.String),
    target_value: Schema.optional(Schema.String),
    exported_asset_ids: Schema.optional(Schema.Array(Schema.Number)),
    content_snapshot: Schema.optional(Schema.Unknown),
    recipient_results: Schema.optional(Schema.Unknown),
    status: Schema.optional(
      Schema.Literals(["starting", "completed", "failed", "skipped"]),
    ),
    error: Schema.optional(Schema.NullOr(Schema.Unknown)),
    created_at: Schema.optional(Schema.String),
    last_updated_at: Schema.optional(Schema.String),
    finished_at: Schema.optional(Schema.NullOr(Schema.String)),
    change_summary: Schema.optional(Schema.NullOr(Schema.String)),
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
