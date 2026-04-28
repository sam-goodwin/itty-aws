import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { Forbidden, NotFound } from "../../errors";

// Input Schema
export const ConversationsTicketsDestroyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/projects/{project_id}/conversations/tickets/{id}/",
    }),
  );
export type ConversationsTicketsDestroyInput =
  typeof ConversationsTicketsDestroyInput.Type;

// Output Schema
export const ConversationsTicketsDestroyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ConversationsTicketsDestroyOutput =
  typeof ConversationsTicketsDestroyOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this ticket.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const conversationsTicketsDestroy = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ConversationsTicketsDestroyInput,
    outputSchema: ConversationsTicketsDestroyOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
