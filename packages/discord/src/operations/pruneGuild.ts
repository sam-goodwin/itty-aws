import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const PruneGuildInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  guild_id: Schema.String.pipe(T.PathParam()),
  days: Schema.optional(Schema.NullOr(Schema.Number)),
  compute_prune_count: Schema.optional(Schema.NullOr(Schema.Boolean)),
  include_roles: Schema.optional(Schema.Unknown),
}).pipe(T.Http({ method: "POST", path: "/guilds/{guild_id}/prune" }));
export type PruneGuildInput = typeof PruneGuildInput.Type;

// Output Schema
export const PruneGuildOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  pruned: Schema.NullOr(Schema.Number),
});
export type PruneGuildOutput = typeof PruneGuildOutput.Type;

// The operation
export const pruneGuild = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PruneGuildInput,
  outputSchema: PruneGuildOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
