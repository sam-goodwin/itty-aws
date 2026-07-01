import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface ConversationsTicketsCreateInput {
  project_id: string;
  id?: string;
  ticket_number?: number;
  channel_source?: "widget" | "email" | "slack" | "teams" | "github";
  channel_detail?:
    | "slack_channel_message"
    | "slack_bot_mention"
    | "slack_emoji_reaction"
    | "teams_channel_message"
    | "teams_bot_mention"
    | "widget_embedded"
    | "widget_api"
    | "github_issue"
    | null;
  distinct_id?: string;
  status?: "new" | "open" | "pending" | "on_hold" | "resolved";
  priority?: "low" | "medium" | "high" | "" | null;
  assignee?: {
    id?: string | null;
    type?: string;
    user?: Record<string, string> | null;
    role?: Record<string, string> | null;
  };
  anonymous_traits?: unknown;
  ai_resolved?: boolean;
  escalation_reason?: string | null;
  ai_triage?: unknown;
  created_at?: string;
  updated_at?: string;
  message_count?: number;
  last_message_at?: string | null;
  last_message_text?: string | null;
  unread_team_count?: number;
  unread_customer_count?: number;
  session_id?: string | null;
  session_context?: unknown;
  sla_due_at?: string | null;
  snoozed_until?: string | null;
  slack_channel_id?: string | null;
  slack_thread_ts?: string | null;
  slack_team_id?: string | null;
  email_subject?: string | null;
  email_from?: string | null;
  email_to?: string | null;
  cc_participants?: unknown;
  github_repo?: string | null;
  github_issue_number?: number | null;
  organization_id?: string | null;
  person?: {
    id?: string;
    name?: string;
    distinct_ids?: string[];
    properties?: Record<string, unknown>;
    created_at?: string;
    is_identified?: boolean;
  } | null;
  tags?: unknown[];
}
export const ConversationsTicketsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    id: Schema.optional(Schema.String),
    ticket_number: Schema.optional(Schema.Number),
    channel_source: Schema.optional(
      Schema.Literals(["widget", "email", "slack", "teams", "github"]),
    ),
    channel_detail: Schema.optional(
      Schema.NullOr(
        Schema.Literals([
          "slack_channel_message",
          "slack_bot_mention",
          "slack_emoji_reaction",
          "teams_channel_message",
          "teams_bot_mention",
          "widget_embedded",
          "widget_api",
          "github_issue",
        ]),
      ),
    ),
    distinct_id: Schema.optional(Schema.String),
    status: Schema.optional(
      Schema.Literals(["new", "open", "pending", "on_hold", "resolved"]),
    ),
    priority: Schema.optional(
      Schema.NullOr(
        Schema.Union([
          Schema.Literals(["low", "medium", "high"]),
          Schema.Literals([""]),
        ]),
      ),
    ),
    assignee: Schema.optional(
      Schema.Struct({
        id: Schema.optional(Schema.NullOr(Schema.String)),
        type: Schema.optional(Schema.String),
        user: Schema.optional(
          Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
        ),
        role: Schema.optional(
          Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
        ),
      }),
    ),
    anonymous_traits: Schema.optional(Schema.Unknown),
    ai_resolved: Schema.optional(Schema.Boolean),
    escalation_reason: Schema.optional(Schema.NullOr(Schema.String)),
    ai_triage: Schema.optional(Schema.Unknown),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
    message_count: Schema.optional(Schema.Number),
    last_message_at: Schema.optional(Schema.NullOr(Schema.String)),
    last_message_text: Schema.optional(Schema.NullOr(Schema.String)),
    unread_team_count: Schema.optional(Schema.Number),
    unread_customer_count: Schema.optional(Schema.Number),
    session_id: Schema.optional(Schema.NullOr(Schema.String)),
    session_context: Schema.optional(Schema.Unknown),
    sla_due_at: Schema.optional(Schema.NullOr(Schema.String)),
    snoozed_until: Schema.optional(Schema.NullOr(Schema.String)),
    slack_channel_id: Schema.optional(Schema.NullOr(Schema.String)),
    slack_thread_ts: Schema.optional(Schema.NullOr(Schema.String)),
    slack_team_id: Schema.optional(Schema.NullOr(Schema.String)),
    email_subject: Schema.optional(Schema.NullOr(Schema.String)),
    email_from: Schema.optional(Schema.NullOr(Schema.String)),
    email_to: Schema.optional(Schema.NullOr(Schema.String)),
    cc_participants: Schema.optional(Schema.Unknown),
    github_repo: Schema.optional(Schema.NullOr(Schema.String)),
    github_issue_number: Schema.optional(Schema.NullOr(Schema.Number)),
    organization_id: Schema.optional(Schema.NullOr(Schema.String)),
    person: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          distinct_ids: Schema.optional(Schema.Array(Schema.String)),
          properties: Schema.optional(
            Schema.Record(Schema.String, Schema.Unknown),
          ),
          created_at: Schema.optional(Schema.String),
          is_identified: Schema.optional(Schema.Boolean),
        }),
      ),
    ),
    tags: Schema.optional(Schema.Array(Schema.Unknown)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/conversations/tickets/",
    }),
  ) as unknown as Schema.Codec<ConversationsTicketsCreateInput>;

