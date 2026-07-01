import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface AdvancedActivityLogsListInput {
  project_id: string;
  activities?: string;
  clients?: string;
  detail_filters?: string;
  end_date?: string;
  hogql_filter?: string;
  ip_addresses?: string;
  is_system?: string;
  item_ids?: string;
  page?: number;
  page_size?: number;
  scopes?: string;
  search_text?: string;
  start_date?: string;
  team_ids?: string;
  users?: string;
  was_impersonated?: string;
}
export const AdvancedActivityLogsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    activities: Schema.optional(Schema.String),
    clients: Schema.optional(Schema.String),
    detail_filters: Schema.optional(Schema.String),
    end_date: Schema.optional(Schema.String),
    hogql_filter: Schema.optional(Schema.String),
    ip_addresses: Schema.optional(Schema.String),
    is_system: Schema.optional(Schema.String),
    item_ids: Schema.optional(Schema.String),
    page: Schema.optional(Schema.Number),
    page_size: Schema.optional(Schema.Number),
    scopes: Schema.optional(Schema.String),
    search_text: Schema.optional(Schema.String),
    start_date: Schema.optional(Schema.String),
    team_ids: Schema.optional(Schema.String),
    users: Schema.optional(Schema.String),
    was_impersonated: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/advanced_activity_logs/",
    }),
  ) as unknown as Schema.Codec<AdvancedActivityLogsListInput>;

// Output Schema
export interface AdvancedActivityLogsListOutput {
  count?: number;
  next?: string | null;
  previous?: string | null;
  results?: {
    id?: string;
    user?: {
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
    unread?: boolean;
    team_id?: number | null;
    organization_id?: string | null;
    was_impersonated?: boolean | null;
    is_system?: boolean | null;
    client?: string | null;
    ip_address?: string | null;
    activity?: string;
    item_id?: string | null;
    scope?: string;
    detail?: unknown;
    created_at?: string;
  }[];
}
export const AdvancedActivityLogsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.optional(Schema.Number),
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          user: Schema.optional(
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
          unread: Schema.optional(Schema.Boolean),
          team_id: Schema.optional(Schema.NullOr(Schema.Number)),
          organization_id: Schema.optional(Schema.NullOr(Schema.String)),
          was_impersonated: Schema.optional(Schema.NullOr(Schema.Boolean)),
          is_system: Schema.optional(Schema.NullOr(Schema.Boolean)),
          client: Schema.optional(Schema.NullOr(Schema.String)),
          ip_address: Schema.optional(Schema.NullOr(Schema.String)),
          activity: Schema.optional(Schema.String),
          item_id: Schema.optional(Schema.NullOr(Schema.String)),
          scope: Schema.optional(Schema.String),
          detail: Schema.optional(Schema.Unknown),
          created_at: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<AdvancedActivityLogsListOutput>;

// The operation
/**
 *
 * @param activities - Filter by activity types (e.g. "created", "updated", "deleted").
 * @param clients - Filter by API clients that generated the activity (from x-posthog-client header).
 * @param detail_filters - JSON-encoded map of `detail` field paths to {operation, value} filters. Allowed operations: exact, contains, in.
 * @param end_date - Upper bound on `created_at` (inclusive), ISO-8601.
 * @param hogql_filter - Reserved for future HogQL-based filtering.
 * @param ip_addresses - Filter by client IP addresses. Accepts exact IPv4/IPv6 values or wildcard patterns using `*` (e.g. `203.0.113.*`). Multiple entries are OR-combined.
 * @param is_system - When set, filters rows authored by the system (no user).
 * @param item_ids - Filter by the `item_id` of the affected resource(s).
 * @param page - Page number for pagination. When provided, uses page-based pagination ordered by most recent first.
 * @param page_size - Number of results per page (default: 100, max: 1000). Only used with page-based pagination.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param scopes - Filter by activity scopes (e.g. "FeatureFlag", "Insight").
 * @param search_text - Free-text search across the `detail` JSON column.
 * @param start_date - Lower bound on `created_at` (inclusive), ISO-8601.
 * @param team_ids - Filter by project (team) IDs. Only honored on the organization-scoped endpoint; ignored on the project-scoped endpoint.
 * @param users - Filter by users who performed the activity (user UUIDs).
 * @param was_impersonated - When set, filters rows where the actor was impersonating another user.
 */
export const advancedActivityLogsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AdvancedActivityLogsListInput,
    outputSchema: AdvancedActivityLogsListOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
