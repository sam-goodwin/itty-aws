import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const ConversationsTicketsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    assignee: Schema.optional(Schema.String),
    channel_detail: Schema.optional(
      Schema.Literals([
        "slack_bot_mention",
        "slack_channel_message",
        "slack_emoji_reaction",
        "teams_bot_mention",
        "teams_channel_message",
        "widget_api",
        "widget_embedded",
      ]),
    ),
    channel_source: Schema.optional(
      Schema.Literals(["email", "slack", "teams", "widget"]),
    ),
    date_from: Schema.optional(Schema.String),
    date_to: Schema.optional(Schema.String),
    distinct_ids: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
    order_by: Schema.optional(
      Schema.Literals([
        "-created_at",
        "-sla_due_at",
        "-ticket_number",
        "-updated_at",
        "created_at",
        "sla_due_at",
        "ticket_number",
        "updated_at",
      ]),
    ),
    priority: Schema.optional(Schema.String),
    search: Schema.optional(Schema.String),
    sla: Schema.optional(Schema.Literals(["at-risk", "breached", "on-track"])),
    status: Schema.optional(Schema.String),
    tags: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/conversations/tickets/",
    }),
  );
export type ConversationsTicketsListInput =
  typeof ConversationsTicketsListInput.Type;

// Output Schema
export const ConversationsTicketsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.Number,
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        ticket_number: Schema.Number,
        channel_source: Schema.Literals(["widget", "email", "slack", "teams"]),
        channel_detail: Schema.Unknown,
        distinct_id: Schema.String,
        status: Schema.optional(
          Schema.Literals(["new", "open", "pending", "on_hold", "resolved"]),
        ),
        priority: Schema.optional(Schema.Unknown),
        assignee: Schema.Struct({
          id: Schema.NullOr(Schema.String),
          type: Schema.String,
          user: Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
          role: Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
        }),
        anonymous_traits: Schema.optional(Schema.Unknown),
        ai_resolved: Schema.optional(Schema.Boolean),
        escalation_reason: Schema.optional(Schema.NullOr(Schema.String)),
        created_at: Schema.String,
        updated_at: Schema.String,
        message_count: Schema.Number,
        last_message_at: Schema.NullOr(Schema.String),
        last_message_text: Schema.NullOr(Schema.String),
        unread_team_count: Schema.Number,
        unread_customer_count: Schema.Number,
        session_id: Schema.NullOr(Schema.String),
        session_context: Schema.Unknown,
        sla_due_at: Schema.optional(Schema.NullOr(Schema.String)),
        snoozed_until: Schema.optional(Schema.NullOr(Schema.String)),
        slack_channel_id: Schema.NullOr(Schema.String),
        slack_thread_ts: Schema.NullOr(Schema.String),
        slack_team_id: Schema.NullOr(Schema.String),
        email_subject: Schema.NullOr(Schema.String),
        email_from: Schema.NullOr(Schema.String),
        email_to: Schema.NullOr(Schema.String),
        cc_participants: Schema.Unknown,
        person: Schema.NullOr(
          Schema.Struct({
            id: Schema.String,
            name: Schema.String,
            distinct_ids: Schema.Array(Schema.String),
            properties: Schema.Record(Schema.String, Schema.Unknown),
            created_at: Schema.String,
            is_identified: Schema.Boolean,
          }),
        ),
        tags: Schema.optional(Schema.Array(Schema.Unknown)),
      }),
    ),
  });
export type ConversationsTicketsListOutput =
  typeof ConversationsTicketsListOutput.Type;

// The operation
/**
 * List tickets with person data attached.
 *
 * @param assignee - Filter by assignee. Use `unassigned` for tickets with no assignee, `user:<user_id>` for a specific user, or `role:<role_uuid>` for a role.
 * @param channel_detail - Filter by the channel sub-type (e.g. `widget_embedded`, `slack_bot_mention`).
 * @param channel_source - Filter by the channel the ticket originated from.
 * @param date_from - Only include tickets updated on or after this date. Accepts absolute dates (`2026-01-01`) or relative ones (`-7d`, `-1mStart`). Pass `all` to disable the filter.
 * @param date_to - Only include tickets updated on or before this date. Same format as `date_from`.
 * @param distinct_ids - Comma-separated list of person `distinct_id`s to filter by (max 100).
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param order_by - Sort order. Prefix with `-` for descending. Defaults to `-updated_at`.
 * @param priority - Filter by priority. Accepts a single value or a comma-separated list (e.g. `medium,high`). Valid values: `low`, `medium`, `high`.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param search - Free-text search. A numeric value matches a ticket number exactly; otherwise matches against the customer's name or email (case-insensitive, partial match).
 * @param sla - Filter by SLA state. `breached` = past `sla_due_at`, `at-risk` = due within the next hour, `on-track` = more than an hour remaining.
 * @param status - Filter by status. Accepts a single value or a comma-separated list (e.g. `new,open,pending`). Valid values: `new`, `open`, `pending`, `on_hold`, `resolved`.
 * @param tags - JSON-encoded array of tag names to filter by, e.g. `["billing","urgent"]`.
 */
export const conversationsTicketsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ConversationsTicketsListInput,
    outputSchema: ConversationsTicketsListOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
