import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const ConversationsTicketsSuggestReplyCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/conversations/tickets/{id}/suggest_reply/",
    }),
  );
export type ConversationsTicketsSuggestReplyCreateInput =
  typeof ConversationsTicketsSuggestReplyCreateInput.Type;

// Output Schema
export const ConversationsTicketsSuggestReplyCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    suggestion: Schema.String,
  });
export type ConversationsTicketsSuggestReplyCreateOutput =
  typeof ConversationsTicketsSuggestReplyCreateOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this ticket.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const conversationsTicketsSuggestReplyCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConversationsTicketsSuggestReplyCreateInput,
    outputSchema: ConversationsTicketsSuggestReplyCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
