import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const UnbanUserFromGuildInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    guild_id: Schema.String.pipe(T.PathParam()),
    user_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "DELETE", path: "/guilds/{guild_id}/bans/{user_id}" }),
  );
export type UnbanUserFromGuildInput = typeof UnbanUserFromGuildInput.Type;

// Output Schema
export const UnbanUserFromGuildOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type UnbanUserFromGuildOutput = typeof UnbanUserFromGuildOutput.Type;

// The operation
export const unbanUserFromGuild = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UnbanUserFromGuildInput,
  outputSchema: UnbanUserFromGuildOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
