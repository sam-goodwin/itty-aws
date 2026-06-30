import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface ConversationsTicketsReplyCreateInput {
  id: string;
  project_id: string;
  message: string;
  is_private?: boolean;
  rich_content?: unknown;
}
export const ConversationsTicketsReplyCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    message: Schema.String,
    is_private: Schema.optional(Schema.Boolean),
    rich_content: Schema.optional(Schema.Unknown),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/conversations/tickets/{id}/reply/",
    }),
  ) as unknown as Schema.Codec<ConversationsTicketsReplyCreateInput>;

// Output Schema
export interface ConversationsTicketsReplyCreateOutput {
  id: string;
  content: string;
  rich_content: unknown;
  author_type: string;
  author_name: string;
  is_private: boolean;
  created_at: string;
}
export const ConversationsTicketsReplyCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    content: Schema.String,
    rich_content: Schema.Unknown,
    author_type: Schema.String,
    author_name: Schema.String,
    is_private: Schema.Boolean,
    created_at: Schema.String,
  }) as unknown as Schema.Codec<ConversationsTicketsReplyCreateOutput>;

// The operation
/**
 * Post a reply or internal note to a ticket.
 * With is_private=false, the reply is delivered to the customer via the
 * ticket's channel (email, Slack, Teams, GitHub). With is_private=true,
 * the message is stored as an internal note only visible to team members.
 *
 * @param id - The ticket's UUID or its numeric ticket number.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const conversationsTicketsReplyCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConversationsTicketsReplyCreateInput,
    outputSchema: ConversationsTicketsReplyCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
