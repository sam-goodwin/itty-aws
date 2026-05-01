import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const SubscriptionsPartialUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Number.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    dashboard: Schema.optional(Schema.NullOr(Schema.Number)),
    insight: Schema.optional(Schema.NullOr(Schema.Number)),
    insight_short_id: Schema.optional(Schema.NullOr(Schema.String)),
    resource_name: Schema.optional(Schema.NullOr(Schema.String)),
    dashboard_export_insights: Schema.optional(Schema.Array(Schema.Number)),
    target_type: Schema.optional(
      Schema.Literals(["email", "slack", "webhook"]),
    ),
    target_value: Schema.optional(Schema.String),
    frequency: Schema.optional(
      Schema.Literals(["daily", "weekly", "monthly", "yearly"]),
    ),
    interval: Schema.optional(Schema.Number),
    byweekday: Schema.optional(
      Schema.NullOr(
        Schema.Array(
          Schema.Literals([
            "monday",
            "tuesday",
            "wednesday",
            "thursday",
            "friday",
            "saturday",
            "sunday",
          ]),
        ),
      ),
    ),
    bysetpos: Schema.optional(Schema.NullOr(Schema.Number)),
    count: Schema.optional(Schema.NullOr(Schema.Number)),
    start_date: Schema.optional(Schema.String),
    until_date: Schema.optional(Schema.NullOr(Schema.String)),
    created_at: Schema.optional(Schema.String),
    created_by: Schema.optional(
      Schema.Struct({
        id: Schema.Number,
        uuid: Schema.String,
        distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
        first_name: Schema.optional(Schema.String),
        last_name: Schema.optional(Schema.String),
        email: Schema.String,
        is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
        hedgehog_config: Schema.NullOr(
          Schema.Record(Schema.String, Schema.Unknown),
        ),
        role_at_organization: Schema.optional(Schema.Unknown),
      }),
    ),
    deleted: Schema.optional(Schema.Boolean),
    title: Schema.optional(Schema.NullOr(Schema.String)),
    summary: Schema.optional(Schema.String),
    next_delivery_date: Schema.optional(Schema.NullOr(Schema.String)),
    integration_id: Schema.optional(Schema.NullOr(Schema.Number)),
    invite_message: Schema.optional(Schema.NullOr(Schema.String)),
    summary_enabled: Schema.optional(Schema.Boolean),
    summary_prompt_guide: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/api/projects/{project_id}/subscriptions/{id}/",
    }),
  );
export type SubscriptionsPartialUpdateInput =
  typeof SubscriptionsPartialUpdateInput.Type;

// Output Schema
export const SubscriptionsPartialUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Number,
    dashboard: Schema.optional(Schema.NullOr(Schema.Number)),
    insight: Schema.optional(Schema.NullOr(Schema.Number)),
    insight_short_id: Schema.NullOr(Schema.String),
    resource_name: Schema.NullOr(Schema.String),
    dashboard_export_insights: Schema.optional(Schema.Array(Schema.Number)),
    target_type: Schema.Literals(["email", "slack", "webhook"]),
    target_value: Schema.String,
    frequency: Schema.Literals(["daily", "weekly", "monthly", "yearly"]),
    interval: Schema.optional(Schema.Number),
    byweekday: Schema.optional(
      Schema.NullOr(
        Schema.Array(
          Schema.Literals([
            "monday",
            "tuesday",
            "wednesday",
            "thursday",
            "friday",
            "saturday",
            "sunday",
          ]),
        ),
      ),
    ),
    bysetpos: Schema.optional(Schema.NullOr(Schema.Number)),
    count: Schema.optional(Schema.NullOr(Schema.Number)),
    start_date: Schema.String,
    until_date: Schema.optional(Schema.NullOr(Schema.String)),
    created_at: Schema.String,
    created_by: Schema.Struct({
      id: Schema.Number,
      uuid: Schema.String,
      distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
      first_name: Schema.optional(Schema.String),
      last_name: Schema.optional(Schema.String),
      email: Schema.String,
      is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
      hedgehog_config: Schema.NullOr(
        Schema.Record(Schema.String, Schema.Unknown),
      ),
      role_at_organization: Schema.optional(Schema.Unknown),
    }),
    deleted: Schema.optional(Schema.Boolean),
    title: Schema.optional(Schema.NullOr(Schema.String)),
    summary: Schema.String,
    next_delivery_date: Schema.NullOr(Schema.String),
    integration_id: Schema.optional(Schema.NullOr(Schema.Number)),
    invite_message: Schema.optional(Schema.NullOr(Schema.String)),
    summary_enabled: Schema.optional(Schema.Boolean),
    summary_prompt_guide: Schema.optional(Schema.String),
  });
export type SubscriptionsPartialUpdateOutput =
  typeof SubscriptionsPartialUpdateOutput.Type;

// The operation
/**
 *
 * @param id - A unique integer value identifying this subscription.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const subscriptionsPartialUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SubscriptionsPartialUpdateInput,
    outputSchema: SubscriptionsPartialUpdateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
