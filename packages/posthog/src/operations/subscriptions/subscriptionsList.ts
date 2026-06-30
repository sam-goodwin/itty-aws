import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface SubscriptionsListInput {
  project_id: string;
  created_by?: string;
  dashboard?: number;
  insight?: number;
  limit?: number;
  offset?: number;
  ordering?: string;
  resource_type?: "ai_prompt" | "dashboard" | "insight";
  search?: string;
  target_type?: "email" | "slack";
}
export const SubscriptionsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    project_id: Schema.String.pipe(T.PathParam()),
    created_by: Schema.optional(Schema.String),
    dashboard: Schema.optional(Schema.Number),
    insight: Schema.optional(Schema.Number),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
    ordering: Schema.optional(Schema.String),
    resource_type: Schema.optional(
      Schema.Literals(["ai_prompt", "dashboard", "insight"]),
    ),
    search: Schema.optional(Schema.String),
    target_type: Schema.optional(Schema.Literals(["email", "slack"])),
  },
).pipe(
  T.Http({ method: "GET", path: "/api/projects/{project_id}/subscriptions/" }),
) as unknown as Schema.Codec<SubscriptionsListInput>;

// Output Schema
export interface SubscriptionsListOutput {
  count?: number;
  next?: string | null;
  previous?: string | null;
  results?: {
    id?: number;
    resource_type?: "insight" | "dashboard" | "ai_prompt";
    dashboard?: number | null;
    insight?: number | null;
    insight_short_id?: string | null;
    resource_name?: string | null;
    dashboard_export_insights?: number[];
    prompt?: string | null;
    target_type?: "email" | "slack";
    target_value?: string;
    frequency?: "daily" | "weekly" | "monthly" | "yearly";
    interval?: number;
    byweekday?:
      | (
          | "monday"
          | "tuesday"
          | "wednesday"
          | "thursday"
          | "friday"
          | "saturday"
          | "sunday"
        )[]
      | null;
    bysetpos?: number | null;
    count?: number | null;
    start_date?: string;
    until_date?: string | null;
    created_at?: string;
    created_by?: {
      id?: number;
      uuid?: string;
      distinct_id?: string | null;
      first_name?: string;
      last_name?: string;
      email?: string;
      is_email_verified?: boolean | null;
      hedgehog_config?: Record<string, unknown> | null;
      role_at_organization?:
        | "engineering"
        | "data"
        | "product"
        | "founder"
        | "leadership"
        | "marketing"
        | "sales"
        | "other"
        | ""
        | null;
    } | null;
    deleted?: boolean;
    enabled?: boolean;
    title?: string | null;
    summary?: string;
    next_delivery_date?: string | null;
    integration_id?: number | null;
    invite_message?: string | null;
    summary_enabled?: boolean;
    summary_prompt_guide?: string;
  }[];
}
export const SubscriptionsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.optional(Schema.Number),
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.Number),
          resource_type: Schema.optional(
            Schema.Literals(["insight", "dashboard", "ai_prompt"]),
          ),
          dashboard: Schema.optional(Schema.NullOr(Schema.Number)),
          insight: Schema.optional(Schema.NullOr(Schema.Number)),
          insight_short_id: Schema.optional(Schema.NullOr(Schema.String)),
          resource_name: Schema.optional(Schema.NullOr(Schema.String)),
          dashboard_export_insights: Schema.optional(
            Schema.Array(Schema.Number),
          ),
          prompt: Schema.optional(Schema.NullOr(Schema.String)),
          target_type: Schema.optional(Schema.Literals(["email", "slack"])),
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
            Schema.NullOr(
              Schema.Struct({
                id: Schema.optional(Schema.Number),
                uuid: Schema.optional(Schema.String),
                distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
                first_name: Schema.optional(Schema.String),
                last_name: Schema.optional(Schema.String),
                email: Schema.optional(Schema.String),
                is_email_verified: Schema.optional(
                  Schema.NullOr(Schema.Boolean),
                ),
                hedgehog_config: Schema.optional(
                  Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
                ),
                role_at_organization: Schema.optional(
                  Schema.NullOr(
                    Schema.Union([
                      Schema.Literals([
                        "engineering",
                        "data",
                        "product",
                        "founder",
                        "leadership",
                        "marketing",
                        "sales",
                        "other",
                      ]),
                      Schema.Literals([""]),
                    ]),
                  ),
                ),
              }),
            ),
          ),
          deleted: Schema.optional(Schema.Boolean),
          enabled: Schema.optional(Schema.Boolean),
          title: Schema.optional(Schema.NullOr(Schema.String)),
          summary: Schema.optional(Schema.String),
          next_delivery_date: Schema.optional(Schema.NullOr(Schema.String)),
          integration_id: Schema.optional(Schema.NullOr(Schema.Number)),
          invite_message: Schema.optional(Schema.NullOr(Schema.String)),
          summary_enabled: Schema.optional(Schema.Boolean),
          summary_prompt_guide: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<SubscriptionsListOutput>;

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
 * @param resource_type - Filter by subscription resource: insight, dashboard export, or AI report.
 * @param search - A search term.
 * @param target_type - Filter by delivery channel (email or Slack).
 */
export const subscriptionsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SubscriptionsListInput,
  outputSchema: SubscriptionsListOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
