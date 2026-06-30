import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface ConversationsQueueDestroyInput {
  conversation: string;
  project_id: string;
  queue_id: string;
}
export const ConversationsQueueDestroyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conversation: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    queue_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/projects/{project_id}/conversations/{conversation}/queue/{queue_id}/",
    }),
  ) as unknown as Schema.Codec<ConversationsQueueDestroyInput>;

// Output Schema
export type ConversationsQueueDestroyOutput = void;
export const ConversationsQueueDestroyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ConversationsQueueDestroyOutput>;

// The operation
/**
 *
 * @param conversation - A UUID string identifying this conversation.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const conversationsQueueDestroy = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ConversationsQueueDestroyInput,
    outputSchema: ConversationsQueueDestroyOutput,
  }),
);
