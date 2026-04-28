import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { Forbidden, NotFound } from "../../errors";

// Input Schema
export const ConversationsQueueDestroyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    conversation: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    queue_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/environments/{project_id}/conversations/{conversation}/queue/{queue_id}/",
    }),
  );
export type ConversationsQueueDestroyInput =
  typeof ConversationsQueueDestroyInput.Type;

// Output Schema
export const ConversationsQueueDestroyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ConversationsQueueDestroyOutput =
  typeof ConversationsQueueDestroyOutput.Type;

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
    errors: [Forbidden, NotFound] as const,
  }),
);
