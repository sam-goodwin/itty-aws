import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const DeleteAllMessageReactionsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    channel_id: Schema.String.pipe(T.PathParam()),
    message_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/channels/{channel_id}/messages/{message_id}/reactions",
    }),
  );
export type DeleteAllMessageReactionsInput =
  typeof DeleteAllMessageReactionsInput.Type;

// Output Schema
export const DeleteAllMessageReactionsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteAllMessageReactionsOutput =
  typeof DeleteAllMessageReactionsOutput.Type;

// The operation
export const deleteAllMessageReactions = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DeleteAllMessageReactionsInput,
    outputSchema: DeleteAllMessageReactionsOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
