import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const ListMyGuildsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  before: Schema.optional(Schema.String),
  after: Schema.optional(Schema.String),
  limit: Schema.optional(Schema.Number),
  with_counts: Schema.optional(Schema.Boolean),
}).pipe(T.Http({ method: "GET", path: "/users/@me/guilds" }));
export type ListMyGuildsInput = typeof ListMyGuildsInput.Type;

// Output Schema
export const ListMyGuildsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
  Schema.Struct({
    id: Schema.String,
    name: Schema.String,
    icon: Schema.NullOr(Schema.String),
    banner: Schema.NullOr(Schema.String),
    owner: Schema.Boolean,
    permissions: Schema.String,
    features: Schema.Array(Schema.Unknown),
    approximate_member_count: Schema.optional(Schema.NullOr(Schema.Number)),
    approximate_presence_count: Schema.optional(Schema.NullOr(Schema.Number)),
  }),
);
export type ListMyGuildsOutput = typeof ListMyGuildsOutput.Type;

// The operation
export const listMyGuilds = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListMyGuildsInput,
  outputSchema: ListMyGuildsOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
