import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const UpdateMyUserInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  username: Schema.String,
  avatar: Schema.optional(Schema.NullOr(Schema.String)),
  banner: Schema.optional(Schema.NullOr(Schema.String)),
}).pipe(T.Http({ method: "PATCH", path: "/users/@me" }));
export type UpdateMyUserInput = typeof UpdateMyUserInput.Type;

// Output Schema
export const UpdateMyUserOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  primary_guild: Schema.optional(Schema.Unknown),
  mfa_enabled: Schema.Boolean,
  locale: Schema.Unknown,
  premium_type: Schema.optional(Schema.Unknown),
  email: Schema.optional(Schema.NullOr(Schema.String)),
  verified: Schema.optional(Schema.Boolean),
});
export type UpdateMyUserOutput = typeof UpdateMyUserOutput.Type;

// The operation
export const updateMyUser = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpdateMyUserInput,
  outputSchema: UpdateMyUserOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
