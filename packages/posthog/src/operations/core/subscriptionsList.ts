import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const SubscriptionsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    project_id: Schema.String.pipe(T.PathParam()),
    created_by: Schema.optional(Schema.String),
    dashboard: Schema.optional(Schema.Number),
    insight: Schema.optional(Schema.Number),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
    ordering: Schema.optional(Schema.String),
    resource_type: Schema.optional(Schema.Literals(["dashboard", "insight"])),
    search: Schema.optional(Schema.String),
    target_type: Schema.optional(
      Schema.Literals(["email", "slack", "webhook"]),
    ),
  },
).pipe(
  T.Http({ method: "GET", path: "/api/projects/{project_id}/subscriptions/" }),
);
export type SubscriptionsListInput = typeof SubscriptionsListInput.Type;

// Output Schema
export const SubscriptionsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.Number,
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.Array(
      Schema.Struct({
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
      }),
    ),
  });
export type SubscriptionsListOutput = typeof SubscriptionsListOutput.Type;

// The operation
/**
 *
 * @param created_by - Filter by creator user UUID.
 * @param dashboard - Filter by dashboard ID.
 * @param insight - Filter by insight ID.
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param ordering - Which field to use when ordering the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param resource_type - Filter by subscription resource: insight vs dashboard export.
 * @param search - A search term.
 * @param target_type - Filter by delivery channel (email, Slack, or webhook).
 */
export const subscriptionsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SubscriptionsListInput,
  outputSchema: SubscriptionsListOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
