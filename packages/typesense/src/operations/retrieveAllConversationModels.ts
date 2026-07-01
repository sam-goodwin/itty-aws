import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface RetrieveAllConversationModelsInput {}
export const RetrieveAllConversationModelsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/conversations/models" }),
  ) as unknown as Schema.Codec<RetrieveAllConversationModelsInput>;

// Output Schema
export type RetrieveAllConversationModelsOutput = { id: string }[];
export const RetrieveAllConversationModelsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.Struct({
      id: Schema.String,
    }),
  ) as unknown as Schema.Codec<RetrieveAllConversationModelsOutput>;

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
