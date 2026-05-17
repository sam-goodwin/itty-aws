import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const DeleteThreadMemberInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    channel_id: Schema.String.pipe(T.PathParam()),
    user_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/channels/{channel_id}/thread-members/{user_id}",
    }),
  );
export type DeleteThreadMemberInput = typeof DeleteThreadMemberInput.Type;

// Output Schema
export const DeleteThreadMemberOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteThreadMemberOutput = typeof DeleteThreadMemberOutput.Type;

// The operation
export const deleteThreadMember = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteThreadMemberInput,
  outputSchema: DeleteThreadMemberOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
