import * as Schema from "effect/Schema";
import { ConversationModelSchemaSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const RetrieveAllConversationModelsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/conversations/models" }),
  );
export type RetrieveAllConversationModelsInput =
  typeof RetrieveAllConversationModelsInput.Type;

// Output Schema
export const RetrieveAllConversationModelsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.suspend(() => ConversationModelSchemaSchema),
  );
export type RetrieveAllConversationModelsOutput =
  typeof RetrieveAllConversationModelsOutput.Type;

// The operation
/**
 * List all conversation models
 *
 * Retrieve all conversation models
 */
export const retrieveAllConversationModels =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: RetrieveAllConversationModelsInput,
    outputSchema: RetrieveAllConversationModelsOutput,
  }));
