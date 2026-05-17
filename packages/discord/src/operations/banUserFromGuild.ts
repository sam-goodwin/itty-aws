import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const BanUserFromGuildInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  guild_id: Schema.String.pipe(T.PathParam()),
  user_id: Schema.String.pipe(T.PathParam()),
  delete_message_seconds: Schema.optional(Schema.NullOr(Schema.Number)),
  delete_message_days: Schema.optional(Schema.NullOr(Schema.Number)),
}).pipe(T.Http({ method: "PUT", path: "/guilds/{guild_id}/bans/{user_id}" }));
export type BanUserFromGuildInput = typeof BanUserFromGuildInput.Type;

// Output Schema
export const BanUserFromGuildOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type BanUserFromGuildOutput = typeof BanUserFromGuildOutput.Type;

// The operation
export const banUserFromGuild = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: BanUserFromGuildInput,
  outputSchema: BanUserFromGuildOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
