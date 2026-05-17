import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const GetUserInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  user_id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/users/{user_id}" }));
export type GetUserInput = typeof GetUserInput.Type;

// Output Schema
export const GetUserOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String,
  username: Schema.String,
  avatar: Schema.NullOr(Schema.String),
  discriminator: Schema.String,
  public_flags: Schema.Number,
  flags: Schema.Number,
  bot: Schema.optional(Schema.Boolean),
  system: Schema.optional(Schema.Boolean),
  banner: Schema.optional(Schema.NullOr(Schema.String)),
  accent_color: Schema.optional(Schema.NullOr(Schema.Number)),
  global_name: Schema.NullOr(Schema.String),
  avatar_decoration_data: Schema.optional(Schema.Unknown),
  collectibles: Schema.optional(Schema.Unknown),
  primary_guild: Schema.Unknown,
});
export type GetUserOutput = typeof GetUserOutput.Type;

// The operation
export const getUser = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetUserInput,
  outputSchema: GetUserOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
