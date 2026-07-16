import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest } from "../../errors.ts";

// Input Schema
export interface ConversationsTicketsComposeCreateInput {
  project_id: string;
  recipient_email: string;
  recipient_distinct_id?: string;
  email_subject?: string;
  email_config_id: string;
  message: string;
  rich_content?: unknown;
}
export const ConversationsTicketsComposeCreateInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    recipient_email: Schema.String,
    recipient_distinct_id: Schema.optional(Schema.String),
    email_subject: Schema.optional(Schema.String),
    email_config_id: Schema.String,
    message: Schema.String,
    rich_content: Schema.optional(Schema.Unknown),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/conversations/tickets/compose/",
    }),
  ) as unknown as Schema.Codec<ConversationsTicketsComposeCreateInput>;

// Output Schema
export interface ConversationsTicketsComposeCreateOutput {
  id: string;
  ticket_number: number;
}
export const ConversationsTicketsComposeCreateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String,
    ticket_number: Schema.Number,
  }) as unknown as Schema.Codec<ConversationsTicketsComposeCreateOutput>;

// The operation
/**
 * Create a new outbound ticket and send the first message to the customer.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const conversationsTicketsComposeCreate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ConversationsTicketsComposeCreateInput,
    outputSchema: ConversationsTicketsComposeCreateOutput,
    errors: [BadRequest] as const,
  }));
