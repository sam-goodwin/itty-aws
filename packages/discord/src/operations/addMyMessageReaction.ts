import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const AddMyMessageReactionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    channel_id: Schema.String.pipe(T.PathParam()),
    message_id: Schema.String.pipe(T.PathParam()),
    emoji_name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/channels/{channel_id}/messages/{message_id}/reactions/{emoji_name}/@me",
    }),
  );
export type AddMyMessageReactionInput = typeof AddMyMessageReactionInput.Type;

// Output Schema
export const AddMyMessageReactionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type AddMyMessageReactionOutput = typeof AddMyMessageReactionOutput.Type;

// The operation
export const addMyMessageReaction = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AddMyMessageReactionInput,
    outputSchema: AddMyMessageReactionOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
