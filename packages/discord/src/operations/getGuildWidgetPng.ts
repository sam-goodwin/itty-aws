import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const GetGuildWidgetPngInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    guild_id: Schema.String.pipe(T.PathParam()),
    style: Schema.optional(Schema.String),
  },
).pipe(T.Http({ method: "GET", path: "/guilds/{guild_id}/widget.png" }));
export type GetGuildWidgetPngInput = typeof GetGuildWidgetPngInput.Type;

// Output Schema
export const GetGuildWidgetPngOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type GetGuildWidgetPngOutput = typeof GetGuildWidgetPngOutput.Type;

// The operation
export const getGuildWidgetPng = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetGuildWidgetPngInput,
  outputSchema: GetGuildWidgetPngOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