// Output Schema
export interface ConversationsTicketsCreateOutput {
  id?: string;
  ticket_number?: number;
  channel_source?: "widget" | "email" | "slack" | "teams" | "github";
  channel_detail?:
    | "slack_channel_message"
    | "slack_bot_mention"
    | "slack_emoji_reaction"
    | "teams_channel_message"
    | "teams_bot_mention"
    | "widget_embedded"
    | "widget_api"
    | "github_issue"
    | null;
  distinct_id?: string;
  status?: "new" | "open" | "pending" | "on_hold" | "resolved";
  priority?: "low" | "medium" | "high" | "" | null;
  assignee?: {
    id?: string | null;
    type?: string;
    user?: Record<string, string> | null;
    role?: Record<string, string> | null;
  };
  anonymous_traits?: unknown;
  ai_resolved?: boolean;
  escalation_reason?: string | null;
  ai_triage?: unknown;
  created_at?: string;
  updated_at?: string;
  message_count?: number;
  last_message_at?: string | null;
  last_message_text?: string | null;
  unread_team_count?: number;
  unread_customer_count?: number;
  session_id?: string | null;
  session_context?: unknown;
  sla_due_at?: string | null;
  snoozed_until?: string | null;
  slack_channel_id?: string | null;
  slack_thread_ts?: string | null;
  slack_team_id?: string | null;
  email_subject?: string | null;
  email_from?: string | null;
  email_to?: string | null;
  cc_participants?: unknown;
  github_repo?: string | null;
  github_issue_number?: number | null;
  organization_id?: string | null;
  person?: {
    id?: string;
    name?: string;
    distinct_ids?: string[];
    properties?: Record<string, unknown>;
    created_at?: string;
    is_identified?: boolean;
  } | null;
  tags?: unknown[];
}
export const ConversationsTicketsCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    ticket_number: Schema.optional(Schema.Number),
    channel_source: Schema.optional(
      Schema.Literals(["widget", "email", "slack", "teams", "github"]),
    ),
    channel_detail: Schema.optional(
      Schema.NullOr(
        Schema.Literals([
          "slack_channel_message",
          "slack_bot_mention",
          "slack_emoji_reaction",
          "teams_channel_message",
          "teams_bot_mention",
          "widget_embedded",
          "widget_api",
          "github_issue",
        ]),
      ),
    ),
    distinct_id: Schema.optional(Schema.String),
    status: Schema.optional(
      Schema.Literals(["new", "open", "pending", "on_hold", "resolved"]),
    ),
    priority: Schema.optional(
      Schema.NullOr(
        Schema.Union([
          Schema.Literals(["low", "medium", "high"]),
          Schema.Literals([""]),
        ]),
      ),
    ),
    assignee: Schema.optional(
      Schema.Struct({
        id: Schema.optional(Schema.NullOr(Schema.String)),
        type: Schema.optional(Schema.String),
        user: Schema.optional(
          Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
        ),
        role: Schema.optional(
          Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
        ),
      }),
    ),
    anonymous_traits: Schema.optional(Schema.Unknown),
    ai_resolved: Schema.optional(Schema.Boolean),
    escalation_reason: Schema.optional(Schema.NullOr(Schema.String)),
    ai_triage: Schema.optional(Schema.Unknown),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
    message_count: Schema.optional(Schema.Number),
    last_message_at: Schema.optional(Schema.NullOr(Schema.String)),
    last_message_text: Schema.optional(Schema.NullOr(Schema.String)),
    unread_team_count: Schema.optional(Schema.Number),
    unread_customer_count: Schema.optional(Schema.Number),
    session_id: Schema.optional(Schema.NullOr(Schema.String)),
    session_context: Schema.optional(Schema.Unknown),
    sla_due_at: Schema.optional(Schema.NullOr(Schema.String)),
    snoozed_until: Schema.optional(Schema.NullOr(Schema.String)),
    slack_channel_id: Schema.optional(Schema.NullOr(Schema.String)),
    slack_thread_ts: Schema.optional(Schema.NullOr(Schema.String)),
    slack_team_id: Schema.optional(Schema.NullOr(Schema.String)),
    email_subject: Schema.optional(Schema.NullOr(Schema.String)),
    email_from: Schema.optional(Schema.NullOr(Schema.String)),
    email_to: Schema.optional(Schema.NullOr(Schema.String)),
    cc_participants: Schema.optional(Schema.Unknown),
    github_repo: Schema.optional(Schema.NullOr(Schema.String)),
    github_issue_number: Schema.optional(Schema.NullOr(Schema.Number)),
    organization_id: Schema.optional(Schema.NullOr(Schema.String)),
    person: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          distinct_ids: Schema.optional(Schema.Array(Schema.String)),
          properties: Schema.optional(
            Schema.Record(Schema.String, Schema.Unknown),
          ),
          created_at: Schema.optional(Schema.String),
          is_identified: Schema.optional(Schema.Boolean),
        }),
      ),
    ),
    tags: Schema.optional(Schema.Array(Schema.Unknown)),
  }) as unknown as Schema.Codec<ConversationsTicketsCreateOutput>;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const conversationsTicketsCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ConversationsTicketsCreateInput,
    outputSchema: ConversationsTicketsCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
