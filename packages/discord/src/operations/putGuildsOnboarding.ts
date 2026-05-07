import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const PutGuildsOnboardingInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    guild_id: Schema.String.pipe(T.PathParam()),
    prompts: Schema.optional(
      Schema.NullOr(
        Schema.Array(
          Schema.Struct({
            title: Schema.String,
            options: Schema.Array(
              Schema.Struct({
                id: Schema.optional(Schema.Unknown),
                title: Schema.String,
                description: Schema.optional(Schema.NullOr(Schema.String)),
                emoji_id: Schema.optional(Schema.Unknown),
                emoji_name: Schema.optional(Schema.NullOr(Schema.String)),
                emoji_animated: Schema.optional(Schema.NullOr(Schema.Boolean)),
                role_ids: Schema.optional(
                  Schema.NullOr(Schema.Array(Schema.String)),
                ),
                channel_ids: Schema.optional(
                  Schema.NullOr(Schema.Array(Schema.String)),
                ),
              }),
            ),
            single_select: Schema.optional(Schema.NullOr(Schema.Boolean)),
            required: Schema.optional(Schema.NullOr(Schema.Boolean)),
            in_onboarding: Schema.optional(Schema.NullOr(Schema.Boolean)),
            type: Schema.optional(Schema.Unknown),
            id: Schema.String,
          }),
        ),
      ),
    ),
    enabled: Schema.optional(Schema.NullOr(Schema.Boolean)),
    default_channel_ids: Schema.optional(
      Schema.NullOr(Schema.Array(Schema.String)),
    ),
    mode: Schema.optional(Schema.Unknown),
  }).pipe(T.Http({ method: "PUT", path: "/guilds/{guild_id}/onboarding" }));
export type PutGuildsOnboardingInput = typeof PutGuildsOnboardingInput.Type;

// Output Schema
export const PutGuildsOnboardingOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    guild_id: Schema.String,
    prompts: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        title: Schema.String,
        options: Schema.Array(
          Schema.Struct({
            id: Schema.String,
            title: Schema.String,
            description: Schema.String,
            emoji: Schema.Struct({
              id: Schema.Unknown,
              name: Schema.NullOr(Schema.String),
              animated: Schema.Boolean,
            }),
            role_ids: Schema.Array(Schema.String),
            channel_ids: Schema.Array(Schema.String),
          }),
        ),
        single_select: Schema.Boolean,
        required: Schema.Boolean,
        in_onboarding: Schema.Boolean,
        type: Schema.Unknown,
      }),
    ),
    default_channel_ids: Schema.Array(Schema.String),
    enabled: Schema.Boolean,
    mode: Schema.Unknown,
  });
export type PutGuildsOnboardingOutput = typeof PutGuildsOnboardingOutput.Type;

// The operation
export const putGuildsOnboarding = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PutGuildsOnboardingInput,
  outputSchema: PutGuildsOnboardingOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
