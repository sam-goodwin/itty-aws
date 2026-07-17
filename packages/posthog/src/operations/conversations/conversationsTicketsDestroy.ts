import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface ConversationsTicketsDestroyInput {
  id: string;
  project_id: string;
}
export const ConversationsTicketsDestroyInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/projects/{project_id}/conversations/tickets/{id}/",
    }),
  ) as unknown as Schema.Codec<ConversationsTicketsDestroyInput>;

// Output Schema
export type ConversationsTicketsDestroyOutput = void;
export const ConversationsTicketsDestroyOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ConversationsTicketsDestroyOutput>;

// The operation
/**
 *
 * @param id - The ticket's UUID or its numeric ticket number.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const conversationsTicketsDestroy = /*@__PURE__*/ API.make(() => ({
  inputSchema: ConversationsTicketsDestroyInput,
  outputSchema: ConversationsTicketsDestroyOutput,
  errors: [Forbidden, NotFound] as const,
}));
