import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const ConversationsTicketsRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/conversations/tickets/{id}/",
    }),
  );
export type ConversationsTicketsRetrieveInput =
  typeof ConversationsTicketsRetrieveInput.Type;

// Output Schema
export const ConversationsTicketsRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type ConversationsTicketsRetrieveOutput =
  typeof ConversationsTicketsRetrieveOutput.Type;

// The operation
/**
 * Get single ticket and mark as read by team.
 *
 * @param id - A UUID string identifying this ticket.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const conversationsTicketsRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConversationsTicketsRetrieveInput,
    outputSchema: ConversationsTicketsRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }));
