import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const ConversationsTicketsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    id: Schema.optional(Schema.String),
    ticket_number: Schema.optional(Schema.Number),
    channel_source: Schema.optional(
      Schema.Literals(["widget", "email", "slack", "teams"]),
    ),
    channel_detail: Schema.optional(Schema.Unknown),
    distinct_id: Schema.optional(Schema.String),
    status: Schema.optional(
      Schema.Literals(["new", "open", "pending", "on_hold", "resolved"]),
    ),
    priority: Schema.optional(Schema.Unknown),
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
  );
export type ConversationsTicketsCreateInput =
  typeof ConversationsTicketsCreateInput.Type;

// Output Schema
export const ConversationsTicketsCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    ticket_number: Schema.optional(Schema.Number),
    channel_source: Schema.optional(
      Schema.Literals(["widget", "email", "slack", "teams"]),
    ),
    channel_detail: Schema.optional(Schema.Unknown),
    distinct_id: Schema.optional(Schema.String),
    status: Schema.optional(
      Schema.Literals(["new", "open", "pending", "on_hold", "resolved"]),
    ),
    priority: Schema.optional(Schema.Unknown),
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
  });
export type ConversationsTicketsCreateOutput =
  typeof ConversationsTicketsCreateOutput.Type;

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
