import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface ConversationsDestroyInput {
  conversation: string;
  project_id: string;
}
export const ConversationsDestroyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conversation: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/projects/{project_id}/conversations/{conversation}/",
    }),
  ) as unknown as Schema.Codec<ConversationsDestroyInput>;

// Output Schema
export type ConversationsDestroyOutput = void;
export const ConversationsDestroyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ConversationsDestroyOutput>;

// The operation
/**
 * Delete a conversation.
 *
 * @param conversation - A UUID string identifying this conversation.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const conversationsDestroy = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ConversationsDestroyInput,
    outputSchema: ConversationsDestroyOutput,
  }),
);
