import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest } from "../errors.ts";

// Input Schema
export const CreateConversationModelInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "POST", path: "/conversations/models" }),
  );
export type CreateConversationModelInput =
  typeof CreateConversationModelInput.Type;

// Output Schema
export const CreateConversationModelOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
  });
export type CreateConversationModelOutput =
  typeof CreateConversationModelOutput.Type;

// The operation
/**
 * Create a conversation model
 *
 * Create a Conversation Model
 */
export const createConversationModel = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CreateConversationModelInput,
    outputSchema: CreateConversationModelOutput,
    errors: [BadRequest] as const,
  }),
);
