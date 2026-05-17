import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const ListGuildInvitesInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  guild_id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/guilds/{guild_id}/invites" }));
export type ListGuildInvitesInput = typeof ListGuildInvitesInput.Type;

// Output Schema
export const ListGuildInvitesOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
  Schema.Unknown,
);
export type ListGuildInvitesOutput = typeof ListGuildInvitesOutput.Type;

// The operation
export const listGuildInvites = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListGuildInvitesInput,
  outputSchema: ListGuildInvitesOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
