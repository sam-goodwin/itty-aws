import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const GetGuildWidgetSettingsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    guild_id: Schema.String.pipe(T.PathParam()),
  }).pipe(T.Http({ method: "GET", path: "/guilds/{guild_id}/widget" }));
export type GetGuildWidgetSettingsInput =
  typeof GetGuildWidgetSettingsInput.Type;

// Output Schema
export const GetGuildWidgetSettingsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.Boolean,
    channel_id: Schema.Unknown,
  });
export type GetGuildWidgetSettingsOutput =
  typeof GetGuildWidgetSettingsOutput.Type;

// The operation
export const getGuildWidgetSettings = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetGuildWidgetSettingsInput,
    outputSchema: GetGuildWidgetSettingsOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
