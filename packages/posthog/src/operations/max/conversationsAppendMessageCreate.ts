import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface ConversationsAppendMessageCreateInput {
  conversation: string;
  project_id: string;
  content?: string;
}
export const ConversationsAppendMessageCreateInput =
  /*@__PURE__*/ Schema.Struct({
    conversation: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    content: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/conversations/{conversation}/append_message/",
    }),
  ) as unknown as Schema.Codec<ConversationsAppendMessageCreateInput>;

// Output Schema
export interface ConversationsAppendMessageCreateOutput {
  content?: string;
}
export const ConversationsAppendMessageCreateOutput =
  /*@__PURE__*/ Schema.Struct({
    content: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<ConversationsAppendMessageCreateOutput>;

// The operation
/**
 * Appends a message to an existing conversation without triggering AI processing.
 * This is used for client-side generated messages that need to be persisted
 * (e.g., support ticket confirmation messages).
 *
 * @param conversation - A UUID string identifying this conversation.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const conversationsAppendMessageCreate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ConversationsAppendMessageCreateInput,
    outputSchema: ConversationsAppendMessageCreateOutput,
  }));
