import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const CreateChannelInviteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    channel_id: Schema.String.pipe(T.PathParam()),
  }).pipe(T.Http({ method: "POST", path: "/channels/{channel_id}/invites" }));
export type CreateChannelInviteInput = typeof CreateChannelInviteInput.Type;

// Output Schema
export const CreateChannelInviteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export type CreateChannelInviteOutput = typeof CreateChannelInviteOutput.Type;

// The operation
export const createChannelInvite = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateChannelInviteInput,
  outputSchema: CreateChannelInviteOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
