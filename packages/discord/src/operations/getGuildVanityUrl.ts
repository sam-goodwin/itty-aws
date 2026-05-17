import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const GetGuildVanityUrlInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    guild_id: Schema.String.pipe(T.PathParam()),
  },
).pipe(T.Http({ method: "GET", path: "/guilds/{guild_id}/vanity-url" }));
export type GetGuildVanityUrlInput = typeof GetGuildVanityUrlInput.Type;

// Output Schema
export const GetGuildVanityUrlOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    code: Schema.NullOr(Schema.String),
    uses: Schema.Number,
    error: Schema.optional(Schema.Unknown),
  });
export type GetGuildVanityUrlOutput = typeof GetGuildVanityUrlOutput.Type;

// The operation
export const getGuildVanityUrl = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetGuildVanityUrlInput,
  outputSchema: GetGuildVanityUrlOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
