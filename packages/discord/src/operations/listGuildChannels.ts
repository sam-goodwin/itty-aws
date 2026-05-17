import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const ListGuildChannelsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    guild_id: Schema.String.pipe(T.PathParam()),
  },
).pipe(T.Http({ method: "GET", path: "/guilds/{guild_id}/channels" }));
export type ListGuildChannelsInput = typeof ListGuildChannelsInput.Type;

// Output Schema
export const ListGuildChannelsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
  Schema.Unknown,
);
export type ListGuildChannelsOutput = typeof ListGuildChannelsOutput.Type;

// The operation
export const listGuildChannels = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListGuildChannelsInput,
  outputSchema: ListGuildChannelsOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
