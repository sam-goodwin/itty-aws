import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const GuildRoleMemberCountsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    guild_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/guilds/{guild_id}/roles/member-counts" }),
  );
export type GuildRoleMemberCountsInput = typeof GuildRoleMemberCountsInput.Type;

// Output Schema
export const GuildRoleMemberCountsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Record(Schema.String, Schema.Number);
export type GuildRoleMemberCountsOutput =
  typeof GuildRoleMemberCountsOutput.Type;

// The operation
export const guildRoleMemberCounts = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GuildRoleMemberCountsInput,
    outputSchema: GuildRoleMemberCountsOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
