import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface ConversationsViewsDestroyInput {
  project_id: string;
  short_id: string;
}
export const ConversationsViewsDestroyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    short_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/projects/{project_id}/conversations/views/{short_id}/",
    }),
  ) as unknown as Schema.Codec<ConversationsViewsDestroyInput>;

// Output Schema
export type ConversationsViewsDestroyOutput = void;
export const ConversationsViewsDestroyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<ConversationsViewsDestroyOutput>;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const conversationsViewsDestroy = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ConversationsViewsDestroyInput,
    outputSchema: ConversationsViewsDestroyOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
