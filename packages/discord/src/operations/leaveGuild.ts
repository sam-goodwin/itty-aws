import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const LeaveGuildInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  guild_id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "DELETE", path: "/users/@me/guilds/{guild_id}" }));
export type LeaveGuildInput = typeof LeaveGuildInput.Type;

// Output Schema
export const LeaveGuildOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type LeaveGuildOutput = typeof LeaveGuildOutput.Type;

// The operation
export const leaveGuild = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: LeaveGuildInput,
  outputSchema: LeaveGuildOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
