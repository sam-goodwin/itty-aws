import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const AddThreadMemberInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  channel_id: Schema.String.pipe(T.PathParam()),
  user_id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "PUT",
    path: "/channels/{channel_id}/thread-members/{user_id}",
  }),
);
export type AddThreadMemberInput = typeof AddThreadMemberInput.Type;

// Output Schema
export const AddThreadMemberOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type AddThreadMemberOutput = typeof AddThreadMemberOutput.Type;

// The operation
export const addThreadMember = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AddThreadMemberInput,
  outputSchema: AddThreadMemberOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
