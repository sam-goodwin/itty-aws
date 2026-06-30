import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export interface RetrieveConversationModelInput {
  modelId: string;
}
export const RetrieveConversationModelInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    modelId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/conversations/models/{modelId}" }),
  ) as unknown as Schema.Codec<RetrieveConversationModelInput>;

// Output Schema
export interface RetrieveConversationModelOutput {
  id: string;
}
export const RetrieveConversationModelOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
  }) as unknown as Schema.Codec<RetrieveConversationModelOutput>;

// The operation
/**
 * Retrieve a conversation model
 *
 * @param modelId - The id of the conversation model to retrieve
 */
export const retrieveConversationModel = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RetrieveConversationModelInput,
    outputSchema: RetrieveConversationModelOutput,
    errors: [NotFound] as const,
  }),
);
