import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const BulkUpdateGuildChannelsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    guild_id: Schema.String.pipe(T.PathParam()),
  }).pipe(T.Http({ method: "PATCH", path: "/guilds/{guild_id}/channels" }));
export type BulkUpdateGuildChannelsInput =
  typeof BulkUpdateGuildChannelsInput.Type;

// Output Schema
export const BulkUpdateGuildChannelsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type BulkUpdateGuildChannelsOutput =
  typeof BulkUpdateGuildChannelsOutput.Type;

// The operation
export const bulkUpdateGuildChannels = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: BulkUpdateGuildChannelsInput,
    outputSchema: BulkUpdateGuildChannelsOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
