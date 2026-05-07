import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const GetGuildsOnboardingInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    guild_id: Schema.String.pipe(T.PathParam()),
  }).pipe(T.Http({ method: "GET", path: "/guilds/{guild_id}/onboarding" }));
export type GetGuildsOnboardingInput = typeof GetGuildsOnboardingInput.Type;

// Output Schema
export const GetGuildsOnboardingOutput =
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
export type GetGuildsOnboardingOutput = typeof GetGuildsOnboardingOutput.Type;

// The operation
export const getGuildsOnboarding = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetGuildsOnboardingInput,
  outputSchema: GetGuildsOnboardingOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
