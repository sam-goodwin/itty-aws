import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const RetrieveConversationModelInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    modelId: Schema.String.pipe(T.PathParam()),
  }).pipe(T.Http({ method: "GET", path: "/conversations/models/{modelId}" }));
export type RetrieveConversationModelInput =
  typeof RetrieveConversationModelInput.Type;

// Output Schema
export const RetrieveConversationModelOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
  });
export type RetrieveConversationModelOutput =
  typeof RetrieveConversationModelOutput.Type;

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
