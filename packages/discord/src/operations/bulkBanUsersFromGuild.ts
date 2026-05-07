import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const BulkBanUsersFromGuildInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    guild_id: Schema.String.pipe(T.PathParam()),
    user_ids: Schema.Array(Schema.String),
    delete_message_seconds: Schema.optional(Schema.NullOr(Schema.Number)),
  }).pipe(T.Http({ method: "POST", path: "/guilds/{guild_id}/bulk-ban" }));
export type BulkBanUsersFromGuildInput = typeof BulkBanUsersFromGuildInput.Type;

// Output Schema
export const BulkBanUsersFromGuildOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    banned_users: Schema.Array(Schema.String),
    failed_users: Schema.Array(Schema.String),
  });
export type BulkBanUsersFromGuildOutput =
  typeof BulkBanUsersFromGuildOutput.Type;

// The operation
export const bulkBanUsersFromGuild = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: BulkBanUsersFromGuildInput,
    outputSchema: BulkBanUsersFromGuildOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
