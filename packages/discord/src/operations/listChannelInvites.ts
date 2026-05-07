import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const ListChannelInvitesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    channel_id: Schema.String.pipe(T.PathParam()),
  }).pipe(T.Http({ method: "GET", path: "/channels/{channel_id}/invites" }));
export type ListChannelInvitesInput = typeof ListChannelInvitesInput.Type;

// Output Schema
export const ListChannelInvitesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(Schema.Unknown);
export type ListChannelInvitesOutput = typeof ListChannelInvitesOutput.Type;

// The operation
export const listChannelInvites = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListChannelInvitesInput,
  outputSchema: ListChannelInvitesOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
