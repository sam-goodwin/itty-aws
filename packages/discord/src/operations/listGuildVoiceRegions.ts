import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const ListGuildVoiceRegionsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    guild_id: Schema.String.pipe(T.PathParam()),
  }).pipe(T.Http({ method: "GET", path: "/guilds/{guild_id}/regions" }));
export type ListGuildVoiceRegionsInput = typeof ListGuildVoiceRegionsInput.Type;

// Output Schema
export const ListGuildVoiceRegionsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.Struct({
      id: Schema.String,
      name: Schema.String,
      custom: Schema.Boolean,
      deprecated: Schema.Boolean,
      optimal: Schema.Boolean,
    }),
  );
export type ListGuildVoiceRegionsOutput =
  typeof ListGuildVoiceRegionsOutput.Type;

// The operation
export const listGuildVoiceRegions = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ListGuildVoiceRegionsInput,
    outputSchema: ListGuildVoiceRegionsOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
