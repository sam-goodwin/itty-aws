import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface ConversationsTicketsMessagesListInput {
  id: string;
  project_id: string;
  limit?: number;
  offset?: number;
}
export const ConversationsTicketsMessagesListInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/conversations/tickets/{id}/messages/",
    }),
  ) as unknown as Schema.Codec<ConversationsTicketsMessagesListInput>;

// Output Schema
export interface ConversationsTicketsMessagesListOutput {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: {
    id: string;
    content: string;
    rich_content: unknown;
    author_type: string;
    author_name: string;
    is_private: boolean;
    created_at: string;
  }[];
}
export const ConversationsTicketsMessagesListOutput =
  /*@__PURE__*/ Schema.Struct({
    count: Schema.Number,
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        content: Schema.String,
        rich_content: Schema.Unknown,
        author_type: Schema.String,
        author_name: Schema.String,
        is_private: Schema.Boolean,
        created_at: Schema.String,
      }),
    ),
  }) as unknown as Schema.Codec<ConversationsTicketsMessagesListOutput>;

// The operation
/**
 * Return the message thread for a ticket, ordered chronologically (paginated).
 *
 * @param id - The ticket's UUID or its numeric ticket number.
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const conversationsTicketsMessagesList =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ConversationsTicketsMessagesListInput,
    outputSchema: ConversationsTicketsMessagesListOutput,
  }));
