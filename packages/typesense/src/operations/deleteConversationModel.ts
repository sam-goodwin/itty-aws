import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export interface DeleteConversationModelInput {
  modelId: string;
}
export const DeleteConversationModelInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    modelId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "DELETE", path: "/conversations/models/{modelId}" }),
  ) as unknown as Schema.Codec<DeleteConversationModelInput>;

// Output Schema
export interface DeleteConversationModelOutput {
  id: string;
}
export const DeleteConversationModelOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
  }) as unknown as Schema.Codec<DeleteConversationModelOutput>;

// The operation
/**
 * Delete a conversation model
 *
 * @param modelId - The id of the conversation model to delete
 */
export const deleteConversationModel = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DeleteConversationModelInput,
    outputSchema: DeleteConversationModelOutput,
    errors: [NotFound] as const,
  }),
);
