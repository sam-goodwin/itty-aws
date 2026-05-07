import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const PreviewPruneGuildInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    guild_id: Schema.String.pipe(T.PathParam()),
    days: Schema.optional(Schema.Number),
    include_roles: Schema.optional(Schema.String),
  },
).pipe(T.Http({ method: "GET", path: "/guilds/{guild_id}/prune" }));
export type PreviewPruneGuildInput = typeof PreviewPruneGuildInput.Type;

// Output Schema
export const PreviewPruneGuildOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pruned: Schema.NullOr(Schema.Number),
  });
export type PreviewPruneGuildOutput = typeof PreviewPruneGuildOutput.Type;

// The operation
export const previewPruneGuild = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PreviewPruneGuildInput,
  outputSchema: PreviewPruneGuildOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
