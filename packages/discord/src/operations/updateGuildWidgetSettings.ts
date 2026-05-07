import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const UpdateGuildWidgetSettingsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    guild_id: Schema.String.pipe(T.PathParam()),
    channel_id: Schema.optional(Schema.Unknown),
    enabled: Schema.optional(Schema.NullOr(Schema.Boolean)),
  }).pipe(T.Http({ method: "PATCH", path: "/guilds/{guild_id}/widget" }));
export type UpdateGuildWidgetSettingsInput =
  typeof UpdateGuildWidgetSettingsInput.Type;

// Output Schema
export const UpdateGuildWidgetSettingsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.Boolean,
    channel_id: Schema.Unknown,
  });
export type UpdateGuildWidgetSettingsOutput =
  typeof UpdateGuildWidgetSettingsOutput.Type;

// The operation
export const updateGuildWidgetSettings = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: UpdateGuildWidgetSettingsInput,
    outputSchema: UpdateGuildWidgetSettingsOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
